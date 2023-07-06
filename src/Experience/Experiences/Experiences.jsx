import Image from 'next/image'
import React from 'react'
import experience1 from './experience1.png'
import experience2 from './experience2.png'
import experience3 from './experience3.png'
import experience4 from './experience4.png'
import 	captivating from './captivating.png'
import 	lobby from './lobby.png'

function Experiences({json}) {
    console.log(json.Experiences.Experiences1)
  return (
    <div className='w-full h-full  relative'>
                <div className="h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>
    <div className='flex flex-row justify-center'>
        <div className='w-[53%] h-[1000px] flex flex-col justify-start z-10'>
            <div className='grid grid-cols-4 place-items-center gap-4'>
                <div className='w-[250px] relative'> 
                <Image src={experience1} alt='experience1' className='w-full h-full object-cover'/>
                <h4 className='absolute text-white text-4xl font-apollo tracking-[8px] w-[80px] h-[20px] bottom-[50px]  -left-[20px] -rotate-90 '>{json.Experiences.Experiences1}</h4>
                </div>
                <div className='w-[250px] relative'> 
                <Image src={experience2} alt='experience2' className='w-full h-full object-cover'/>
                <h4 className='absolute text-white text-4xl font-apollo tracking-[8px] w-[80px] h-[20px] bottom-[50px]  -left-[20px] -rotate-90 '>{json.Experiences.Experiences2}</h4>
                </div>
                <div className='w-[250px] relative'> 
                <Image src={experience3} alt='experience3' className='w-full h-full object-cover'/>
                <h4 className='absolute text-white text-4xl font-apollo tracking-[8px] w-[80px] h-[20px] bottom-[50px]  -left-[20px] -rotate-90 '>{json.Experiences.Experiences3}</h4>
                </div>
                <div className='w-[250px] relative'> 
                <Image src={experience4} alt='experience4' className='w-full h-full object-cover'/>
                <h4 className='absolute text-white text-4xl font-apollo tracking-[8px] w-[80px] h-[20px] bottom-[50px]  -left-[20px] -rotate-90 '>{json.Experiences.Experiences4}</h4>
                </div>
            </div>
            <div className='w-full h-full flex flex-col justify-center'>
                <div className='flex flex-row gap-4 h-[350px]'>
                    <div className='w-[27%]'>
                        <h4 className='font-apollo w-[150px] text-2xl tracking-[6px] '>
                            {json.Experiences.Captivating}
                        </h4>
                        <p className='font-PlayfairDisplay text-justify tracking-[2px] mt-4'>
                            {json.Experiences.CaptivatingText}
                        </p>
                        <button className='font-Geometrica bg-[#b4a692] w-[150px] py-1 rounded-[7px] tracking-[4px] mt-4'>
                            {json.Experiences.ButtonText}
                        </button>
                    </div>
                    <div  className='w-[26%] h-[270px]'>
                        <Image src={captivating} alt='captivating img' className='w-full h-full object-cover'/>
                    </div>
                    <div className='w-[47%] h-[270px]'>
                        <Image src={lobby} alt='lobby img' className='w-full h-full object-cover'/>
                    </div>
               
                </div>

            </div>
        </div>

    </div>
    </div>
  )
}

export default Experiences