import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';

const BlogTableItem = ({ authorImg, title ,author,date,deleteBlogs,mongoId}) => {
  const blogDate  = new Date(date)
  return (
    <tr className="bg-white border-b text-sm">
      {/* Author Image */}
      <th
        scope="row"
        className="hidden sm:table-cell px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <div className="flex items-center gap-3">
          <Image
            src={authorImg ? authorImg : assets.profile_icon}
            alt="author"
            width={35}
            height={35}
            className="rounded-full"
          />
          <p>{author?author:"No Author"}</p>
        </div>
      </th>

      {/* Blog Title */}
      <td className="px-6 py-4">{title ? title : 'No Title'}</td>

      {/* Date */}
      <td className="px-6 py-4">{blogDate.toDateString()}</td>

      {/* Actions (e.g., delete/edit icons) */}
      <td className="px-6 py-4">
        <button onClick={()=>{
          deleteBlogs(mongoId)
        }} className="cursor-pointer text-red-500 hover:text-red-700 font-bold">Delete</button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
