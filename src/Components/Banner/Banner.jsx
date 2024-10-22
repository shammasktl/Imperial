import React from 'react'
import { main } from '../../assets/assets'

const Banner = () => {
  return (
    <div className='banner flex justify-center items-center mt-12'>
      <div className="image flex items-center justify-center w-[70vw] overflow-hidden h-[80vh] rounded-[16px] md:rounded-[16px]">
        <img src={main.banner1} className='w-[100%] opacity-85 object-cover h-[45vw] cursor-pointer duration-300 hover:shadow-2xl hover:shadow-gray-800 hover:scale-105' alt="" />
      </div>
    </div>
  )
}

export default Banner
