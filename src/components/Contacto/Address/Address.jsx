import React from 'react'
import Mapa from './Mapa'

function Address({json}) {
  return (
    <div className='w-full h-full flex flex-row justify-center mt-8'>
        <div className='flex flex-col justify-center text-center items-center'>
            <h3 className='text-4xl font-apollo text-center tracking-[8px] mb-4 mt-8'>{json.Contact.Address}</h3>
            <a href='https://goo.gl/maps/GzpqxsC24WFuUFZS9' target="_blank">
            <p className='w-[90%] lg:w-full flex flex-row gap-2 justify-center font-apollo tracking-[2px]'>AVENIDA PÉREZ PONCE 120, COLONIA ITZIMNÁ 07100, MÉRIDA, YUCATÁN</p>
            </a>
            <Mapa/>
        </div>
    </div>
  )
}

export default Address