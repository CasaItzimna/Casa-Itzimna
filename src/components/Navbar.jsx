import React from 'react'
import Image from 'next/image'
import logo from '../assets/Logo/LOGOBLANCO.png'

function Navbar() {
  return (
   /*  <div
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
</div> */
<div className='h-[150px] w-full absolute top-0  z-30
flex flex-row justify-center gap-10
'>
 <div className='flex flex-col'>
    <Image src={logo} alt='logo' className='w-[150px] object-cover' />
 </div>
 <div className='flex flex-col justify-center text-white'>
    <div className='flex flex-row justify-center'>
      <span>ES</span><span>/</span><span className='border-2 rounded-full'>EN</span>
    </div>
    <div className='flex flex-row justify-center'>
      <ul className='flex flex-row text-center'>
        <li className='mr-16'>HOME</li>
        <li className='mr-16'>ABOUT US</li>
        <li className='mr-16'>HOUSE</li>
        <li >EXPERIENCE</li>
      </ul>
    </div>
    <div className='flex flex-row justify-center'>
    <ul className='flex flex-row text-center'>
      <li className='mr-16'>SPACES</li>
      <li className='mr-16'>BOUTIQUE</li>
      <li >CONTACT</li>
    </ul>
    </div>
 </div>
 <div className='flex flex-col justify-center'>
    <button className='border-2 border-white rounded-md text-white w-[100px] h-[40px]   '>LOG IN</button>
    <button className='bg-[#b4a692] rounded-md text-black w-[100px] h-[40px] mt-2  '>BOOK NOW</button>
 </div>
</div>
  )
}

export default Navbar