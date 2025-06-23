import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-[130px] sm:w-[100px] lg:w-[150px]"
        />
      
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
          Get Started <Image src={assets.arrow} alt="arrow" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium ">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Explore the latest insights, trends, and stories shaping the world today. From tech innovations to lifestyle tips, discover fresh perspectives that inspire and inform.
        </p>
        <form
          action=""
          className="shadow-[-7px_7px_0px_#000000] flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none cursor-pointer"
          />
          <button
            type="submit"
            className="cursor-pointer border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
