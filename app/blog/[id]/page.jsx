"use client";

import { assets, blog_data } from "@/Assets/assets";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";
import "animate.css";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id === parseInt(id)) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <>
          {/* Header */}
          <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28 animate__animated animate__fadeInDown">
            <div className="flex justify-between items-center">
              <Link href={"/"}>
                <Image
                  src={assets.logo}
                  alt="Logo"
                  className="w-[130px] sm:w-[100px] lg:w-[150px] cursor-pointer"
                />
              </Link>
              <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] transition-all duration-300 hover:bg-black hover:text-white hover:shadow-none active:scale-95">
                Get Started
                <Image
                  src={assets.arrow}
                  alt="arrow"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
            <div className="text-center my-24">
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
                {data.title}
              </h1>
              <Image
                width={60}
                height={60}
                className="mx-auto mt-6 border border-white rounded-full"
                src={data.author_img}
                alt="icon"
              />
              <p className="text-gray-700 mt-2">{data.author}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-[800px] mx-5 md:mx-auto mt-[-100px] mb-10 animate__animated animate__fadeInUp">
            <Image
              src={data.image}
              alt="blog image"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="mt-3 text-gray-700 text-sm">
              {data.category +
                " | " +
                new Date(Number(data.date)).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </p>

            <h1 className="my-8 text-[26px] font-bold animate__animated animate__fadeInLeft">
              Introduction
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              In today's fast-paced world, personal growth is not just a
              luxury—it's a necessity. Taking time to reflect, learn, and
              improve can lead to greater satisfaction both personally and
              professionally. This guide offers key insights and practical steps
              to help you on your journey of self-improvement.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInLeft">
              Step 1: Self-Reflection
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              Before making any changes in life, it’s essential to look inward.
              Take time to evaluate your strengths, weaknesses, goals, and
              passions. Ask yourself what truly matters and where you want to
              go. Journaling, meditation, or even quiet thinking can help
              uncover hidden patterns and motivations.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInRight">
              Step 2: Setting Clear Goals
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInLeft">
              Once you've reflected, the next step is goal-setting. Define what
              success looks like for you and break it down into small,
              achievable steps. Clarity in goals gives you direction and
              motivation to keep moving forward.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInLeft">
              Step 3: Consistent Action
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              Consistency is key to long-term improvement. Small daily
              actions—like reading, exercising, or learning a new skill—compound
              over time and bring significant results. Don't wait for the
              perfect moment; start with what you have and improve as you go.
            </p>

            <h3 className="text-2xl sm:text-5xl font-semibold text-center mt-16 animate__animated animate__fadeInUp">
              Conclusion
            </h3>
            <p className="mt-3 text-gray-700 text-center leading-relaxed animate__animated animate__fadeInUp">
              Personal growth is a lifelong journey. By taking the time to
              reflect, set clear goals, and take consistent action, you can
              create a fulfilling and successful life. Remember, every small
              step counts, so start today!
            </p>

            {/* Share Section */}
            <div className="my-24">
              <p className="text-black font-semibold mb-4">
                Share this article
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/m.huzaifa.587297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <Image
                    src={assets.facebook_icon}
                    alt="facebook"
                    width={50}
                    className="cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/huzaifashahid9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <Image
                    src={assets.googleplus_icon}
                    alt="linkedin"
                    width={50}
                    className="cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.huzaifashahid.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <Image
                    src={assets.twitter_icon}
                    alt="website"
                    width={50}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>

          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Page;
