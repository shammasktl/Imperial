import React from 'react'
import { main } from '../../assets/assets'

const Banner = () => {
  return (
    <div className='banner flex justify-center items-center mt-12'>
      <div className="image flex items-center justify-center w-[90%] overflow-hidden h-[35vw] rounded-[40px]">
        <img src={main.banner1} className='w-[100%] object-cover rounded-[40px] h-[38vw] cursor-pointer duration-300 hover:shadow-2xl hover:shadow-inherit hover:shadow-gray-800 hover:scale-105' alt="" />
      </div>
    </div>
  )
}

export default Banner
