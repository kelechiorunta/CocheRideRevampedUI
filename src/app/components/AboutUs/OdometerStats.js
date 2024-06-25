'use client'

import React, { useRef } from 'react'
import Odometer from './Odometer';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { FaTruck } from 'react-icons/fa';

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function OdometerStats() {
    const [dayTrucks, setDayTrucks] = useState(0);
    const [coldChain, setColdChain] = useState(0);
    const [networked, setNetworked] = useState(0);
    const [disposal, setDisposal] = useState(0);
    const add = () => {
        setDayTrucks(112)
        setColdChain(12)
        setNetworked(300)
        setDisposal(130)
    }
    const reset = () => {
        setDayTrucks(0)
        setColdChain(0)
        setNetworked(0)
        setDisposal(0)
    }
    const odometerRef = useRef(null)
    useEffect(() => {
        let ctx = gsap.context(() => {
          ScrollTrigger.create({
            trigger: odometerRef.current,
            start: 'top 600px',
            end: 'bottom 200px',
            onEnter: add,
            onLeaveBack: reset,
            scrub: 2,
          });
        }, odometerRef);
    
        return () => {
          ctx.revert();
        };
      }, []);
    

  return (
    <div ref={odometerRef}
        className='z-10 w-full flex gap-x-8 gap-y-4 items-center justify-center'>
        <div className='p-8 border shadow-xl text-4xl rounded flex flex-col gap-6 items-center justify-center w-[300px] h-[300px]'>
            <FaTruck size={50}/>
            <div className='flex gap-2'><Odometer value={dayTrucks} /> +</div>
            <p className='p-4 text-sm text-center'>Dry Trucks Trips
            (Above 60,000 KM)</p>
        </div>
        <div className='p-8 border shadow-xl text-4xl rounded flex flex-col gap-6 items-center justify-center w-[300px] h-[300px]'>
            <FaTruck size={50}/>
            <div className='flex gap-2'><Odometer value={coldChain} /> +</div>
            <p className='p-4 text-sm'>Cold Chain Truck Trips
            (Above 60,000 KM)</p>
        </div>
        <div className='py-4 px-8 border shadow-xl text-4xl rounded flex flex-col gap-x-6 gap-y-6 items-center justify-center w-[300px] h-[300px]'>
            <FaTruck className='-mt-4' size={50}/>
            <div className='flex gap-2'><Odometer value={networked} /> +</div>
            <p className='p-4 text-sm'>Networked Trucks</p>
        </div>
        <div className='p-8 border shadow-xl text-4xl rounded flex flex-col gap-x-6 gap-y-6 items-center justify-center w-[300px] h-[300px]'>
            <FaTruck className='-mt-4' size={50}/>
            <div className='flex gap-2'><Odometer value={disposal} /> +</div>
            <p className='p-4 text-sm'>Trucks at our disposal</p>
        </div>
        
  </div>
  )
}
