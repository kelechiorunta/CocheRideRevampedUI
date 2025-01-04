import React from 'react'
import partner1 from '../../../../public/assets/img/partners/google.png'
import partner2 from '../../../../public/assets/img/partners/curacel.png'
import partner3 from '../../../../public/assets/img/partners/cold-hubs.png'
import partner4 from '../../../../public/assets/img/partners/cloudinary.png'
import partner5 from '../../../../public/assets/img/partners/adcem.png'
import partner6 from '../../../../public/assets/img/partners/uf.png'
import partner7 from '../../../../public/assets/img/partners/glo.png'
import partner8 from '../../../../public/assets/img/partners/lagos-govt.png'
import partner9 from '../../../../public/assets/img/partners/scavolini.png'
import partner10 from '../../../../public/assets/img/partners/lagos-fashion.png'
import partner11 from '../../../../public/assets/img/partners/lifemate.png'
import partner12 from '../../../../public/assets/img/partners/costa-del-soy.png'
import partner13 from '../../../../public/assets/img/partners/maydon.png'
import partner14 from '../../../../public/assets/img/partners/pcmn.png'
import partner15 from '../../../../public/assets/img/partners/plascon.png'
import partner16 from '../../../../public/assets/img/partners/darling.png'
import Image from 'next/image'



export default function Partners() {
  return (
    <div className='flex items-start gap-8 w-full xsm:max-[1189px]:flex-col xsm:max-sm:-ml-10
     xsm:max-[400px]:-ml-16'>
        <div className='flex flex-col items-start justify-end gap-8 w-[548px]'>
            <small className='partners_title px-4'>PARTNERS & CLIENTS</small>
            <h1 className='partners_heading text-4xl leading-snug xsm:max-sm:max-w-[373px] xsm:max-[400px]:text-3xl'>Trusted by over 20+ Partners & Clients</h1>
            <p className='leading-snug text-xl w-3/4 xsm:max-sm:max-w-[340px] xsm:max-[400px]:max-w-[340px]'>
                From multinational corporations to local enterprises, 
                our partners and clients form the backbone of our success.
            </p>

        </div>
        <div className='flex flex-row flex-wrap items-start justify-start gap-14 max-w-[868px] xsm:max-[400px]:justify-center '>
                <Image className='w-[150px] h-{150px]' src={partner1} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner2} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner3} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner4} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner5} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner6} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner7} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner8} alt='pic'/>
                {/* <Image className='w-[150px] h-{150px]' src={partner9} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner10} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner11} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner12} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner13} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner14} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner15} alt='pic'/>
                <Image className='w-[150px] h-{150px]' src={partner16} alt='pic'/> */}
        </div>
    </div>
  )
}