'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaArrowCircleRight, FaArrowAltCircleLeft, FaTruck } from 'react-icons/fa'
import Image from 'next/image';

export default function TestimonialSlider({testimonials}) {

  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [prevSlide, setPrevSlide] = useState(0); // Track the previous slide index

  const moveSlideForward = () => {
    setDirection(1);
    setPrevSlide(slide);
    setSlide((n) => (n + 1) % testimonials.length);
  };

  const moveSlideBackward = () => {
    setDirection(-1);
    setPrevSlide(slide);
    setSlide((n) => (n - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      direction === 1 ? moveSlideForward() : moveSlideBackward();
    }, 7000); // Slide changes every 3 seconds

    return () => {
      clearTimeout(timerId);
    };
  }, [slide, direction]);

//   const staggerVariant = {
//     hidden:{x: '100%', opacity: 0}, 
//     visible:{x: '0',  opacity:1, transition: {duration: 0.8}},
// }

  return (
    <div className='slideContainer px-4 pb-4 flex flex-col items-center justify-start gap-x-2 bg-black text-white py-auto
            border border-b-amber-900 rounded-xl text-2xl xsm:max-[400px]:h-[480px] xsm:max-[400px]:pb-16 xsm:max-[400px]:-ml-8 xsm:max-[400px]:max-w-[337px] xsm:max-sm:min-h-[300px] max-w-[679px] h-[400px]'>
      <div className='flex relative'>
        {/* <nav className=' text-white flex justify-between absolute z-0'>
            <button className='rounded p-4 bg-gray-600'  onClick={moveSlideBackward}><FaArrowLeft size={30} fill='white'/></button>
            <button className='rounded p-4 bg-gray-600' onClick={moveSlideForward}><FaArrowRight size={30} fill='white'/></button>
        </nav> */}
        
        <div className="rounded-xl xsm:max-[400px]:pb-16 xsm:max-[400px]:h-[480px] xsm:max-[400px]:max-w-[337px] xsm:max-sm:min-h-[300px] w-[679px] h-[400px] xsm:max-[400px]:mx-auto" style={{ overflow: 'hidden', position: 'relative'}}>
            <AnimatePresence initial={false} custom={direction}>
            {testimonials && testimonials.map((testimonial, index) => (
                (index === slide || index === prevSlide) && (
                <motion.div
                className='rounded-xl xsm:max-[400px]:pb-16 xsm:max-[400px]:max-w-[337px] xsm:max-sm:min-h-[300px] md:max-xl:h-[400px] w-[679px] xl:max-2xl:w-[679px] h-[400px]'
                    key={index}
                    initial={{ x: index === slide ? (direction === 1 ? '100%' : '-100%') : (direction === 1 ? '-100%' : '100%')}}
                    animate={{ x: index === slide ? 0 : (direction === 1 ? '-100%' : '100%') }}
                    exit={{ x: index === slide ? (direction === 1 ? '-100%' : '100%') : (direction === 1 ? '-100%' : '100%')}}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', width:'100%' }}
                >
                    {/* <Image className=' rounded-xl xsm:max-[400px]:max-w-[300px] xsm:max-sm:min-h-[300px]  sm:max-mainheader_breakpoint_four:max-w-[400px] mainheader_breakpoint_four:max-xl:h-[400px] w-[400px] xl:max-2xl:w-[400px] h-[400px]'src={testimonials[index].heroPic} alt={`slide${index}`} /> */}
                    <div className='flex flex-col text-center gap-4 items-center  py-8 xsm:max-[400px]:pt-0 xsm:max-[400px]:pb-8 xsm:max-[400px]:max-w-6/10
                    px-auto xsm:max-sm:max-w-3/5 xsm:max-sm:ml-8 mt-2 xsm:max-[400px]:mt-8 max-md:mt-20 max-md:h-[400px] max-md:max-h-[400px] max-md:min-h-[600px] max-sm:pb-2 max-sm:my-9 max-sm:min-h-[400px] xsm:max-2xl:max-w-[600px]'>
                        <div className='w-auto'>{testimonial.icon}</div>
                        <p className='pl-20 w-3/5 text-xl italic xsm:max-[500px]:text-[20px] xsm:max-sm:w-3/4  xsm:max-2xl:pl-0'>{`“${testimonial.message}”`}</p>
                        <small className='pl-0 text-[18px] w-full xsm:max-sm:text-[15px] sm:max-[400px]:pl-0'>{testimonial.client}</small>
                        <small className='pl-0 text-[18px] w-full xsm:max-sm:text-[15px] sm:max-[400px]:pl-0'>{testimonial.company}</small>
                    </div>
                </motion.div>
                )
            ))}
           </AnimatePresence> 
      </div>
    </div>
</div> 
  );
}