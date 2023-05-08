import React from 'react'
import Image from 'next/image'
import logo from '../assets/Logo/LOGO1.png'

function Navbar() {
  return (
    <div
    className='w-full h-[100px] absolute top-0 z-20 bg-gradient-to-b from-black to-transparent'
    >
        <div className='w-full h-full flex flex-row justify-around'>
            <div className="flex h-full items-center justify-center">
            <Image className='w-[75px] text-center' src={logo} alt='logo'/>
            </div>
            <div >
                <ul className='flex flex-row h-full w-full text-white text-center items-center'>
                    <li className='mr-4 uppercase'>Nosotros</li>
                    <li className='mr-4 uppercase'>Habitaciones</li>
                    <li className='mr-4 uppercase'>Restaurante</li>
                    <li className='mr-4 uppercase'>Boutique</li>
                    <li className='mr-4 uppercase'>Facturación</li>
                    <li className='mr-4 uppercase'>Contacto</li>
                    <li className='mr-4 uppercase'>Reserva</li>
                </ul>
            </div>
        </div>
</div>
  )
}

export default Navbar