"use client";
import BlogList from "@/Components/BlogList";
import EmailSubscription from "@/Components/EmailSubscription ";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import LatestBlogs from "@/Components/LatestBlogs";


export default function Home() {
  return (
    <>
    <Header/>
    <LatestBlogs/>
    <BlogList/>
    <EmailSubscription/>
    <Footer/>
    </>
  )
}
