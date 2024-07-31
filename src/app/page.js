'use client'
import Image from "next/image";
import MainHeader from "./components/MainHeader";
import HeroMainPage from "./components/HeroMainPage";
import WhoAreWe from './components/WhoAreWe'
// import WhyChooseUs from './components/WhyChooseUs'
import FeaturedService from './components/FeaturedService'
import Vision from './components/Vision'
import Advantages from './components/Advantages'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Footer from './components/Footer'

import LandingSection from "./builder_components/LandingSection/LandingSection";
import WhoWeAre from "./builder_components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "./builder_components/WhyChooseUs/WhyChooseUs"


import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {

  const scopeContainer = useRef(null)
  const menuContainer = useRef(null)
  //const headerRef = useRef(null)

  

  useGSAP(() => {
      const updateBackgroundPosition = (direction) => {
      const element = document.querySelector('.backgroundOverlaypic');
      const currentY = parseFloat(window.getComputedStyle(element).backgroundPositionY);
      const increment = direction === 'down' ? 10 : -10; // Adjust the increment value as needed
      const newY = Math.max(0, Math.min(100, currentY + increment)); // Ensure the value stays between 0% and 100%

      gsap.to('.backgroundOverlaypic', {
        backgroundPositionY: `${newY}%`,
        duration: 0.5,
        ease: 'none',
        overwrite: 'auto'
      });
    };

    ScrollTrigger.create({
      trigger: scopeContainer.current,
      start: 'top 350px',
      end: 'top',
      scrub: 3,
      onUpdate: self => {
        if (self.direction > 0) {
          updateBackgroundPosition('down');
        } else {
          updateBackgroundPosition('up');
        }
      }
    });
  }, {scope: scopeContainer.current});

  return (
    <main className="mainContainer relative flex h-full flex-col items-center  bg-black z-20">
      
      <div className="w-full fixed top-0 z-50 ">
        <MainHeader/>
      </div>

      <div className=" w-screen pt-16">
        <LandingSection/>
      </div>
      <div className=" w-screen -mt-28 ">
        <WhoWeAre/>
      </div>
      <div className="whychooseus w-screen -mt-6">
        <WhyChooseUs/>
      </div>


      {/* <div className="bg-black w-screen z-20 py-16">
        <HeroMainPage/>
      </div> */}

      {/* <div className="px-[75px] py-[88px] bg-white w-screen z-20">
        <WhoAreWe/>
      </div> */}

      {/* <div className="whychooseus px-[75px] py-[88px] w-screen -mt-[50px] z-20">
        <WhyChooseUs/>
      </div> */}

      <div className="featuredservice px-[75px] py-[88px] bg-white w-screen -mt-[50px] z-20">
        <FeaturedService/>
      </div>
      
      <div ref={scopeContainer}
      className="clipVision  px-[75px] py-[88px] overflow-hidden bg-white w-screen h-[600px] z-10">
        <div 
        className='backgroundOverlaypic absolute -top-0 left-0 w-full h-full -z-10'></div>
        <Vision className='vision_mover'/>
      </div>

      <div className="advantages_container px-[75px] py-[88px] bg-white w-screen -mt-[50px] z-20">
        <Advantages/>
      </div>

      <div className="px-[75px] py-[88px] bg-white w-screen -mt-[50px] z-20">
        <Testimonials/>
      </div>

      <div className="px-[75px] py-[88px] bg-white w-screen -mt-[50px] z-20">
        <Partners/>
      </div>
      
      <div className="footer_container text-white px-[75px] py-[88px] w-screen -mt-[50px] z-20">
        <Footer/>
      </div>
    </main>
  );
}
