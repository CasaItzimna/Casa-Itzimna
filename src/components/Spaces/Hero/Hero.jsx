import Image from 'next/image';
import React from 'react'
import hero1 from './hero.png'



function Hero() {
    return (
        <div className="w-full h-[90vh] lg:h-[90vh] flex flex-col relative">
          <Image
            src={hero1}
            alt="fondo"
            className="absolute w-full h-full object-cover"
          />
    
          <div className="flex flex-row justify-center  h-full w-full   text-white absolute z-10"> 
            <div className="w-full h-[90%] flex flex-col justify-center text-center items-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzelRegular">
                <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">G</span>allery{" "}
              </h1>
              <div className='flex lg:hidden h-[100px]'/>
                
    
            </div>
          </div>
        </div>
      );
}

export default Hero