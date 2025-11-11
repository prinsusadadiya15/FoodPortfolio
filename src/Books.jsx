import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { book } from './Booksdata'

const Books = () => {
  return (
    <>
      {/* navbar  */}
      <Navbar />


      {/* books  */}
      <div className="container-fluid text-center pt-[100px]">
        <h1 className='logo sm:text-[40px] text-[20px] text-[rgb(48,49,49)]'>BOOKS</h1>
      </div>

      {book.map((v, i) => {
        return (
          <div className="max-w-[1370px] mx-auto bg-[rgb(240,243,246)] mt-[30px] sm:pt-[150px] pt-[40px] pb-[150px] sm:ps-[200px] px-[30px] sm:flex ">
            <div>
              <h1 className='sm:text-[64px] text-[60px] logo text-[rgb(48,49,49)] '>{v.title}</h1>
              <p className='sm:w-[50%] pt-[10px] text-[16px] text-[rgb(48,49,49)] '>{v.detail}</p>
              <h1 className='text-[64px] text-[rgb(48,49,49)] logo pt-[20px] inline-block'>{v.price}</h1><sup className='text-[40px]'>$</sup>
              <button className='text-[16px] text-[rgb(20,29,39)] mt-10 px-8 py-2 border border-black hover:bg-[rgb(48,49,49)] hover:text-white ms-[100px]'>{v.btn}</button>
            </div>

            <div>
              <img src={v.url} className='w-[100%]' alt="" />
            </div>
          </div>
        )
      })}


      {/* footer  */}
      <Footer />
    </>
  )
}

export default Books
