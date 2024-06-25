import Image from 'next/image'
import React from 'react'
import happyMan from '../../../public/assets/img/happy-man.jpg'
import Slider from './Slider'

export default function Testimonials() {
  return (
    <div className='w-full flex gap-4 items-center justify-between'>
        <div>
            <Image src={happyMan} alt='happyMan'/>
        </div>
        <Slider slides/>
    </div>
  )
}
