import Image from 'next/image'
import React from 'react'
import experience1 from './Enchanting-Evening.jpg'
import experience2 from './Unveiling-Wonders.jpg'
import experience3 from './Spaserenity.jpg'
import experience4 from './Culinary-Delights.jpg'
import 	captivating from './captivating-1.jpg'
import 	lobby from './captivating-2.jpg'
import Link from 'next/link'

function Experiences({json}) {
    console.log(json.Experiences.Experiences1)
  return (
    <div className='w-full h-full  relative'>
                <div className="hidden h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>
    <div className='flex flex-row justify-center'>
        <div className='w-[53%] md:w-[62%] h-full flex flex-col justify-start z-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 '>
                <div className='w-[250px] relative '> 
                <div className='bg-black/50 absolute top-0 w-full h-full'></div>
                <Image src={experience1} alt='experience1' className='w-full h-[200px] lg:h-full object-cover'/>
                <div>

                <h4 className='absolute text-center lg:text-left text-white text-2xl lg:text-4xl font-apollo tracking-[8px] lg:w-[80px] lg:h-[20px] bottom-[30%] left-[0%] lg:bottom-[50px]  lg:-left-[20px] lg:-rotate-90 '>{json.Experiences.Experiences1}</h4>
                </div>
                </div>
                <div className='w-[250px] relative'> 
                <div className='bg-black/50 absolute top-0 w-full h-full'></div>
                <Image src={experience2} alt='experience1' className='w-full h-[200px] lg:h-full object-cover'/>
                <div>

                <h4 className='absolute text-center lg:text-left text-white text-2xl lg:text-4xl font-apollo tracking-[8px] lg:w-[80px] lg:h-[20px] bottom-[30%] left-[0%] lg:bottom-[50px]  lg:-left-[20px] lg:-rotate-90 '>{json.Experiences.Experiences2}</h4>
                </div>
                </div>
                <div className='w-[250px] relative'> 
                <div className='bg-black/50 absolute top-0 w-full h-full'></div>
                <Image src={experience3} alt='experience1' className='w-full h-[200px] lg:h-full object-cover'/>
                <div>

                <h4 className='absolute text-center lg:text-left text-white text-2xl lg:text-4xl font-apollo tracking-[8px] lg:w-[80px] lg:h-[20px] bottom-[40%] left-[5%] lg:bottom-[50px]  lg:-left-[20px] lg:-rotate-90 '>{json.Experiences.Experiences3}</h4>
                </div>
                </div>
                <div className='w-[250px] relative'> 
                <div className='bg-black/50 absolute top-0 w-full h-full'></div>
                <Image src={experience4} alt='experience1' className='w-full h-[200px] lg:h-full object-cover'/>
                <div>

                <h4 className='absolute text-center lg:text-left text-white text-2xl lg:text-4xl font-apollo tracking-[8px] lg:w-[80px] lg:h-[20px] bottom-[30%] left-[0%] lg:bottom-[50px]  lg:-left-[20px] lg:-rotate-90 '>{json.Experiences.Experiences4}</h4>
                </div>
                </div>
            </div>
           
        </div>

    </div>
    <div className='w-full h-full flex flex-col lg:mt-8 justify-center'>
                <div className='w-full  flex flex-col-reverse lg:flex-row lg:justify-center gap-4 h-full lg:h-[350px]'>
                    <div className=' lg:w-[60%] gap-4 flex flex-col items-center lg:flex-row justify-center mb-8 lg:mb-0 '>
                        <div className='flex flex-col items-center lg:items-start my-8 lg:my-0 lg:w-[27%]'>
                            
                        <h4 className='font-apollo  w-[60%] lg:w-[150px] text-2xl tracking-[6px] text-center lg:text-left '>
                            {json.Experiences.Captivating}
                        </h4>
                        <p className='w-[90%] md:w-[60%] lg:w-full font-PlayfairDisplay text-justify tracking-[2px] mt-4'>
                            {json.Experiences.CaptivatingText}
                        </p>
                        <button className='font-Geometrica bg-[#d3cbc0] w-[150px] py-1 rounded-[7px] tracking-[4px] mt-4 mb-8 lg:mb-0'>
                            <Link href="/Spaces">
                            {json.Experiences.ButtonText}
                            </Link>
                        </button>
                   </div>
                    <div  className='hidden lg:flex w-[26%] h-[270px] '>
                        <Image src={captivating} alt='captivating img' className='w-full h-full object-cover'/>
                    </div>
                    <div className='  w-[350px] md:w-[60%] lg:w-[47%]  h-[270px]'>
                        <Image src={lobby} alt='lobby img' className='w-full h-full object-cover '/>
                    </div>
                    
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Experiences