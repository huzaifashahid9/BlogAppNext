import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import Blogitems from "./Blogitems";
import "animate.css"; // ✅ Animate.css import

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={`py-2 px-5 rounded-full text-sm font-medium border border-black transition-all duration-300 
              ${menu === cat ? "bg-black text-white shadow-md" : "bg-white text-black hover:bg-black hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-around gap-4 gap-y-10 mb-16 xl:mx-24">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <div key={index} className="animate__animated animate__fadeInUp">
              <Blogitems
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
