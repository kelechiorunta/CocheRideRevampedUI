import React from 'react'
import TransporterPic from '../../../../public/assets/img/about4@2x.jpg'
import MoveGoodsOverlay from '../../../../public/assets/img/MoveGoods/move-goods-overlay.png'
import Image from 'next/image'

export default function StartEarningWithTrucks() {
  return (
    <div className='flex items-center gap-[200px] justify-between py-[100px] w-full'>
        <div className='flex flex-col items-start gap-8 mt-16 w-[80%]'>
            <h1 className='movegoods_heading text-[#f5a623] text-4xl w-full'>Start Earning With Your Trucks!</h1>
            <p className='movegoods_heading_subtitle text-xl'>You have to register your trucks with us to get started</p>
            <p className='w-[87%] leading-[29px]'>Whether you have a single truck or a fleet,
             we offer the opportunity to increase your revenue as we put your trucks on the road
            </p>
            <div className='flex items-center justify-start gap-4'>
                <button className='rounded-xl px-4 py-3 text-white bg-[#262b32] border-2 border-[#262b32]'>Register Now</button>
                <button className='rounded-xl px-4 py-3 text-[#262b32] bg-white border-2 border-[#262b32]'>Login</button>
            </div>
        </div>
        <div className='w-[50%] relative'>
            <Image className='w-[450px] h-[450px] rounded-xl' src={TransporterPic} alt='movegoods'/>
            <Image className='absolute top-[15%] -left-[23%] w-[23%] h-[40%]'
             src={MoveGoodsOverlay} alt='movegoods_overlay'/>
        </div>
    </div>
  )
}