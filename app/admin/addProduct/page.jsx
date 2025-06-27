"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
const page = () => {
  const [image, setImage] = useState(false);
  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4 cursor-pointer"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            alt="area"
            height={70}
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
        <input className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Type here" required />
        <p className="text-xl mt-4">Blog description</p>
        <textarea rows={6} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="write content here" required />
        <p className="text-xl mt-4">Blog category</p>
        <select name="category" className=" w-40 sm:w-[500px] mt-4 px-4 py-3 border" required>
            <option value="Technology">Technology</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
        </select> <br />
        <button className="mt-8 h-12 w-40 bg-black text-white" type="submit">Add Blog</button>
      </form>
    </>
  );
};

export default page;
