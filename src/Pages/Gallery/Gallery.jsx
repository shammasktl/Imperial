import React from 'react'
import './Gallery.css'
import { gallery } from '../../assets/assets'

const Gallery = () => {
  return (
    <div className='gallery flex flex-col items-center'>
      <h1 className='font-bold text-4xl sm:text-6xl text-center'>College Highlights</h1>
      <div className="images mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          gallery.map((item,index)=>{
            return (
              <div className="img flex justify-center items-center rounded-xl overflow-hidden cursor-pointer">
                <img className='w-80 h-60 object-cover hover:scale-125 duration-700' src={item.image} alt="" key={index} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery
