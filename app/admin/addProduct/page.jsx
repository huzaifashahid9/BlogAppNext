"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Technology",
    author: "John Doe",
    authorImg: "/author_img.png",
  });

  const onChangedHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("authorImg", data.authorImg);

      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        setImage(false); // Reset image after successful upload
        setData({
          title: "",
          description: "",
          category: "Technology",
          author: "John Doe",
          authorImg: "/author_img.png",
        });

        toast.success("Blog posted successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error posting blog");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4 cursor-pointer"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            width={140}
            height={70}
            alt="Upload Thumbnail"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangedHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />

        <p className="text-xl mt-4">Blog description</p>
        <textarea
          name="description"
          onChange={onChangedHandler}
          value={data.description}
          rows={6}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder="Write content here"
          required
        />

        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangedHandler}
          value={data.category}
          className="w-40 sm:w-[500px] mt-4 px-4 py-3 border"
          required
        >
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <br />
        <button
          className={`rounded-lg mb-10 mt-8 h-12 w-40 bg-white text-black cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-black hover:text-white border border-black ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></span>
          ) : (
            "Add Blog"
          )}
        </button>
      </form>
    </>
  );
};

export default Page;
