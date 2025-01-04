import React from 'react'
import MoveGoodsPic from '../../../../public/assets/img/MoveGoods/move-goods@2x.jpg'
import MoveGoodsOverlay from '../../../../public/assets/img/MoveGoods/move-goods-overlay.png'
import Image from 'next/image'

export default function MoveYourGoods() {
  return (
    <div className='flex items-center gap-28 justify-between py-[100px] w-full xsm:max-[1188px]:flex-col
     xsm:max-[400px]: xsm:max-[400px]:px-0'>
        <div className='flex flex-col items-start gap-8 mt-16'>
            <h1 className='movegoods_heading text-[#f5a623] text-4xl'>Move Your Goods with Coche Ride</h1>
            <p className='movegoods_heading_subtitle text-xl'>To get a truck with us you have to register in our platform</p>
            <p className='leading-[29px]'>Experience the ultimate in hassle-free and live updates when
               moving your goods with us! With our well-established nation-wide 
               network of trucks, an insitant match with any type of truck you want;
               fullly insured and with professional drivers
            </p>
            <div className='flex items-center justify-start gap-4 xsm:max-sm:w-[90%] xsm:max-2xl:w-3/5 xsm:max-[400px]:w-full'>
                <button className='rounded-xl px-4 py-3 text-white bg-[#262b32] border-2 border-[#262b32] w-full'>Register Now</button>
                <button className='rounded-xl px-4 py-3 text-[#262b32] bg-white border-2 border-[#262b32] w-full'>Login</button>
            </div>
        </div>
        <div className='w-full relative xsm:max-sm:max-w-full xsm:max-[400px]:max-w-[350px]'>
            <Image className=' h-[450px] w-9/10 rounded-xl  xsm:max-[400px]:max-w-[350px]' src={MoveGoodsPic} alt='movegoods'/>
            <Image className='absolute top-[15%] -left-[23%] w-[23%] h-[40%]'
             src={MoveGoodsOverlay} alt='movegoods_overlay'/>
        </div>
    </div>
  )
}
