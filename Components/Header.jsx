import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import "animate.css";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between animate__animated animate__fadeInDown">
        <Image
          src={assets.logo}
          alt="Logo"
          className="cursor-pointer w-[130px] sm:w-[100px] lg:w-[150px] transition-all duration-300 hover:scale-105"
        />

        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] transition-all duration-300 hover:bg-black hover:text-white hover:shadow-none active:scale-95">
          Get Started
          <Image
            src={assets.arrow}
            alt="arrow"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      <div className="text-center my-10 animate__animated animate__fadeInUp">
        <h1 className="text-3xl sm:text-5xl font-semibold transition-all duration-300 hover:tracking-wide">
          Recent Publications
        </h1>
        <p className="mt-8 max-w-[740px] m-auto text-xs sm:text-base text-gray-700 px-4">
          Explore the latest insights, trends, and stories shaping the world today.
          From tech innovations to lifestyle tips, discover fresh perspectives
          that inspire and inform.
        </p>

        <form
          action=""
          className="shadow-[-7px_7px_0px_#000000] flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black transition-all duration-300 hover:shadow-none"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none cursor-pointer text-sm sm:text-base w-full py-4"
          />
          <button
            type="submit"
            className="cursor-pointer border-l border-black py-4 px-4 sm:px-8 bg-white hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
