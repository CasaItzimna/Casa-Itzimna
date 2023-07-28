import React from 'react'
import CarritoInfo from '../components/Carrito/CarritoInfo'
import TimeLine from '@/components/Carrito/TimeLine'
import OurBoutique from '@/components/Carrito/OurBoutique'

function Carrito() {
  return (
    <div className='bg-[#d3cbc0]'>
      <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'>

      </div>
      <TimeLine/>
      <CarritoInfo/>
      <OurBoutique/>
    </div>
  )
}

export default Carrito