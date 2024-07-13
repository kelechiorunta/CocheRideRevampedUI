'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/assets/img/logo-white@2x.png'
import {FaArrowAltCircleDown} from 'react-icons/fa' //Please install this before proceeding
import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function MainHeader() {

  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
   
  setIsOpen(!isOpen);
  // !isMenuOpen && setIsMenuOpen(true)

}  

  useEffect(() => {
    // Set initial opacity to 1
    gsap.set(headerRef.current, { opacity: 1 });

    // ScrollTrigger to handle fade out and fade in
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top", // When the top of the header hits the top of the viewport
      end: "+=100px", // Scroll distance for fading out
      scrub: true, // Smooth scrolling
      onLeave: () => gsap.to(headerRef.current, { opacity: 0, duration: 0.3 }), // Fade out when leaving
      onEnterBack: () => gsap.to(headerRef.current, { opacity: 1, duration: 0.3 }), // Fade in when scrolling back up
    });

    // ScrollTrigger to pin and fade in the header after scrolling 100px
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top+=500px top", // When 100px from the top of the viewport
      pin: true, // Pins the header in place
      pinSpacing: false, // Prevents adding extra space after pinning
      onEnter: () => gsap.to(headerRef.current, { opacity: 1, duration: 0.3 }), // Fade in when entering
      onLeaveBack: () => gsap.to(headerRef.current, { opacity: 0, duration: 0.3 }), // Fade out when leaving back
    });
    
  }, [headerRef]);


  return (
    <header ref={headerRef}
    className='header_container bg-black fixed top-0 z-50 text-white border-white flex items-center justify-between 
     shadow-md w-full px-[75px] pt-6 pb-6 sm:max-mainheader_breakpoint_four:gap-x-[50px] md:max-xl:gap-x-[150px] xl:max-2xl:gap-x-[70px] xsm:max-sm:px-[50px] '>
        <Link href='/'>
            <Image className='w-[100px] h-10 min-w-[70px] xsm:max-sm:min-w-[00px] w-[100px]' src={logo} alt='logo'/>
        </Link>
        <div className='flex items-center space-x-8 w-full justify-between xsm:max-lg:hidden'>
            <nav className='relative flex items-center justify-between md:max-xl:mr-[0] space-x-10 xl:max-2xl:space-x-4 mr-[253px]'>
                <Link className='xsm:max-mainheader_breakpoint_five:hidden' href='/about'>About Us</Link>
                <Link className='xsm:max-mainheader_breakpoint_five:hidden' href='/move-goods'>Hire</Link>
                <Link className='xsm:max-mainheader_breakpoint_five:hidden' href='#'>Cold Chain Trucks</Link>
                <Link className='xsm:max-mainheader_breakpoint_four:hidden' href='/transporters'>Transporters</Link>
                <Link className='xsm:max-mainheader_breakpoint_three:hidden' href='#'>Resources</Link>
            </nav>
            <nav className='flex items-center justify-evenly space-x-4 xsm:max-mainheader_breakpoint_one:hidden'>
                <div className='flex items-center space-x-1'>
                    <Link href='#'>Login </Link>
                    <FaArrowAltCircleDown className='w-[10px]'/>
                </div>
                
                <div className='flex items-center space-x-1'>
                    <Link href='#'>Sign Up </Link>
                    <FaArrowAltCircleDown className='w-[10px]'/>
                </div>

                <Link className='headerbutton px-[20px] py-[12px] rounded-3xl' href='#'>Get Ouick Quote</Link>  
            </nav>
            
        </div>
        <div onClick={toggleMenu}
            className=" hamburger-icon flex space-x-2 text-white mainheader_breakpoint_one:max-2xl:hidden">
              <div className="bar">|</div>
              <div className="bar">|</div>
              <div className="bar">|</div>

              {(
            <div className={`absolute ${isOpen? 'slidemenu': 'close'} menu`}>
              <ul className='p-8 bg-[rgba(255,255,255)] flex gap-8 flex-col items-end 
              top-20 -left-10 w-[300px] h-[600px] shadow-sm text-left rounded-xl transition-all'>
                <Link className='mt-2 text-black text-2xl float-right' href='/' 
                onClick={()=>{setIsOpen(false);}}>&times;</Link>

                <Link className='hidden xsm:max-mainheader_breakpoint_five:block' href='/about'>About Us</Link>
                <Link className='hidden xsm:max-mainheader_breakpoint_five:block' href='/move-goods'>Hire</Link>
                <Link className='hidden xsm:max-mainheader_breakpoint_five:block' href='#'>Cold Chain Trucks</Link>
                <Link className='hidden xsm:max-mainheader_breakpoint_four:block'href='/transporters'>Transporters</Link>
                <Link className='hidden xsm:max-mainheader_breakpoint_three:block' href='#'>Resources</Link>

                <div className='flex items-center space-x-1'>
                    <Link href='#'>Login </Link>
                    <FaArrowAltCircleDown className='w-[10px]'/>
                </div>
                
                <div className='flex items-center space-x-1'>
                    <Link href='#'>Sign Up </Link>
                    <FaArrowAltCircleDown className='w-[10px]'/>
                </div>

                <Link className='headerbutton px-[20px] py-[12px] rounded-3xl' href='#'>Get Ouick Quote</Link>  
              </ul>
            </div>
          )}

            </div>
    </header>
  )
}

// {
//   "compilerOptions": {
//     "paths": {
//       "@/*": ["./src/*"]
//     }
//   }
// }