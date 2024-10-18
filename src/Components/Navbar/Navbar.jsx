import React, { useState } from 'react'
import "./Navbar.css"
import { main } from '../../assets/assets'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="forbg bg-white py-7">
      <div className='navbar w-[90%] my-0 mx-auto flex justify-between items-center bg-white rounded-full px-10'>
        <div className="logo">
          <img src={main.logo} className='w-14' alt="" />
        </div>
        <div className="links">
          <ul className='hidden md:flex  gap-3'>
            <li>Home</li>
            <li><span>About Us</span><i class="uil uil-angle-down"></i></li>
            <li>Academics</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="btn flex gap-3 items-center">
          <button className='border-2 hidden md:block border-black hover:bg-black hover:text-white duration-[0.5s] p-1 py-2 md:p-3 rounded-2xl cursor-pointer text-black'>Sign Now</button>
          <button className='border-2 hidden md:block border-black rounded-2xl p-1 py-2 md:p-3 duration-[0.5s] bg-black text-white hover:bg-transparent cursor-pointer hover:text-black'>Register Now</button>
          <i class="uil uil-bars block md:hidden text-4xl cursor-pointer" onClick={() => { setOpen(true) }}></i>
        </div>
        {
          open === true ?
            // 1
            <div className="responsive flex flex-col gap-12 absolute bg-gray-800 text-white right-0 h-[100%] top-0 p-9">
              <div className="cancel">
                <i class="uil uil-times text-3xl" onClick={() => { setOpen(false) }}></i>
              </div>
              <div className="links text-center">
                <ul className='flex md:hidden flex-col gap-5'>
                  <li className='cursor-pointer'>Home</li>
                  <li className='cursor-pointer'><span>About Us</span><i class="uil uil-angle-down"></i></li>
                  <li className='cursor-pointer'>Academics</li>
                  <li className='cursor-pointer'>Gallery</li>
                  <li className='cursor-pointer'>Contact</li>
                </ul>
              </div>
              <div className="btn flex flex-col gap-5 text-center">
                <button className='border-2 block border-white hover:bg-white hover:text-black duration-[0.5s] p-1 py-2 rounded-2xl cursor-pointer text-white'>Sign Now</button>
                <button className='border-2 block border-white rounded-2xl p-1 py-2 duration-[0.5s] bg-white text-black hover:bg-transparent cursor-pointer hover:text-white'>Register Now</button>
              </div>
            </div> :
            // 2
            <div className="responsive flex flex-col gap-12 absolute bg-gray-800 text-white right-0 max-h-[100%] top-0 overflow-hidden max-w-0">
              <div className="cancel">
                <i class="uil uil-times text-3xl"></i>
              </div>
              <div className="links text-center">
                <ul className='flex flex-col gap-5'>
                  <li>Home</li>
                  <li><span>About Us</span><i class="uil uil-angle-down"></i></li>
                  <li>Academics</li>
                  <li>Gallery</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="btn flex flex-col gap-5 text-center">
                <button className='border-2 block border-white hover:bg-white hover:text-black duration-[0.5s] p-1 py-2 rounded-2xl cursor-pointer text-white'>Sign Now</button>
                <button className='border-2 block border-white rounded-2xl p-1 py-2 duration-[0.5s] bg-white text-black hover:bg-transparent cursor-pointer hover:text-white'>Register Now</button>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar
