"use client";

import React, { useState } from "react";
import "animate.css";
import axios from "axios";
import { toast } from "react-toastify";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/email", { email });
      toast.success("Email Subscribed successfully")
      setEmail("")
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("This email is already subscribed");
      } else {
        toast.error("Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f4f4f4] py-20 px-5 md:px-12 lg:px-28 mb-20">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-6 animate__animated animate__fadeInUp">
        Stay Updated
      </h2>

      <p className="text-center text-gray-700 max-w-[700px] mx-auto text-sm sm:text-base mb-6 animate__animated animate__fadeInUp animate__delay-1s">
        Join our community of readers and get valuable content delivered
        straight to your inbox every week.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
        <div className="text-center max-w-[220px]">
          <h4 className="text-lg font-semibold mb-2">🚀 Weekly Insights</h4>
          <p className="text-sm text-gray-600">
            Fresh blogs, guides, and tips curated by industry experts.
          </p>
        </div>
        <div className="text-center max-w-[220px]">
          <h4 className="text-lg font-semibold mb-2">🎁 Free Resources</h4>
          <p className="text-sm text-gray-600">
            Get access to templates, eBooks, and exclusive tools.
          </p>
        </div>
        <div className="text-center max-w-[220px]">
          <h4 className="text-lg font-semibold mb-2">🔒 No Spam Ever</h4>
          <p className="text-sm text-gray-600">
            We respect your inbox. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>

      {/* Email Form */}
      <form
        onSubmit={handleSubmit}
        className="shadow-[-7px_7px_0px_#000000] flex justify-between max-w-[500px] scale-90 sm:scale-100 mx-auto border border-black transition-all duration-300 hover:shadow-none animate__animated animate__fadeInUp animate__delay-2s"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="pl-4 outline-none text-sm sm:text-base w-full py-4 bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="border-l border-black py-4 px-4 sm:px-8 bg-white hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;
