'use client'
import React, { useEffect, useState } from 'react'
import Typer from './Typer'
import Slider from './Slider'
import Image from 'next/image'
import border1 from '../../../public/assets/img/border1.png'
import border2 from '../../../public/assets/img/border2.png'
import { FaLocationPinLock, FaMapPin } from 'react-icons/fa6'

// import pic1 from '../../../public/assets/img/slide-pix@2x.jpg'
// import pic2 from '../../../public/assets/img/slide-pix2@2x.jpg'
// import pic3 from '../../../public/assets/img/slide-pix3@2x.jpg'

const slides = [
    { id: 0, heroPic: '/slide-pix@2x.jpg'},
    { id: 1, heroPic: '/slide-pix2@2x.jpg'},
    { id: 2, heroPic: '/slide-pix3@2x'},
  ]

const options = ["Trucks", "Buses", "Minivans", "Other Vehicles"]

export default function HeroMainPage() {
  return (
    <div className='flex items-center  bg-black py-20 text-white my-5 xsm:max-md:px-[0px] xsm:max-mainheader_breakpoint_four:p-[0px] flex-col gap-8 justify-start mainheader_breakpoint_four:max-2xl:flex-row justify-evenly p-[75px] '>
        <form className='flex  flex-col gap-8 items-start  sm:max-mainheader_breakpoint_four: px-[75px] mainheader_breakpoint_four:max-2xl:px-[0] w-[60%] 
        xsm:max-mainheader_breakpoint_four:w-[100%] py-[20px] xsm:max-sm:w-full'>
            <div className='h-full -ml-8 xsm:max-mainheader_breakpoint_four:w-[100%] py-[20px] md:max-xl:w-[100%]'>
                <h1 className='coche_title leading-snug py-2 text-5xl px-8 xsm:max-sm:-mx-8 text-4xl'>{`Coche Ride: Easy Transport with Our `}
                <div className='text-5xl inline-block xsm:max-sm:block'><Typer  texts={options} time={700} speed={150}/></div></h1>    
            </div>
            <div>
                <p className='spacer text-xl -ml-8 leading-snug md:max-xl:w-[560px] xl:max-2xl:w-[670px]  xsm:max-mainheader_breakpoint_four:-ml-8 px-8 xsm:max-sm:-mx-16 w-full p-0'>We lead in offering smart and efficient transportation solutions for both 
                    individuals and businesses, covering end-to-end haulage operations
                </p>
            </div>
            <div className='flex items-center w-full xsm:max-sm:-ml-8'>
                <div className='locator p-5 rounded-l '><FaMapPin/></div>
                <input className='px-4 py-3.5 rounded-r w-[450px] text-black' type='text' placeholder='Enter Location' name='location' /> 
                {/* value={location} */}
            </div>
            <div className='flex items-center w-full xsm:max-sm:-ml-8'>
            <div className='destinator p-5 rounded-l '><FaLocationPinLock/></div>
                <input className='px-4 py-3.5 rounded-r w-[450px] text-black' type='text' placeholder='Enter Destination' name='location' /> 
                {/* value={destination} */}
            </div>
            <div>
                <button className='headerbutton px-[20px] py-[12px] rounded-3xl' type='submit'>
                    Get Quick Quotes
                </button>
            </div>
        </form>
        <div className=' border relative rounded-xl sm:max-mainheader_breakpoint_four:w-[600px] 
            mainheader_breakpoint_four:max-xl:h-[400px] w-[400px] xl:max-2xl:w-[538px] h-[538px]'>
            <Image className=' absolute -top-[90px] -left-10 scale-50' src={border1} alt='border1'/>
            <Image className='absolute -top-10 -left-[75px] scale-50' src={border2} alt='border2'/>
            <Slider slides={slides}/>
            <div className='heroSlide md:max-xl:h-[300px] w-[300px] xl:max-2xl:w-[538px] h-[538px]'></div>
        </div>
    </div>
  )
}
