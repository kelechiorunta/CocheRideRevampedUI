'use client'

import React, { useEffect, useState } from 'react'
import managerPic from '../../../../public/assets/img/AboutUs/co1@2x.png'
import Image from 'next/image'
import Slider from '../Slider'
import OdometerStats from './OdometerStats'
import Link from 'next/link'

export default function Achievements() {
    
  return (
    <div className='about_achievements bg-[#fffbf3] flex flex-col items-center justify-center gap-8'>
        <div className='flex items-center justify-center gap-x-[150px] w-full px-[60px]'>
            <div className='managerPic'>
                <Image className='w-[450px] h-[600px]' src={managerPic} alt='manager'/>
            </div>
            <Slider slides/>
        </div>
        <OdometerStats/>
    
    </div>
    
  )
}
