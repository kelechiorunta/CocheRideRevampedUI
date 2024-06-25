'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/assets/img/AboutUs/logo-dark@2x.png'
import {FaArrowAltCircleDown} from 'react-icons/fa' //Please install this before proceeding
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function AboutHeader() {

    const headerRef = useRef(null);

  useEffect(() => {
    // Set initial opacity to 1
    gsap.set(headerRef.current, { opacity: 1 });

    // ScrollTrigger to handle fade out and fade in
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top", // When the top of the header hits the top of the viewport
      end: "+=100px", // Scroll distance for fading out
      scrub: true, // Smooth scrolling
      onLeave: () => gsap.to(headerRef.current, { opacity: 0, boxShadow: 0, duration: 0.3 }), // Fade out when leaving
      onEnterBack: () => gsap.to(headerRef.current, { opacity: 1, duration: 0.3 }), // Fade in when scrolling back up
    });

    // ScrollTrigger to pin and fade in the header after scrolling 100px
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top+=500px top", // When 100px from the top of the viewport
      pin: true, // Pins the header in place
      pinSpacing: false, // Prevents adding extra space after pinning
      onEnter: () => gsap.to(headerRef.current, { opacity: 1, duration: 0.3 }), // Fade in when entering
      onLeaveBack: () => gsap.to(headerRef.current, { opacity: 0, boxShadow: 0, duration: 0.3 }), // Fade out when leaving back
    });
  }, []);


  return (
    <header ref={headerRef}
    className='header_container px-[75px] bg-white fixed top-0 z-50 text-white flex items-center justify-between shadow-2xl w-full pt-4 pb-4 '>
        <Link href='/'>
            <Image className='w-[100px] h-10 mr-[370px]' src={logo} alt='logo'/>
        </Link>
        <div className='flex items-center space-x-8 w-full '>
            <nav className=' flex items-center justify-between text-black font-extrabold space-x-4 mr-[198px]'>
                <Link href='/'>About Us</Link>
                <Link href='/move-goods'>Move Goods</Link>
                <Link href='/transporters'>Transporters</Link>
                <Link href='#'>Resources</Link>
                <Link href='#'>Contact Us</Link>
            </nav>
            <nav className='flex items-center justify-evenly space-x-4'>
                <Link className='headerbutton px-[20px] py-[12px] rounded-3xl' href='#'>Get Ouick Quote</Link>  
            </nav>
        </div>
    </header>
  )
}