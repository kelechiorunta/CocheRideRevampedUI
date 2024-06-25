
import React from 'react'
import HeroSection from '../components/AboutUs/HeroSection'
import AboutHeader from '../components/AboutUs/AboutHeader'
import FrieghtMadeEasy from '../components/AboutUs/FrieghtMadeEasy'
import OurFleet from '../components/AboutUs/OurFleet'
import Achievements from '../components/AboutUs/Achievements'
import AboutPartners from '../components/AboutUs/AboutPartners'
import AboutFooter from '../components/AboutUs/AboutFooter'

export default function AboutUsPage() {
  return (
    <main className="bg-[#fffbf3] main_section relative flex h-full w-full flex-col items-center  px-[75px] z-50">
        <div className='main_heroSection fixed top-0 z-30 w-screen shadow-sm h-auto'>
           <AboutHeader/> 
        </div>

        <div className='main_heroSection flex items-center w-screen py-8 gap-y-8 bg-white h-full z-20'>
            <div className='herobackgroundPic absolute -top-0 left-0 w-full h-full pt-[200px] -z-10'></div>
           <HeroSection/> 
        </div>

        <div className='flex items-center w-screen h-full py-[100px] bg-white z-20'>
           <FrieghtMadeEasy/> 
        </div>

        <div className='ourfleet_maincontainer flex items-center z-20 w-screen h-full py-[200px] bg-white'>
           <OurFleet />
        </div>

        <div className='about_achievements bg-[#fffbf3] flex items-center justify-center w-screen h-full py-[0px] z-20'>
           <Achievements/>
        </div>

        <div className='flex items-center z-20 w-screen h-full px-[75px] py-[200px] bg-white'>
           <AboutPartners/>
        </div>

        <div className='flex items-center z-20 w-screen h-full px-[75px] py-[75px] bg-black text-white'>
           <AboutFooter/>
        </div>
    </main>
  )
}
