import Image from 'next/image';
import React from 'react'
import hero1 from './hero.png'
import hero3 from './hero3.jpg'
import hero4 from './hero4.jpg'
import hero5 from './hero5.jpg'
import { AppContext } from '@/context/StateContext';

function Hero() {

  const {idioma} = AppContext()
  return (
    <div className="w-full h-[70vh] lg:h-[90vh] flex flex-col relative">
          <Image
            src={hero5}
            alt="fondo"
            className="absolute w-full h-full object-cover"
          />
    
          <div className="flex flex-row justify-center  h-full w-full   text-white absolute z-10"> 
            <div className="w-full h-[85%] flex flex-col justify-end lg:pb-20 2xl:pb-0 2xl:justify-center text-center items-center">
             {idioma == "ingles"?
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-cinzelRegular lg:mt-8">
              <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px]">C</span>ontact{" "}
            </h1>
            :
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-cinzelRegular lg:mt-8">
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px]">C</span>ontacto{" "}
          </h1>
            }
             
              <div className='flex lg:hidden h-[100px]'/>
                
     
            </div>
          </div>
        </div> 
  )
}

export default Hero