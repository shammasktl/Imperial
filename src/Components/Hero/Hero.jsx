import React from 'react'
import { main } from '@/assets/assets'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <div className='hero w-full h-full bg-cover pt-20 pb-[500px] md:pb-56' style={{
            backgroundImage: `url(${main.videoBg})`
        }}>
            <div className="content w-[80%] my-0 mx-auto flex md:justify-between gap-28 items-center justify-center md:flex-row flex-col">
                <div className="text-container text-center md:text-left flex flex-col gap-9 justify-center items-center md:justify-start md:items-start">
                    <h1 className='text-5xl font-bold max-w-[600px]'>The Best Program to <span className='text-orange-600'>Enroll</span> for Exchange.</h1>
                    <p className='text-2xl max-w-96'>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                    <button className='flex items-center text-xl bg-green-500 text-white p-3 rounded-md hover:bg-green-700 duration-500 justify-center gap-4'>Find Courses <ArrowRight className='focus:ml-6' /></button>
                </div>
                <div className="img-container grid gap-5 bg-no-repeat grid-cols-2" style={{
                    backgroundImage: `url(${main.heroShape2})`
                }}>
                    <img src={main.heroBanner1} className='rounded-tr-[50px] rounded-bl-[50px]' alt="" />
                    <img src={main.heroBanner2} className='rounded-tl-[50px] mt-28 rounded-br-[50px]' alt="" />
                    <img src={main.heroShape1} className='relative bottom-40' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
