import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className='px-2 sm:pl-14 py-3 border border-black'>
        <Image src={assets.logo} width={120} alt='logo'/>
      </div>
      <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
        <Link href={'/admin/addProduct'}>
        <div className='flex items-center border m-5 border-black gap-3 font-medium px-3 py-2 bg-white  shadow-[-5px_5px_0px_#000000]'>
            <Image src={assets.add_icon} width={20}  alt='addbutton' />
            <span className='hidden sm:inline'>Add Blogs</span>
        </div>
        </Link>
        <Link href={'/admin/bloglist'}>
        <div className='flex items-center border m-5 border-black gap-3 font-medium px-3 py-2 bg-white  shadow-[-5px_5px_0px_#000000]'>
            <Image src={assets.blog_icon} width={20}  alt='addbutton' />
            <span className='hidden sm:inline'>Blogs list</span>
        </div>
        </Link>
        <Link href={'/admin/subscription'}>
        <div className='flex items-center border m-5 border-black gap-3 font-medium px-3 py-2 bg-white  shadow-[-5px_5px_0px_#000000]'>
            <Image src={assets.email_icon} width={20}  alt='addbutton' />
            <span className='hidden sm:inline'>Subscriptions</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
