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
    <nav className='flex justify-between flex-col md:flex-row py-5 font-inter w-11/12 m-auto'> 

    <div className='flex justify-between items-center'>
    <Link href={"/"}>
     <img src='/logo.svg' alt="logo"  className='w-[65%]'/>
    </Link>

    <div className='md:hidden  cursor-pointer' onClick={toggleNav}>
      <ion-icon size="large" className="pt-3" name="menu-outline"></ion-icon>
    </div>
    </div>

    <div className={`flex flex-col md:flex-row absolute md:static md:justify-between items-start md:content-center py-10 text-base transition-all duration-300 w-[92%] pb-36 bg-[#180000] ${menuOpen ? "top-[65px]": "translate-y-[-110%]"}`} > 
        <Link href={"/"} className='bg-[#E1040F] font-inter rounded-lg py-2 px-5 md:px-8'>Home Page</Link>
        <Link href={"/About"} className='py-2 px-5'>About Us</Link>
        <Link href={"/services"} className='py-2  px-5'>Services</Link>
        <Link href={"/contact"} className='py-2 px-5'>Contact Us</Link>
    </div>
    </nav> 
  )
}

export default Navbar