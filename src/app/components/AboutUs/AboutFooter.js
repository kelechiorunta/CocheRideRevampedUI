import Image from 'next/image'
import React from 'react'
import cochefooterlogo from '../../../../public/assets/img/logo-light@2x.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='flex items-end justify-evenly'>
        <div className='about_coche flex flex-col justify-start gap-4 items-start w-1/3'>
            <div className='w-20 h-20'>
                <Image className='w-20' src={cochefooterlogo} alt={"coche_logo"}/>
            </div>
            <p className='w-full -mt-8'>
                Coche Ride Transportation and Logistics have developed an all-in-one
                robust logistics ecosystem that simplifies the distribution of goods 
                by creating an efficient logistics experience for cargo owners and distributors
                who are burdened with the task of moving their goods within the country.
            </p>

        </div>

        <div className='about_coche flex flex-col gap-16 justify-start items-start'>
            <p className='text-xl'>Learn More</p>
            <ul className='flex flex-col items-start gap-2'>
                <li>About Us</li>
                <li>Our Resources</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className='about_coche flex flex-col justify-start gap-8 items-start'>
            <p className='text-xl'>Get in Touch</p>
            <ul className='flex flex-col items-start gap-2.5'>
                <li>contact@cocheride.org</li>
                <li>+234 811 577 9007</li>
                <li className='flex gap-x-4 items-center'>
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </li>
                <li>© 2024 Coche Ride.</li>
                <li>All rights reserved.</li>
            </ul>
        </div>

    </div>
  )
}