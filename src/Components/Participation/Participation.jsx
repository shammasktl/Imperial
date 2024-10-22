import React from 'react'

const Participation = () => {
  return (
      <div className="plus-container grid grid-cols-1 md:grid-cols-3 gap-24 mt-32 w-[80%] my-0 mx-auto">
        <div className="item bg-slate-300 rounded-3xl py-20">
          <p className='flex flex-col text-center text-xl'>
            <span className='font-medium text-5xl'>4+</span>years of experience
          </p>
        </div>
        <div className="item bg-slate-300 rounded-3xl py-20">
          <p className='flex flex-col text-center text-xl'>
            <span className='font-medium text-5xl'>90+</span>students
          </p>
        </div>
        <div className="item bg-slate-300 rounded-3xl py-20">
          <p className='flex flex-col text-center text-xl'>
            <span className='font-medium text-5xl'>40+</span>Faculties
          </p>
        </div>
      </div>
  )
}

export default Participation
