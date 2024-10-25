import React from 'react'
import { main } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer bg-gray-700 text-white mt-11 pb-8'>
      <div className="up flex gap-12 flex-col lg:flex-row lg:justify-between p-9 w-[90%] my-0 mx-auto">
        <div className="description flex justify-center items-center flex-col gap-8">
          <img src={main.logo} className='w-20' alt="" />
          <p className='w-64 text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit dignissimos porro optio quasi deleniti. Necessitatibus veritatis eligendi aspernatur neque!</p>
        </div>
        <div className="contact flex justify-center items-center flex-col gap-4">
          <h3 className='text-3xl'>Contact Us</h3>
          <ul className='list-disc text-white'>
            <li>+91 96582 25118</li>
            <li>+91 96325 58741</li>
          </ul>
        </div>
        <div className="keep flex gap-7 flex-col justify-center items-center bg-white text-black rounded-3xl p-20">
          <h3 className='text-3xl text-center'>Keep 'n' Touch</h3>
          <div className="icons flex gap-4 items-center">
            <i className="uil uil-youtube text-5xl cursor-pointer duration-[0.5s] text-red-700 w-9"></i>
            <i className="uil uil-instagram-alt text-5xl cursor-pointer duration-[0.5s] text-pink-700 w-9"></i>
            <i className="uil uil-facebook text-5xl cursor-pointer duration-[0.5s] text-blue-700 w-9"></i>
            <i className="uil uil-twitter text-5xl cursor-pointer duration-[0.5s] text-sky-700 w-9"></i>
          </div>
        </div>
      </div>
      <hr className='border-none p-[2px] rounded-full bg-gray-500 w-[70%] my-0 mx-auto' />
      <div className="downcopy flex justify-center items-center mt-10">
        <p>All Rights Reserved for <a href="https://imperialclg.vercel.app" target='_blank'>imperialclg.vercel.app</a></p>
      </div>
    </div>
  )
}

export default Footer
