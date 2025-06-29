"use client";
import Image from "next/image";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "@/Assets/assets";

const blogData = [
  {
    id: "1",
    title: "Mastering Tailwind CSS in 2025",
    description:
      "Learn how to build stunning UIs with the latest Tailwind features. This guide walks you through new utility-first strategies, responsive techniques, and design patterns used in real-world projects. Ideal for frontend developers who want to speed up their workflow and improve scalability.",
    category: "Development",
    image: assets.blog_pic_14,
  },
  {
    id: "2",
    title: "UI/UX Trends This Year",
    description:
      "A deep dive into the most influential UI/UX trends of the year. Explore how micro-interactions, neumorphism, glassmorphism, and accessibility-focused designs are shaping how we build user-first digital products today. Perfect for designers and product teams.",
    category: "Design",
    image: assets.blog_pic_15,
  },
  {
    id: "3",
    title: "AI Tools Changing the Industry",
    description:
      "Explore how powerful AI tools like ChatGPT, Midjourney, and GitHub Copilot are transforming design, development, and content creation. Learn where the industry is heading and how to adopt AI ethically and efficiently in your day-to-day work.",
    category: "Technology",
    image: assets.blog_pic_16,
  },
];

export default function LatestBlogs() {
  return (
    <div className="py-10 px-5 md:px-12 lg:px-28 bg-[#f4f4f4]">
      {/* Section Heading */}
      <div className="text-center mb-10 animate__animated animate__fadeInUp">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
          Latest Blogs
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Read our most recent articles on design, development, and technology.
        </p>
      </div>

      {/* Blog Cards Section */}
      <div className="flex gap-8 justify-center flex-wrap" data-aos="fade-InUp">
        {blogData.map((item, index) => {
          const delayClass = `animate__delay-${index + 1}s`;
          return (
            <div
              key={item.id}
              className={`cursor-pointer max-w-[300px] sm:max-w-[300px] bg-white border border-black rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[-8px_8px_0px_#000000] animate__animated animate__fadeInUp ${delayClass}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="border-b border-black w-full h-[200px] object-cover"
              />

              <p className="ml-5 mt-4 px-2 py-1 inline-block bg-black text-white text-sm rounded-sm hover:bg-gray-800 transition-colors duration-300">
                {item.category}
              </p>

              <div className="p-4">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <p className="text-sm tracking-tight text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
