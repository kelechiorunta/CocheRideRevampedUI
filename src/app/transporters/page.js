import React from 'react'
import AboutHeader from '../components/AboutUs/AboutHeader'
import MoveGoodsFooter from '../components/MoveGoods/MoveGoodsFooter'
import StartEarningWithTrucks from '../components/Transporters/StartEarningWithTrucks'

export default function StartEarningWithTrucksPage() {
  return (
    <main className="bg-white main_section relative flex h-full w-full flex-col items-center px-[75px] z-50">
        <div className='main_heroSection fixed top-0 z-30 w-screen shadow-sm h-auto'>
           <AboutHeader/> 
        </div>
        <div className='movegoods_container px-[75px] pb-[150px] bg-white w-screen'>
           <StartEarningWithTrucks/>
        </div>
        <div className='clippedMoveGoodsFooter p-[100px] bg-[#262b32] w-screen text-white'>
            <MoveGoodsFooter/>
        </div>
    </main>
  )
}