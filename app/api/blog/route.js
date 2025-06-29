import connectDB from "@/Lib/config/db";
import BlogModel from "@/Lib/models/blogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import fs from "fs"

// Ensure DB connects once
let isConnected = false;
const loadDB = async () => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (error) {
      console.error(`❌ DB Connection Error: ${error.message}`);
    }
  }
};

export async function GET(request) {
  await loadDB();

  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    try {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json({ blog });
    } catch (error) {
      console.log(`❌ Error fetching blog with ID ${blogId}:`, error.message);
      return NextResponse.json(
        { error: "Failed to fetch blog post" },
        { status: 500 }
      );
    }
  } else {
    try {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs });
    } catch (error) {
      console.error("❌ GET Error:", error.message);
      return NextResponse.json(
        { error: "Failed to fetch blog posts" },
        { status: 500 }
      );
    }
  }
}

export async function POST(request) {
  await loadDB();

  try {
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image || !image.name) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    const timeStamp = Date.now();
    const buffer = Buffer.from(await image.arrayBuffer());
    const fileName = `${timeStamp}_${image.name}`;
    const path = `./public/${fileName}`;

    await writeFile(path, buffer);

    const imageUrl = `/${fileName}`;
    console.log(`✅ Image saved at: ${path}`);

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: `${imageUrl}`,
      authorImg: `${formData.get("authorImg")}`,
      date: new Date(),
    };

    await BlogModel.create(blogData);
    console.log(`✅ Blog post created`);
    return NextResponse.json({
      success: true,
      msg: "Blog Added successfully",
    });
  } catch (error) {
    console.error("❌ POST Error:", error.message);
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }
}


export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id)
  fs.unlink(`./public${blog.image}`, () => { })
  await BlogModel.findByIdAndDelete(id)
  return NextResponse.json({msg : "Blog Deletelly Successfully"})

}