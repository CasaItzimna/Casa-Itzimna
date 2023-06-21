import Image from 'next/image';
import React from 'react'
import hero1 from './herohouse.png'

function Hero({json}) {
    return (
      <div className="w-full h-screen flex flex-col relative ">
        <Image
          src={hero1}
          alt="fondo"
          className="absolute w-full h-full object-cover"
        />
  
        <div className="flex flex-col justify-center h-screen w-full text-center items-center text-white absolute z-10">
          <div className='h-[0%]'>

          </div>
          <div className="h-[30%]">
            <h1 className="text-[150px] font-cinzelRegular">House</h1>
          </div>
          <div className='h-[30%]'>

          </div>
        
          
        </div>
      </div>
    );
  }
  
  export default Hero;