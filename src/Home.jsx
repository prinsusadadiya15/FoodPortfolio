import React from 'react'
import Navbar from './Navbar'
import MyImg from '../img/bg.jpg'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      {/* navbar  */}
      <Navbar />

      {/* home  */}

      <div className="container mx-auto relative">
        <img className='max-w-[1370px] mx-auto' src={MyImg} alt="" />
        <div className='text-[white] absolute h-full w-full inset-0  text-[20px] '>
          <div className='flex items-center justify-center h-full'>
            <div className='flex items-center flex-col'>
              <h1 className='logo sm:text-[64px] text-[40px] tracking-[0.6rem] text-center sm:pt-[0px] pt-[90px]'>THE ART OF FOOD</h1>
              <p className='text-[28px] text-white tracking-[0.3rem]'>PHOTOGRAPHY</p>
              <button className='btn1 text-center'>View More</button>
            </div>
          </div>
        </div>
      </div>


      {/* footer  */}
      <Footer />
    </>
  )
}

export default Home
