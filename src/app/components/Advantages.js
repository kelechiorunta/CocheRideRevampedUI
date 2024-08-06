import React from 'react'
import { FaMarker, FaUser } from 'react-icons/fa'

export default function Advantages() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
        <small className='advantages_title'>ADVANTAGES OF COCHE RIDE</small>
        <h1 className='advantages_heading text-4xl mb-4 xsm:max-sm:text-3xl xsm:max-sm:text-center'>Benefits for our Customers, Brokers & Transporters</h1>
        <div className='grid grid-cols-3 gap-8 py-8 w-full xsm:max-xmd:grid-cols-1 xmd:max-xl:grid-cols-2'>
            <div className='customers flex flex-col justify-start items-start border p-8 shadow-xl rounded-xl'>
                <div className='p-5 '><FaUser size={50}/></div>
                <p className='p-5 text-xl font-extrabold'>Customers</p>
                <ul className='flex flex-col gap-4 p-5'>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Insured, efficient freight</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>AI powered & efficient Route Planning</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Extensive Warehousing Network</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Fair Pricing Model</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Real-time visibility</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Data-Driven Insights</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Enhanced Customer Experience</li>
                    </div>
                </ul>
            </div>

            <div className='customers flex flex-col justify-start items-start border p-8 shadow-xl rounded-xl'>
            <div className='p-5 '><FaUser size={50}/></div>
                <p className='p-5 text-xl font-extrabold'>Brokers</p>
                <ul className='flex flex-col gap-4 p-5'>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Same advantages as a transporter</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Fair & Transparent Pricing Model</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Extensive Network Access</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Growth Opportunities</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Automated Compliance Management</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Integrated Communication Tools</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Predictive Maintenance Alerts</li>
                    </div>
                </ul>
            </div>

            <div className='customers flex flex-col justify-start items-start border p-8 shadow-xl rounded-xl'>
            <div className='p-5 '><FaUser size={50}/></div>
                <p className='p-5 text-xl font-extrabold'>Transporters</p>
                <ul className='flex flex-col gap-4 p-5'>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Guaranteed flexible trips</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Prompt & automated payments</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Ability to grow your trucking business</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Efficient driver & fleet management</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Enhanced Customer Experience</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Data-Driven Insights</li>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div><FaMarker/></div>
                        <li>Real-time visibility</li>
                    </div>
                </ul>
            </div>


        </div>
    </div>
  )
}
