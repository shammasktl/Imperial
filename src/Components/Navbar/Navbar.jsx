import { main } from '@/assets/assets'
import React, { act, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [active, setActive] = useState("about")
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="navbar border-b-2 ">
            <div className="navcontent w-[80%] my-3 mx-auto flex justify-between items-center">
                <div className='logo'>
                    <img src={main.logo} className='w-[68px]' alt="" />
                </div>
                <div className="links">
                    <ul className='md:flex hidden gap-2 text-lg'>
                        <li className={`cursor-pointer ${active === "about" ? "bg-orange-300" : ""} p-1 rounded-full`} onClick={() => { setActive("about") }}>About</li>
                        <li className={`cursor-pointer ${active === "courses" ? "bg-orange-300" : ""} p-1 rounded-full`} onClick={() => { setActive("courses") }}>Courses</li>
                        <li className={`cursor-pointer ${active === "events" ? "bg-orange-300" : ""} p-1 rounded-full`} onClick={() => { setActive("events") }}>Events</li>
                        <li className={`cursor-pointer ${active === "gallery" ? "bg-orange-300" : ""} p-1 rounded-full`} onClick={() => { setActive("gallery") }}>Gallery</li>
                        <li className={`cursor-pointer ${active === "news" ? "bg-orange-300" : ""} p-1 rounded-full`} onClick={() => { setActive("news") }}>News</li>
                    </ul>
                </div>
                <div className="button flex items-center justify-center">
                    <button className='py-4 hidden md:block px-3 text-white bg-orange-400 rounded-md hover:bg-orange-500 duration-500'>Get Started</button>
                    <div className="block md:hidden">
                        <Hamburger toggle={setOpen} toggled={isOpen} />
                    </div>
                </div>
            </div>
            {
                isOpen === true ? <div className="responsive overflow-hidden duration-500 h-full fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-orange-950 text-white">
                <div className="close absolute top-6 right-[70px]" onClick={()=>{setOpen(false)}}>
                    <Hamburger toggle={setOpen} toggled={setOpen} />
                </div>
                <ul className='px-7 flex flex-col gap-6'>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("about");setOpen(false)}}>About</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("courses");setOpen(false)}}>Courses</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("events");setOpen(false)}}>Events</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("gallery");setOpen(false)}}>Gallery</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("news");setOpen(false)}}>News</li>
                </ul>
            </div>:<div className="responsive h-0 overflow-hidden duration-500 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-orange-950 text-white">
                <div className="close absolute top-6 right-[70px]" onClick={()=>{setOpen(false)}}>
                    <Hamburger toggle={setOpen} toggled={setOpen} />
                </div>
                <ul className='px-7 flex flex-col gap-6'>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("about") }}>About</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("courses") }}>Courses</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("events") }}>Events</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("gallery") }}>Gallery</li>
                    <li className="text-center text-4xl cursor-pointer" onClick={() => { setActive("news") }}>News</li>
                </ul>
            </div>    
            }
        </div>
    )
}

export default Navbar
