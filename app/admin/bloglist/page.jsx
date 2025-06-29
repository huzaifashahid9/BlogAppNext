'use client';
import BlogTableItem from '@/Components/adminComponents/BlogTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {

  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async () =>{
    const response = await axios.get("/api/blog")
    setBlogs(response.data.blogs)
  }


  const deleteBlogs = async (mongoId)=>{
    const response = await axios.delete('/api/blog',{
      params : {
        id:mongoId
      }
    })
    toast.success("Blog Deleted Succesfully")
    fetchBlogs()
  }

  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-xl sm:text-2xl font-semibold mb-4'>All Blogs</h1>

      <div className='relative max-h-[80vh] max-w-full overflow-x-auto overflow-y-auto border border-gray-300 rounded-lg shadow-sm'>
        <table className='w-full text-sm text-left text-gray-800'>
          <thead className='text-xs uppercase bg-gray-100'>
            <tr>
              <th scope='col' className='hidden sm:table-cell px-6 py-3'>
                Author Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Blog Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index)=>{
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlogs={deleteBlogs}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
