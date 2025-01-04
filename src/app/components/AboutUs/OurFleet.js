import React from 'react'

export default function OurFleet() {
  return (
    <div className='flex flex-col gap-y-8 items-center justify-center w-full h-full
    px-[50px] xsm:max-sm:px-4 xsm:max-sm:-mt-20'>
        <h1 className='OurFleet_heading text-4xl xsm:max-[400px]:text-3xl'>Africa's Digital Logistics & Haulage Company</h1>
        <div className='flex gap-2 items-center p-8 w-full xsm:max-[1188px]:flex-col xsm:max-2xl:w-5/5 xsm:max-[1188px]:flex-col
         xsm:max-sm:px-2'>
            <div className='flex flex-col items-start gap-y-4 w-full xsm:max-md:-mt-10'>
                <h1 className='OurFleet_title text-3xl'>Our Fleet</h1>
                <p className='OurFleet_subtitle_1 text-xl'>With a network of registered and verified truck owners
                     and riders all over Nigeria, we got you covered
                </p>
                <p className='OurFleet_subtitle'>At Coche Ride we pride ourselves in offering only the 
                   highest quality standards to all our clients. 
                   We have a full fleet of modern, certified and maintained 
                   trucks and trailers suited to all aspects of transport 
                   for organizations as well as individuals.
                </p>
                <p className='OurFleet_subtitle'>
                  We cover Nigeria and even West Africa with our plethora of 
                  networked trucks and trailers all over the region.
                </p>

            </div>

            <div className='flex flex-col items-start gap-y-8 w-full'>
                <div className='ourfleet_desc_container flex items-start gap-4 border shadow-xl rounded xl p-8 border-t-slate-400 -ml-12'>
                    <h2 className='rounded-full p-5 ourfleet_no shadow-md border'>01</h2>
                    <div className='flex flex-col items-start gap-y-4 justify-start'>
                        <h1 className='bolden'>Trailers or Trucks?</h1>
                        <p className='w-full ourfleet_desc'>We have more than enough fleet to deliver your freight anywhere in Nigeria.</p>
                    </div>
                </div>
                
                <div className='ourfleet_desc_container flex items-start gap-4 border shadow-xl rounded xl p-8 border-t-slate-400 ml-8'>
                    <h2 className='rounded-full p-5 ourfleet_no shadow-md border'>02</h2>
                    <div className='flex flex-col items-start gap-y-4 justify-start'>
                        <h1 className='bolden'>Personal Logistics</h1>
                        <p className='w-full ourfleet_desc'>We have the right trucks, 
                            best tracking & security services, plus great insurance.
                        </p>
                    </div>
                </div>
                
                <div className='ourfleet_desc_container flex items-start gap-4 border shadow-xl rounded xl p-8 border-t-slate-400 -ml-6'>
                    <h2 className='rounded-full p-5 ourfleet_no shadow-md border'>03</h2>
                    <div className='flex flex-col items-start gap-y-4 justify-start'>
                        <h1 className='bolden'>Freight Services For Organizations</h1>
                        <p className='w-full ourfleet_desc'>We manage movement logistics 
                            with escort security & real-time tracking.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
