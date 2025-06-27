import connectDB from "@/Lib/config/db";
import BlogModel from "@/Lib/models/blogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

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

export async function GET() {
  await loadDB();

  try {
    console.log("✅ Fetching blog posts...");
    return NextResponse.json({ msg: "API is working" });
  } catch (error) {
    console.error("❌ GET Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
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
        success : true,
      msg: "Blog Added successfully"
    });
  } catch (error) {
    console.error("❌ POST Error:", error.message);
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }
}
