import Image from 'next/image'
import React from 'react'
import slider1 from "../../../assets/Home/slider1.jpg";
import {FaUsers} from 'react-icons/fa'
import {BsCalendar3} from 'react-icons/bs'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <Image src={slider1} alt='fondo' className='absolute w-full h-full object-cover' />
        <div className='w-full h-screen z-10 absolute bg-black/70'></div>
        <div className='flex flex-col justify-center h-screen w-full text-center items-center text-white absolute z-20'>
            <div className=''>

            <h1 className='text-8xl'>Casa Itzimná</h1>
            <h2 className='text-5xl'>Hotel Boutique</h2>
            </div>
            
            <div className='flex flex-row  w-[80%] h-[80px] bg-[#b4a692]/40 mt-14 justify-center items-center rounded-md '>
                <div className='w-[22%] h-[55px] bg-white rounded-md cursor-pointer  '>
                    <span  className='text-[#b4a692] text-xl flex flex-row justify-center gap-2 '>CHECK IN <BsCalendar3/></span>
                </div>
                <div className='w-[22%] h-[55px] bg-white ml-4 rounded-md cursor-pointer '>
                <span  className='text-[#b4a692] text-xl flex flex-row justify-center gap-2'>CHECK OUT <BsCalendar3/></span>
                </div >
                <div className='w-[22%] h-[55px] bg-white ml-4 rounded-md cursor-pointer '>
                <span className='text-[#b4a692] text-xl flex flex-row justify-center gap-2'>GUESTS <FaUsers/></span>
                </div>
            <button className='w-[22%] h-[55px] bg-[#b4a692] ml-4  rounded-md cursor-pointer text-black'>CHECK NOW</button>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Hero