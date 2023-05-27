import React from 'react'
import foto1 from '../../../assets/Home/AboutUs/recamara.png'
import foto2 from '../../../assets/Home/AboutUs/2.png'
import foto3 from '../../../assets/Home/AboutUs/3.png'
import Image from 'next/image'

function AboutUs() {
  return (
    <div className=' h-full w-full  '>
      <div className='w-full h-full flex flex-row justify-center bg-white relative  '>

        <div className='w-1/2 h-full'>
            <h3>ABOUT US</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id felis non erat venenatis facilisis vel at purus. Nunc ultrices, leo egestas ornare pellentesque
            </p>
        </div>
        <div className='w-1/2 h-full relative'>
          <div className='absolute top-0 right-0'>
          <Image src={foto1} alt='recamara' />
          </div>
          <div className='absolute top-0 left-0'>
          <Image src={foto2} alt='hamaca' />
          </div>
          <div className='absolute botton-0 right-4'>
          <Image src={foto3} alt='alberca' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs