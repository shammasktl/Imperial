import React from 'react'
import { main } from '../../assets/assets'

const Banner = () => {
  return (
    <div className='banner flex justify-center items-center mt-12'>
      <div className="image flex items-center justify-center w-[70vw] overflow-hidden sm:h-[38.9vh] lg:h-[60vh] md:h-[40vh] rounded-[16px] md:rounded-[16px]">
        <img src={main.banner1} className='w-[100%] opacity-85 object-cover cursor-pointer rounded-[16px] h-full md:rounded-[16px] duration-300 hover:shadow-2xl hover:shadow-gray-800 hover:scale-105' alt="" />
      </div>
    </div>
  )
}

export default Banner
