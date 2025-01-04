import Image from 'next/image'
import React from 'react'
import pic1 from '../../../../public/assets/img/AboutUs/about2@2x.jpg'
import pic2 from '../../../../public/assets/img/AboutUs/about3@2x.jpg'
import { FaMarker } from 'react-icons/fa'

export default function FrieghtMadeEasy() {
  return (
    <div className='flex items-center justify-evenly w-full px-8 max-w-full h-full gap-16 bg-white xsm:max-[1188px]:flex-col
     xsm:max-[400px]:mx-auto xsm:max-[400px]:max-w-3/4 xsm:max-sm:max-w-full'>
        <div className='frieghtmadeeasy_content_container flex flex-col gap-y-4 items-start justify-start '>
            <h1 className=' frieghtmadeeasy_title text-4xl'>Freight transportation Made Easy</h1>
            <p className='frieghtmadeeasy_subtitle'>Coche Ride Transportation & Logistics Ltd</p>
            <p className='frieghtmadeeasy_desc'>Coche Ride Transportation and Logistics headquartered in Lagos,
             is a tech-enabled digital logistics start-up company founded for the purpose of 
             revolutionizing road-based freight transportation, creating a more efficient 
             logistics experience for cargo owners and distributors who are burdened with
              the task of moving their goods within and across the country.
            </p>
            <div className='frieghtmadeeasy_offers flex items-center justify-evenly
             xsm:max-sm:flex-col xsm:max-sm:gap-y-4 '>

                <ul className='flex flex-col gap-4'>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Automated tools to ensure efficiency in moving road freight</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>A safer and more efficient freight transportation for organizations and individuals</li>
                    </div>
                </ul>

                <ul className='flex flex-col gap-4'>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>CocheRide platform gives you real-time updates as well as visibility of your goods in transit</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>We are renowned for getting a truck instantly whenever you make a request</li>
                    </div>
                </ul>

            </div>
        </div>
        <div className='frieghtmadeeasy_container_pics relative xsm:max-[1188px]:w-auto xsm:max-2xl:w-4/5'>
            <Image className=' rounded w-[400px] h-[400px]' src={pic1} alt='myimage1'/>
            <Image className='rounded absolute top-[150px] -left-[150px] z-2 w-[300px] h-[300px]
             xsm:max-[400px]:left-0 xsm:max-[400px]:h-3/5 xsm:max-[400px]:-top-10' src={pic2} alt='myimage2'/>
        </div>
    </div>
  )
}
