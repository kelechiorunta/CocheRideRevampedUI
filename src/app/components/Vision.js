import React from 'react'

export default function Vision() {
  return (
    <div className='clipvision w-full h-full flex flex-col gap-8 bg-transparent z-20 overflow-hidden px-10 py-20 text-white'>
        {/* <div className='backgroundOverlaypic absolute top-0 left-0 w-full h-full z-10'></div> */}
        {/* <div className='backgroundOverlaypic absolute -top-[750px] left-0 w-full h-full -z-10'>
            
        </div> */}
        <small className='vision_title px-4 z-20 bg-transparent'>OUR VISION</small>
        <h1 className='vision_heading leading-snug text-4xl mb-8 w-3/4 z-20 bg-transparent text-white'>At Coche Ride Transportation and Logistics, 
            we envision a future where trucking and logistics are seamless and efficient.
        </h1>
    </div>
  )
}
