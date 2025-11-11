import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    
    <>
      <div className="container-fluid w-[100%] fixed bg-[white] z-[10]">
        <div className="max-w-[1370px] mx-auto flex justify-between items-center py-[30px] ">
          <h1 className='tracking-[0.2em] text-[rgb(48,49,49)]  text-[26px] logo'>J.ALLSSA</h1>
          <div className="w-[45%] flex justify-between">
            <Link to='/' className='text-[16px] text-[rgb(48,49,49)]'>Home</Link>
            <Link to='/portfolio' className='text-[16px] text-[rgb(48,49,49)]'>Protfolio</Link>
            <Link to='/about' className='text-[16px] text-[rgb(48,49,49)]'>About</Link>
            <Link to='/books' className='text-[16px] text-[rgb(48,49,49)]'>Books</Link>
            <Link to='/blog' className='text-[16px] text-[rgb(48,49,49)]'>Blog</Link>
            <Link to='/client' className='text-[16px] text-[rgb(48,49,49)]'>Client Albums</Link>
            <Link to='/contact' className='text-[16px] text-[rgb(48,49,49)]'>Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
