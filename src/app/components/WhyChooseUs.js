'use client'
import React from 'react'
import { FaTruck, FaPrescription, FaSubscript, FaReact } from 'react-icons/fa'

export default function WhyChooseUs() {
  return (
    <div className='flex flex-col gap-4'>
        <small className='whoweare px-4' >WHY CHOOSE US</small>
        <h1 className='whychooseusheading leading-snug text-4xl mb-4'>
            We make logistics easy for everyone. With just a few clicks on your phone, 
            you can book a truck or bus for your freight needs.
        </h1>
        <div className='flex justify-evenly items-start w-full'>
            <div className='w-full flex flex-col justify-start items-start gap-4'>
                <div className='faReact p-4 rounded'><FaReact className='faReact'/></div>
                <small className='bolden'>Flexible Pricing + Timely Delivery</small>
                <p className='w-[250px]'>Our pricing, primarily determined by distance, is flexible and more affordable than industry standards. 
                    Thanks to our advanced road technology, our trucks consistently arrive faster than estimated.
                </p>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-4'>
                <div className='faReact p-4 rounded'><FaTruck className='faTruck'/></div>
                <small className='bolden'>Instant and Unrivaled Access to Fleet of Trucks</small>
                <p className='w-[250px]'>With a network of over 20,000 trucks, buses, and minivans across Nigeria and West Africa,
                   we guarantee access to a vehicle within 2 minutes of your request.
                </p>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-4'>
                <div className='faReact p-4 rounded'><FaSubscript className='faReact'/></div>
                <p className='bolden'>Real-Time Tracking + Auto Insurance Coverage</p>
                <p className='w-[250px]'>Enjoy 360-degree visibility and real-time updates on your goods in transit, 
                   along with automated insurance coverage of your goods.
                </p>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-4'>
                <div className='faReact p-4 rounded'><FaPrescription className='faReact'/></div>
                <p className='bolden'>Technology + 24/7 Customer Support</p>
                <p className='w-[250px]'>Our tech-driven platform connects you with a network of registered and verified vehicles,
                   supported by a 24/7 customer support team ready to resolve any issues.
                </p>
            </div>
        </div>
    </div>
  )
}
