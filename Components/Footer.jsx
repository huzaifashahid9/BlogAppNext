import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image
        src={assets.logo_light}
        alt="Huzaifa Blog Logo"
        width={120}
        className="cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <p className="text-sm text-white">
        All right reserved. Copyright <a target="_blank" href="https://github.com/huzaifashahid9/"><span className="text-blue-400">@Huzaifa</span></a>
      </p>
      <div className="flex">
        <a target="_blank" href="https://www.facebook.com/m.huzaifa.587297/">
          <Image src={assets.facebook_icon} alt="pic" />
        </a>
        <a target="_blank" href="https://www.huzaifashahid.xyz">
          <Image src={assets.twitter_icon} alt="pic" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/huzaifashahid9">
          <Image src={assets.googleplus_icon} alt="pic" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
