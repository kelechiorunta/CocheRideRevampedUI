'use client'
import React, { useEffect, useState } from 'react'
import Typer from './Typer'
import Slider from './Slider'
import Image from 'next/image'
import border1 from '../../../public/assets/img/border1.png'
import border2 from '../../../public/assets/img/border2.png'
import { FaLocationPinLock, FaMapPin } from 'react-icons/fa6'

import pic1 from '../../../public/assets/img/slide-pix@2x.jpg'
import pic2 from '../../../public/assets/img/slide-pix2@2x.jpg'
import pic3 from '../../../public/assets/img/slide-pix3@2x.jpg'

const slides = [
    { id: 0, heroPic: pic1},
    { id: 1, heroPic: pic2},
    { id: 2, heroPic: pic3},
  ]

const options = ["Trucks", "Buses", "Minivans", "Other Vehicles"]

export default function HeroMainPage() {
  return (
    <div className='flex items-center justify-between space-x-8 bg-black py-20 text-white my-5'>
        <form className='flex flex-col gap-8 items-start w-auto'>
            <div className='w-full -ml-8 inline-block'>
                <h1 className='text-5xl px-8 py-2 inline-block leading-tight h-[100px]'>{`Coche Ride: Easy Transport with Our `}
                <div className='text-5xl inline-block'><Typer  texts={options} time={700} speed={150}/></div></h1>    
            </div>
            <div>
                <p className='spacer px-16 text-xl -ml-16 leading-snug w-[750px]'>We lead in offering smart and efficient transportation solutions for both 
                    individuals and businesses, covering end-to-end haulage operations
                </p>
            </div>
            <div className='flex items-center w-full'>
                <div className='locator p-5 rounded-l '><FaMapPin/></div>
                <input className='px-4 py-3.5 rounded-r w-[450px] text-black' type='text' placeholder='Enter Location' name='location' /> 
                {/* value={location} */}
            </div>
            <div className='flex items-center'>
            <div className='destinator p-5 rounded-l '><FaLocationPinLock/></div>
                <input className='px-4 py-3.5 rounded-r w-[450px] text-black' type='text' placeholder='Enter Destination' name='location' /> 
                {/* value={destination} */}
            </div>
            <div>
                <button className='headerbutton px-[20px] py-[12px] rounded-3xl' type='submit'>
                    Get Quick Quote
                </button>
            </div>
        </form>
        <div className=' w-max h-full relative rounded-xl'>
            <Image className=' absolute -top-[90px] -left-10 scale-50' src={border1} alt='border1'/>
            <Image className='absolute -top-10 -left-[75px] scale-50' src={border2} alt='border2'/>
            <Slider slides={slides}/>
            <div className='heroSlide'></div>
        </div>
    </div>
  )
}
