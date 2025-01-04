'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaArrowCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Image from 'next/image';

export default function Slider({slides}) {

  const [loading, setLoading] = useState(slides.map(() => true)); // Track loading state for each slide
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [prevSlide, setPrevSlide] = useState(0); // Track the previous slide index
  const [isloaded, setLoaded] = useState(false)

  const moveSlideForward = () => {
    setDirection(1);
    setPrevSlide(slide);
    // reLoad(slide+1)
    setSlide((n) => (n + 1) % slides.length);
  };

  const moveSlideBackward = () => {
    setDirection(-1);
    setPrevSlide(slide);
    // reLoad(slide+1)
    setSlide((n) => (n - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!document.hidden) {
      const timerId = setTimeout(() => {
        direction === 1 ? moveSlideForward() : moveSlideBackward();
      }, 5000); // Slide changes every 3 seconds
  
      return () => {
        clearTimeout(timerId);
      };
    }
    // setLoading(false)
    handleImageLoad(slide)
    reLoad(slide+1)
  }, [slide, direction, loading]);

  const handleImageLoad = (index) => {
    setLoading((prev) => {
      if (!Array.isArray(prev)) {
        console.error("Loading state is not an array:", prev);
        return prev;
      }
  
      const newLoading = [...prev];
      newLoading[index] = false; // Set the specific slide's loading state to false
      console.log("Updated loading state:", index, newLoading);
      return newLoading;
    });
  };

  const reLoad = (index) => {
    setLoading((prev) => {
      if (!Array.isArray(prev)) {
        console.error("Loading state is not an array:", prev);
        return prev;
      }
  
      const newLoading = [...prev];
      newLoading[index] = true; // Set the specific slide's loading state to false
      console.log("Updated loading state:", index, newLoading);
      return newLoading;
    });
  };
  

//   const staggerVariant = {
//     hidden:{x: '100%', opacity: 0}, 
//     visible:{x: '0',  opacity:1, transition: {duration: 0.8}},
// }

  return (
    <div className={`slideContainer  bg-cover bg-center transition-opacity duration-200 ease-in-out ${loading[0]? 'animate-none': 'animate-none'} px-4 pb-4 flex flex-col items-center justify-start gap-x-2 bg-black text-white
            border border-b-amber-900 rounded-xl text-2xl xsm:max-sm:px-2 -ml-8 xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px] max-w-[400px] h-[400px]`}>
      <div className={` bg-cover bg-center transition-opacity duration-200 ease-in-out ${loading[0]? 'animate-none': 'animate-none'} flex relative`}>
        {/* <nav className=' text-white flex justify-between absolute z-0'>
            <button className='rounded p-4 bg-gray-600'  onClick={moveSlideBackward}><FaArrowLeft size={30} fill='white'/></button>
            <button className='rounded p-4 bg-gray-600' onClick={moveSlideForward}><FaArrowRight size={30} fill='white'/></button>
        </nav> */}
        
        <div className={`bg-[url('/api/streams/${0}')] bg-cover bg-center transition-opacity duration-200 ease-in-out ${loading[0]? 'animate-none': 'animate-none'} rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px] w-[400px] h-[400px]`}
        style={{ overflow: 'hidden', position: 'relative'}}>
            <AnimatePresence  initial={false} custom={direction}>
            {slides.length>0 && slides.map((slidepic, index) => (
                (index === slide || index === prevSlide) && (
                <motion.div
                onViewportEnter={()=>{reLoad(slide+1); reLoad(slide)}}
                className={`bg-[url('/api/streams/${index}')] transition-opacity duration-200 ease-in-out ${loading[index]? 'animate-pulse': 'animate-none'} bg-cover bg-center rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px] md:max-xl:h-[400px] w-[400px] xl:max-2xl:w-[400px] h-[400px]`}
                    // onAnimationComplete={()=>reLoad(index)}
                    onAnimationStart={()=>{reLoad(slide+1); reLoad(slide)}}
                    key={index}
                    onAnimationComplete={()=>{reLoad(slide+1); handleImageLoad(slide);}}
                    // onLayoutAnimationStart={()=>reLoad(index)}
                    initial={{ x: index === slide ? (direction === 1 ? '100%' : '-100%') : (direction === 1 ? '-100%' : '100%')}}
                    animate={{ x: index === slide ? 0 : (direction === 1 ? '-100%' : '100%') }}
                    exit={{ x: index === slide ? (direction === 1 ? '-100%' : '100%') : (direction === 1 ? '-100%' : '100%')}}
                    transition={{ duration: 1, ease:'easeInOut' }}
                    style={{ position: 'absolute', width:'100%' }}
                >   
                    {/* {console.log(slidepic.id, slide)} */}
                    <>
                    {loading[index]? 
                    <img
                    onLoad={()=>{reLoad(index+1);}}
                    width={200}
                    height={200}
                    alt={`Slide${index}`}
                    src={`/api/streams/${index}`}
                    className={`bg-[url('/api/streams/${index}')] transition-opacity duration-200 ease-in-out ${loading[index]? 'animate-pulse': 'animate-none'} bg-cover bg-center rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px] md:max-xl:h-[400px] w-[400px] xl:max-2xl:w-[400px] h-[400px]`}
                    />
          
                    :
                    <img
                    loading='lazy'
                    // onTransitionStart={handleImageLoad(index)}
                    onLoad={()=>{reLoad(index+1);handleImageLoad(index)}}
                    width={144} height={144} className={`bg-cover bg-center transition-all duration-200 ease-in-out ${loading[index]? 'animate-pulse': 'animate-none'} rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px]  sm:max-mainheader_breakpoint_four:max-w-[400px] mainheader_breakpoint_four:max-xl:h-[400px] w-[400px] xl:max-2xl:w-[400px] h-[400px]`}
                    src={loading[index]? `/api/streams/${index}`: slides[index].heroPic } alt={`slide${index}`} />
                    
                    }
                    </>
                </motion.div>
                )
            ))}
           </AnimatePresence> 
      </div>
    </div>
</div> 
  );
}