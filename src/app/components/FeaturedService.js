'use client'
import Image from 'next/image'
import React from 'react'
import coldChainTruck from '../../../public/assets/img/feat-coldchain@2x.jpg'
import coldChainBus from '../../../public/assets/img/feat-bus@2x.jpg'

export default function FeaturedService() {
  return (
    <div className='bg-white text-black flex flex-col gap-y-8 relative z-20'>
        {/* <div className='backgroundOverlaypic absolute top-0 left-0 w-full h-full z-10'></div> */}

        <div className='featured_service_section_one flex flex-row items-end justify-evenly py-16 bg-white gap-8 w-full'>
            <div className='flex flex-col items-start justify-start gap-y-4 w-[638px]'>
                <small className='featured_service_text px-4'>FEATURED SERVICE</small>
                <h1 className='featured_service_heading text-4xl mb-4'>
                    Coche Ride Cold Chain Trucks: Excellence in Temperature-Controlled Logistics
                </h1>
                <p>Coche Ride presents our premium Cold Chain trucks, meticulously engineered to 
                    sustain optimal temperature and humidity levels. This guarantees that your perishables 
                    and pharmaceuticals arrive in pristine condition, just as they were shipped.
                </p>
                <p>
                    With real-time temperature monitoring and instant alerts, your sensitive goods are shielded 
                    from any extreme conditions throughout the journey. Entrust Coche Ride with your valuable cargo, 
                    and experience unparalleled reliability and precision in the timely delivery of your perishables
                    and pharmaceuticals.
                </p>
            </div>
            <div className='w-[538px] h-[338px]'>
                <Image className='w-[538px] h-[338px]' src={coldChainTruck} alt='coldChainTruck' />
            </div>
        </div>

        <div className='featured_service_section_one flex flex-row-reverse items-end justify-evenly py-16 -mt-8 bg-white gap-8 w-full'>
            <div className='flex flex-col items-start justify-start gap-y-4 w-[638px]'>
                <small className='featured_service_text px-4'>FEATURED SERVICE</small>
                <h1 className='featured_service_heading text-4xl mb-4'>
                    Coche Ride Coaster Buses and Minivans: Versatile Transportation Solutions
                </h1>
                <p>Coche Ride offers a comprehensive fleet of coaster buses and minivans, 
                    perfect for all your transportation needs. Whether you're 
                    moving small groups, organizing events, or transporting goods,
                    our vehicles provide a reliable and efficient solution.
                </p>
                <p>Our coaster buses and minivans are equipped with modern amenities and safety 
                    features to ensure a comfortable and secure journey. With GPS tracking and 
                    real-time updates, you can monitor your trips and ensure timely arrivals.
                    Flexible booking options and competitive pricing make Coche Ride the go-to 
                    choice for versatile transportation.
                </p>
            </div>
            <div className='w-[538px] h-[338px]'>
                <Image className='w-[538px] h-[338px]' src={coldChainBus} alt='coldChainBus' />
            </div>
        </div>
    
    </div>
  )
}
