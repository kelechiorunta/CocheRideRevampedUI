'use client'
import React from 'react'
import Image from 'next/image'
import aboutPic from '../../../public/assets/img/about12@2x.jpg'

export default function WhoAreWe() {
  return (
    <div className='flex justify-evenly items-start space-x-2 bg-white py-[50px]'>
        <div className='w-full whoweareImage'>
            <Image className='w-[600px] rounded-xl'src={aboutPic} alt='aboutus'/>
        </div>
        <div className='w-[900px] px-8 flex flex-col gap-y-6 -mt-20'>
            <small className='whoweare px-4'>WHO ARE WE?</small>
            <h1 className='whoweareheading text-4xl mb-4'>360 Logistics Operations, powered by tech</h1>
            <p className='whowearecontent font-bold'>Coche Ride platform offers instant access to a diverse 
                range of trucks for your logistics needs across Nigeria and West Africa. 
                Whether you're an individual or an organization,
                we cater to all your transportation requirements. 
                Our fleet includes minivans and buses to suit various cargo sizes.
            </p>
            <p className='whowearecontent font-bold'>
                We transport all categories of goods, from sensitive items like agricultural 
                produce and pharmaceuticals using our Cold Chain trucks, to general merchandise.
                Our logistics services are top-notch, with flexible pricing options tailored to your needs.
            </p>
            <p className='whowearecontent font-bold'>
                Our tech-enabled digital platform efficiently manages both vehicle owners and drivers, 
                ensuring seamless 360-degree logistics operations throughout Nigeria and West Africa.
            </p>
        </div>

    </div>
  )
}
