import React from 'react'

export default function HeroSection() {
  return (
    <div className='main_section flex flex-col gap-4 items-start justify-center w-1/2 bg-transparent h-screen'>
    {/* <div className='clipvision w-full h-full flex flex-col gap-8 bg-transparent z-20 overflow-hidden px-10 py-20 text-black'> */}
        <h1 className='about_heading leading-snug text-5xl mt-[150px] px-16 py-4 z-20 text-black'>
            A smarter way moving goods across Nigeria & West
            -Africa
        </h1>
        <p className='px-16 z-20 w-[600px] text-xl'>
            We have a network of trucks all around Nigeria you can access easily - powered by AI Tech!
        </p>
    {/* </div> */}
    </div>
  )
}
