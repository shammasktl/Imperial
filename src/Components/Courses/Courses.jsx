import React from 'react'
import { courses, main } from '../../assets/assets'

const Courses = () => {
    return (
        <div className='course-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-36 bg-blue-950 p-14 py-28'>
            {
                courses.map((item,index)=>{
                    return(
                        <div className="bg-white gap-4 rounded-lg overflow-hidden text-center" key={index}>
                            <div className="course-img">
                                <img src={main.course} alt="" />
                            </div>
                            <div className="description p-5 flex flex-col gap-4">
                                <h2 className='font-bold text-xl'>{item.name}</h2>
                                <p className='px-1 text-lg'>{item.desription}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Courses
