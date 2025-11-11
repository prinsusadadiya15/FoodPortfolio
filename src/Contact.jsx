import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactImg from '../img/contact.avif'

const Contact = () => {
    return (
        <>
            {/* navbar  */}
            <Navbar />

            {/* contact  */}
            <div className='sm:flex max-w-[1370px] mx-auto pt-[100px]'>
                <img src={ContactImg} alt="" className='sm:w-[50%]' />
                <div className='bg-gray-200 sm:w-[50%] sm:ps-[90px] sm:px-[0px] px-[30px]'>
                    <h1 className='text-[40px] logo text-[rgb(48,49,49)] sm:pt-[125px] pt-[60px]  '>
                        GET IN TOUCH</h1><br />
                    <p className='w-[410px] text-[16px] text-[rgb(48,49,49)]'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p><br />
                    <p className='w-[410px] text-[16px] text-[rgb(48,49,49)] pb-[40px]'>Tel: 123-456-7890  |  Email: info@mysite.com</p>

                    <label htmlFor="">First name*</label><br />
                    <input type="text" className='border 1px black sm:w-[360px] w-full py-[8px] required:' /> <br /><br />

                    <label htmlFor="">Last name*</label><br />
                    <input type="text" className='border 1px black sm:w-[360px] w-full py-[8px] required:' /><br /><br />

                    <label htmlFor="">Email*</label><br />
                    <input type="text" className='border 1px black sm:w-[360px] w-full py-[8px] required:' /><br /><br />

                    <label htmlFor="">Subject*</label><br />
                    <input type="text" className='border 1px black sm:w-[360px] w-full py-[8px] required:' /><br /><br />

                    <label htmlFor="">Message*</label><br />
                    <input type="text" className='border 1px black sm:w-[360px] w-full py-[8px] pt-[70px] required:' /><br /><br />

                    <button className=" sm:ms-[244px] px-8 py-2  bg-gray-800 text-white hover:border-none hover:bg-black cnt-btn">
                        Submit
                    </button>

                    <p className='w-[410px] text-[16px] text-[rgb(48,49,49)] pt-[25px]'>Stay Up-To-Date with New Posts</p><br />

                    <label htmlFor="">Message*</label><br />
                    <div className="sm:flex">
                        <input type="text" className='border 1px black py-[8px] sm:w-[160px] w-full required:' /><br />

                        <div className='sm:block hidden'>
                            <button className=" text-center px-8 py-2 pt-[10px] ms-[20px] bg-gray-800 text-white hover:border-none hover:bg-black">
                                Subscribe Now
                            </button>
                        </div>
                        <div className='sm:hidden block'>
                             <button className=" text-center w-full py-2 pt-[10px] mt-[20px] bg-gray-800 text-white hover:border-none hover:bg-black">
                            Subscribe Now
                        </button>
                        </div>
                    </div><br /><br />

                    <input type="checkbox" /><span className='ms-3'>yes,subscribe me to your newsletter.*</span>
                </div>
            </div>

            {/* footer  */}
            <Footer />
        </>
    )
}

export default Contact
