import React from 'react'

export default function HeroSection() {
  return (
    <div className='main_section flex flex-col gap-4 items-start justify-center min-w-1/2 max-w-1/2 bg-transparent
     h-screen xsm:max-[400px]:max-w-1/2 xsm-max-[1188px]:max-h-screen'>
    {/* <div className='clipvision w-full h-full flex flex-col gap-8 bg-transparent z-20 overflow-hidden px-10 py-20 text-black'> */}
        <h1 className='about_heading leading-snug min-w-3/4 max-w-full text-5xl mt-[50px] px-16 py-4 z-20
         text-black xsm:max-lg:w-full xsm:max-[400px]:max-w-full xsm:max-[400px]:min-w-[390px] xsm:max-[400px]:leading-normal
         xsm:max-[500px]:text-[40px] xsm:max-[400px]:leading-normal xsm:max-[400px]:mx-auto xsm:max-[500px]:mt-8'>
            A smarter way moving goods across Nigeria & West
            -Africa
        </h1>
        <p className='px-16 z-20 w-4/5 text-xl xsm:max-[400px]:max-w-[337px]'>
            We have a network of trucks all around Nigeria you can access easily - powered by AI Tech!
        </p>
    {/* </div> */}
    </div>
  )
}
