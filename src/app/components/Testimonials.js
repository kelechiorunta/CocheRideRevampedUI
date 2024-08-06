import Image from 'next/image'
import React from 'react'
import happyMan from '../../../public/assets/img/happy-man.jpg'
import Slider from './Slider'
import { FaTruck, FaSuperpowers, FaUser, } from 'react-icons/fa'
import TestimonialSlider from './TestimonialSlider'

export const testimonials = [{message: `Your team's effort have been impeccable
                              from the start and you never let us down. If I could recommend
                              any service provider to a fowarding agent, it will be Coche.`,
                              client:'Olabode Ajayi', company:'Logistics Manager | Tolz', 
                              icon: <FaTruck size={50} fill='white'/>},
                              {message: `Coche Ride is a very proficient and effecient Logistics 
                              organisation. I have worked with them and will recommend any business
                              that values efficient delivery.`,
                              client:'Freedom Nuagbe', company:'Supply Chain Manager | PCMN',
                              icon: <FaSuperpowers size={50} fill='white'/>},
                              {message: `Coche is a very useful tool for me as a transporter, the platform allows me to effortlessly 
                              control allocated loads and all paper work and documentation is done quickly.`,
                              client:'Femi Olobayo', company:'Logistics Manager | Adcem Healthcare',
                              icon: <FaUser size={50} fill='white'/>},]

export default function Testimonials() {
  return (
    <div className='w-full overflow-hidden flex gap-4 justify-between xsm:max-[1189px]:flex-col'>
        <div className='w-full h-[400px]'>
            <Image src={happyMan} alt='happyMan' 
            className="box-border object-cover
            mx-auto mt-5 aspect-[1.37] h-[400px] max-w-[679px] min-h-[20px] min-w-[20px]
            top-[18px] max-sm:h-[388px] max-sm:left-[-41px] max-sm:max-w-[582px] max-sm:w-[337px]"/>
        </div>
        {/* <Slider slides/> */}
        <div className='w-full max-w-[679px] mt-[20px] mx-auto text-white xsm:max-[400px]:max-w-[337px] xsm:max-[400px]:ml-10 xsm:max-[400px]:max-h-[520px]'><TestimonialSlider testimonials={testimonials}/></div>
    </div>
  )
}
