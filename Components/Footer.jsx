import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import "animate.css";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-4 sm:gap-0 sm:flex-row bg-black py-6 items-center animate__animated animate__fadeInUp">
      {/* Logo */}
      <Image
        src={assets.logo_light}
        alt="Huzaifa Blog Logo"
        width={120}
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Copyright Text */}
      <p className="text-sm text-white text-center px-4">
        All rights reserved. ©{" "}
        <a
          target="_blank"
          href="https://github.com/huzaifashahid9/"
          className="text-blue-400 hover:underline transition-all"
        >
          @Huzaifa
        </a>
      </p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a
          target="_blank"
          href="https://www.facebook.com/m.huzaifa.587297/"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={assets.facebook_icon} alt="facebook" width={40} height={30} />
        </a>
        <a
          target="_blank"
          href="https://www.huzaifashahid.xyz"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={assets.twitter_icon} alt="website" width={40} height={30} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/huzaifashahid9"
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={assets.googleplus_icon} alt="linkedin" width={40} height={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
