"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";
import { assets } from "@/Assets/assets";
import "animate.css";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/blog", {
        params: {
          id: id,
        },
      });
      setData(response.data.blog);
    } catch (error) {
      console.error("❌ Error fetching blog:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="text-center mt-20 text-lg font-semibold">
          Loading blog...
        </div>
      ) : data ? (
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
            <div className="text-center my-24">
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
                {data.title}
              </h1>
              <Image
                width={60}
                height={60}
                className="mx-auto mt-6 border border-white rounded-full"
                src={data.authorImg}
                alt="author"
              />
              <p className="text-gray-700 mt-2">{data.author}</p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-[800px] mx-5 md:mx-auto mt-[-100px] mb-10 animate__animated animate__fadeInUp">
            <Image
              src={data.image}
              alt="blog image"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="mt-3 text-gray-700 text-sm font-medium">
              {data.category} |{" "}
              {data.date
                ? new Date(data.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "No date"}
            </p>

            {/* API content */}
            <div className="mt-6 text-gray-700 leading-relaxed animate__animated animate__fadeInRight whitespace-pre-line">
              {data.description}
            </div>

            {/* Static Blog Content */}
            <h1 className="my-8 text-[26px] font-bold animate__animated animate__fadeInLeft">
              Introduction
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              In today's fast-paced and digital-driven world, personal growth is
              no longer just a hobby—it’s a lifestyle. Whether you're an
              entrepreneur, student, or working professional, self-improvement
              is essential to adapting and thriving. From building discipline
              and focus to embracing learning, growth is a continuous journey.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              This blog explores a variety of techniques and tools that can help
              you enhance your productivity, mindset, and personal well-being.
              Whether you’re just starting out or looking to level up your
              current routine, these steps will help you gain clarity and take
              action.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInLeft">
              Step 1: Embrace a Growth Mindset
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              A growth mindset is the foundation of self-development. It’s about
              believing that your abilities and intelligence can be developed
              through effort and learning. Instead of avoiding challenges,
              embrace them. See failure as a stepping stone. Reflect on your
              habits, seek feedback, and be open to evolving perspectives.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInRight">
              Step 2: Build Daily Rituals
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInLeft">
              Consistency beats intensity. Start small but stay consistent.
              Whether it’s journaling every morning, reading 10 pages a day, or
              taking a 15-minute walk, small habits compound into massive
              transformation. Morning routines are especially powerful—they give
              you a head start before the world demands your attention.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInLeft">
              Step 3: Prioritize Mental and Physical Health
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              True growth begins when you take care of your body and mind.
              Exercise regularly to improve energy and focus. Practice
              mindfulness or meditation to reduce stress. Stay hydrated and
              maintain a balanced diet. Remember, your body is the engine
              driving your goals—fuel it well.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInRight">
              Step 4: Learn from the Best
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInLeft">
              Surround yourself with inspiration. Read books, listen to
              podcasts, and follow mentors who challenge you to be better. Learn
              from their failures and successes. The right guidance can shorten
              your learning curve and help you navigate challenges more
              effectively.
            </p>

            <h3 className="my-5 text-[18px] font-semibold animate__animated animate__fadeInLeft">
              Step 5: Track Progress and Celebrate Wins
            </h3>
            <p className="text-gray-700 leading-relaxed animate__animated animate__fadeInRight">
              Track your habits and goals. Apps like Notion, Habitica, or simple
              journals can help you reflect and stay accountable. And don’t
              forget to celebrate even the small wins. Progress fuels
              motivation, and recognizing your efforts builds momentum for the
              long run.
            </p>

            <h3 className="text-2xl sm:text-5xl font-semibold text-center mt-16 animate__animated animate__fadeInUp">
              Conclusion
            </h3>
            <p className="mt-3 text-gray-700 text-center leading-relaxed animate__animated animate__fadeInUp">
              Growth is not about perfection—it’s about progress. With
              intentional effort, daily reflection, and a hunger to improve, you
              can unlock your potential and create a meaningful life. Start
              where you are. Use what you have. Do what you can. Your future
              self will thank you.
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
      ) : (
        <div className="text-center mt-20 text-red-500 font-semibold">
          Blog not found
        </div>
      )}
    </>
  );
};

export default Page;
