import Image from 'next/image';
import React from 'react'
import hero1 from './hero.png'
import hero from './hero.jpg'
import hero2 from './hero2.jpg'
import hero3 from './hero3.jpg'



function Hero() {
    return (
        <div className="w-full  h-[70vh] lg:h-[90vh] flex flex-col relative">
          <Image
            src={hero1}
            alt="fondo"
            className="absolute w-full h-full object-cover"
          />
    
          <div className="flex flex-row justify-center  h-full w-full   text-white absolute z-10"> 
            <div className="w-full h-[85%] flex flex-col justify-end md:justify-center text-center items-center lg:mt-8 2xl:mt-0">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl 2xl:9xl font-cinzelRegular">
                <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[170px] xl:text-[170px] 2xl:text-[200px]">E</span>xperience{" "}
              </h1>
              <div className='flex lg:hidden h-[100px]'/>
                
     
            </div>
          </div>
        </div>
      );
}

export default Hero