import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Food1 from '../img/foodimg1.avif'
import Food2 from '../img/foodimg2.avif'
import Food3 from '../img/foodimg3.avif'
import Food4 from '../img/foodimg4.avif'
import Food5 from '../img/foodimg5.avif'
 
const Food = () => {
  return (
    <>
      {/* navbar  */}
      <Navbar />
 
      {/* FOOD & SERVE */}
 
      <div className='logo text-[40px] pt-15 text-center'>FOOD & SERVE</div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {/* Left section (top row with two images) */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <img
              src={Food1}
              alt="food1"
              className="col-span-2 h-[250px] w-full object-cover"
            />
            <img
              src={Food2}
              alt="food2"
              className="col-span-1 h-[250px] w-full object-cover"
            />
          </div>
 
          {/* Second row left image */}
          <img
            src={Food4}
            alt="food4"
            className="h-[300px] w-full object-cover"
          />
        </div>
 
        {/* Right column images */}
        <div className="flex flex-col gap-4">
          <img
            src={Food3}
            alt="food3"
            className="h-[300px] w-full object-cover"
          />
          <img
            src={Food5}
            alt="food5"
            className="h-[250px] w-full object-cover"
          />
        </div>
      </div>
 
 
      {/* footer  */}
      <Footer />
    </>
  )
}
 
export default Food