import React from 'react'
import AboutHeader from '../components/AboutUs/AboutHeader'
import MoveYourGoods from '../components/MoveGoods/MoveYourGoods'
// import AboutFooter from '../components/AboutUs/AboutFooter'
import MoveGoodsFooter from '../components/MoveGoods/MoveGoodsFooter'

export default function MoveGoodsPage() {
  return (
    <main className="bg-white overflow-hidden main_section relative flex h-full w-full flex-col items-center px-[75px] z-50">
        <div className='main_heroSection fixed top-0 z-30 w-screen shadow-sm h-auto'>
           <AboutHeader/> 
        </div>
        <div className='movegoods_container px-[20px] pb-[150px] bg-white w-screen'>
           <MoveYourGoods/>
        </div>
        <div className='clippedMoveGoodsFooter py-[100px] px-0 bg-[#262b32] w-screen text-white'>
            <MoveGoodsFooter/>
        </div>
    </main>
  )
}
