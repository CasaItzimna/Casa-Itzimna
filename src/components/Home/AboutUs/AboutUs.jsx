import React from 'react';
import foto1 from '../../../assets/Home/AboutUs/recamara.png';
import foto2 from '../../../assets/Home/AboutUs/2.png';
import foto3 from '../../../assets/Home/AboutUs/3.png';
import Image from 'next/image';

function AboutUs() {
  return (
    <div className='w-full h-[400px] grid grid-cols-1 place-content-center bg-gradient-to-t from-white to-transparent  absolute bottom-0  z-30'>

    <div className='w-full h-full flex flex-row justify-center absolute bottom-0'>
      <div className='w-[37.5%] h-full flex flex-col text-left'>
        <h3 className='text-3xl font-cinzelBold text-[#31302c] mb-8'>ABOUT US</h3>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id felis non erat venenatis facilisis vel at purus. Nunc ultrices, leo egestas.
        </p>
        <button className='rounded-[4px] bg-[#b4a692] w-[150px] h-[37px] mt-8'>READ MORE</button>
      </div>
      <div className='w-[37.5%] h-full relative pr-10'>
        <div className='absolute top-0 right-0 bg-white h-[250px] w-[300px]'>
          <Image src={foto1} alt='recamara' className='w-full h-full p-2' />
        </div>
        <div className='absolute top-0 left-0 bg-white h-[250px] w-[200px]'>
          <Image src={foto2} alt='hamaca' className='w-full h-full p-2' />
        </div>
       {/*  <div className='absolute bottom-0 right-0 bg-white'>
          <Image src={foto3} alt='alberca' className='w-full h-full p-2' />
        </div> */}
      </div>
    </div>
        </div>
  );
}

export default AboutUs;
