import React from 'react'
import MoveGoodsPic from '../../../../public/assets/img/MoveGoods/move-goods@2x.jpg'
import MoveGoodsOverlay from '../../../../public/assets/img/MoveGoods/move-goods-overlay.png'
import Image from 'next/image'

export default function MoveYourGoods() {
  return (
    <div className='flex items-center gap-28 justify-between py-[100px] w-full'>
        <div className='flex flex-col items-start gap-8 mt-16'>
            <h1 className='movegoods_heading text-[#f5a623] text-4xl'>Move Your Goods with Coche Ride</h1>
            <p className='movegoods_heading_subtitle text-xl'>To get a truck with us you have to register in our platform</p>
            <p className='w-[87%] leading-[29px]'>Experience the ultimate in hassle-free and live updates when
               moving your goods with us! With our well-established nation-wide 
               network of trucks, an insitant match with any type of truck you want;
               fullly insured and with professional drivers
            </p>
            <div className='flex items-center justify-start gap-4'>
                <button className='rounded-xl px-4 py-3 text-white bg-[#262b32] border-2 border-[#262b32]'>Register Now</button>
                <button className='rounded-xl px-4 py-3 text-[#262b32] bg-white border-2 border-[#262b32]'>Login</button>
            </div>
        </div>
        <div className='w-full relative'>
            <Image className='w-[450px] h-[450px] rounded-xl' src={MoveGoodsPic} alt='movegoods'/>
            <Image className='absolute top-[15%] -left-[23%] w-[23%] h-[40%]'
             src={MoveGoodsOverlay} alt='movegoods_overlay'/>
        </div>
    </div>
  )
}
