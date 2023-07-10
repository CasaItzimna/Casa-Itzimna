import React from 'react'
import Mapa from './Mapa'

function Address({json}) {
  return (
    <div className='w-full h-full flex flex-row justify-center mt-8'>
        <div className='flex flex-col justify-center text-center'>
            <h3>{json.Contact.Address}</h3>
            <p>AVENIDA PÉREZ PONCE 120, COLONIA ITZIMNÁ 07100, MÉRIDA, YUCATÁN</p>
            <Mapa/>
        </div>
    </div>
  )
}

export default Address