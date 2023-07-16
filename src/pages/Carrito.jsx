import React from 'react'
import CarritoInfo from '../components/Carrito/CarritoInfo'
import TimeLine from '@/components/Carrito/TimeLine'
import OurBoutique from '@/components/Carrito/OurBoutique'

function Carrito() {
  return (
    <div>
      <div className='w-full h-[100px] bg-[#b4a692] lg:bg-white'>

      </div>
      <TimeLine/>
      <CarritoInfo/>
      <OurBoutique/>
    </div>
  )
}

export default Carrito