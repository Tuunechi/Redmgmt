"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleNav = ()=>{
      setMenuOpen(!menuOpen)
  }


  return (
    <nav className='flex justify-between md:items-center flex-col md:flex-row py-5 font-inter w-11/12 md:w-[85%] md:justify-between m-auto'> 

    <div className='flex justify-between items-center'>
    <Link href={"/"}>
     <img src='/logo.svg' alt="logo"  className='w-[12vw]'/>
    </Link>

    <div className='md:hidden  cursor-pointer' onClick={toggleNav}>
      <ion-icon size="large" className="pt-3 text-white" name="menu-outline"></ion-icon>
    </div>
    </div>

    <div className={`flex flex-col items-center rounded-lg absolute py-5 text-base transition-all duration-300 w-[92%]
       md:flex-row md:translate-y-0 md:justify-between  md:w-[50%] bg-[#180000] md:bg-transparent md:static md:bg-none md:ml- ${menuOpen ? "top-[65px]": "translate-y-[-110%]"}`} > 

        <Link href={"/"} className='bg-[#E1040F] font-inter rounded-lg py-2 px-5 md:text-center w-full'>Home Page</Link>
        <Link href={"#about"} className='py-2 px-5 w-full md:text-center'>About Us</Link>
        <Link href={"#services"} className='py-2  px-5 w-full md:text-center'>Services</Link>
        <Link href={"#contact"} className='py-2 px-5 w-full md:text-center'>Contact Us</Link>

        {/* Icons */}
      <div className="flex justify-between w-[60%] mt-36 md:hidden">
          <Link href={"/"}><img src="/discord.svg" alt="Discord"  className="w-8 cursor-pointer"/></Link>
          <Link href={"/"}><img src="/instagram.svg" alt="instagram"  className="w-8 cursor-pointer"/></Link>
          <Link href={"/"}><img src="/facebook.svg" alt="facebook" className="w-8 cursor-pointer"/></Link>
          <Link href={"/"}><img src="/twitter.svg" alt="twitter" className="w-8 cursor-pointer"/></Link>
      </div>
    </div>
  
    </nav> 
  )
}

export default Navbar