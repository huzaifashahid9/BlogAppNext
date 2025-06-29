"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Bounce, ToastContainer } from "react-toastify";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="py-5 px-5 md:px-12 lg:px-28">
        {/* Logo and Button */}
        <div className="flex items-center justify-between" data-aos="fade-down">
          <Image
            src={assets.logo}
            alt="Logo"
            className="cursor-pointer w-[130px] sm:w-[100px] lg:w-[150px] transition-all duration-300 hover:scale-105"
          />

          <Link href={"/admin/addProduct"}>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] transition-all duration-300 hover:bg-black hover:text-white hover:shadow-none active:scale-95">
              Get Started
              <Image
                src={assets.arrow}
                alt="arrow"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>

        {/* Text Section */}
        <div className="text-center my-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-5xl font-semibold transition-all duration-300 hover:tracking-wide">
            Recent Publications
          </h1>
          <p className="mt-8 max-w-[740px] m-auto text-xs sm:text-base text-gray-700 px-4">
            Explore the latest insights, trends, and stories shaping the world
            today. From tech innovations to lifestyle tips, discover fresh
            perspectives that inspire and inform.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
