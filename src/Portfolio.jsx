import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { data } from './Portfoliodata'
import { Link } from 'react-router-dom'



const Portfolio = () => {
  return (
    <>
      {/* navbar  */}
      <Navbar />

      {/* portfolio */}

      <div className='logo text-[40px]  pb-[40px] text-center pt-[100px]'>PORTFOLIO</div>

      <div className="container mx-auto sm:flex gap-2">
        {data.map((v, i) => {
          return (

            <div className=" w-full">
              <div className='flex justify-center pb-[35px] relative '>
                <Link to={`/Editorial/${v.id}`}>
                  <img src={v.url} className='relative' alt="" />
                </Link>
                <p className='text-white absolute logo text-[40px] pt-[50px] sm:block hidden'>{v.title}</p>
              </div>
              <p className='text-black text-center logo sm:text-[20px] text-[40px] pb-[30px]  sm:hidden block'>{v.title}</p>
            </div>
          )
        })}
      </div >


      {/* footer  */}
      < Footer />
    </>
  )
}

export default Portfolio
