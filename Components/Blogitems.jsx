import React from "react";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

const Blogitems = ({ title, description, category, image, id }) => {
  return (
    <div
      className="max-w-[330px] sm:max-w-[300px] bg-white border border-black rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[-8px_8px_0px_#000000] animate__animated animate__fadeInUp"
    >
      <Link href={`/blog/${id}`}>
        <Image
          src={image}
          alt="img"
          width={400}
          height={400}
          className="border-b border-black w-full h-[200px] object-cover"
        />
      </Link>

      <p className="ml-5 mt-5 px-2 py-1 inline-block bg-black text-white text-sm rounded-sm hover:bg-gray-800 transition-colors duration-300">
        {category}
      </p>

      <div className="p-5">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700 line-clamp-3">
          {description}
        </p>

        <Link href={`/blog/${id}`}>
          <div className="flex items-center justify-between text-sm text-gray-500 cursor-pointer hover:text-black transition-colors duration-300 group">
            <span className="group-hover:underline">Read more</span>
            <Image
              src={assets.arrow}
              alt="arrow"
              className="inline-block ml-2 transition-all duration-300 group-hover:translate-x-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogitems;
