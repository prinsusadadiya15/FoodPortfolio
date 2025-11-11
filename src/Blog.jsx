import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import User from '../img/usericon.png'
import { blog } from './Blogdata'
const Blog = () => {
    return (
        <>
            {/* navbar  */}
            <Navbar />

            <div className="container-fluid pt-[100px]">
                <h1 className='logo text-[40px] text-center pt-[20px]'>MY BLOG</h1>
            </div>

            {blog.map((v, i) => {
                return (
                    <div className="max-w-[1370px] mx-auto mt-[30px]  bg-[rgb(240,243,246)]  px-[130px] pb-[40px]">
                        <div className='flex'>
                            <img src={v.url} className='w-[50%]' alt="" />
                            <div className="right bg-white relative w-[50%]">
                                <img src={User} className='w-[10%] mt-7 ms-10 rounded-full' alt="" />
                                <h1 className='ms-[100px] -mt-[37px] text-[12px]'>{v.admin}</h1>
                                <p className='ms-[100px] text-[12px]'>{v.date}</p>

                                <h1 className='logo text-[28px] ms-[47px] pt-[20px] pb-[8px] text-[rgb(48,49,49)]'>{v.title}</h1>

                                <h5 className='ms-[47px]'>{v.detail}</h5>
                                <div className='absolute bottom-0 left-[30px] right-[30px]'>
                                    <hr className='w-full' />
                                    <div className="flex justify-between w-full py-[20px]">
                                    <p>{v.views}</p>
                                    <p>❤️</p>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


            {/* footer  */}
            <Footer />
        </>
    )
}

export default Blog
