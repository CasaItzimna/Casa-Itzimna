import React from 'react'

export default function TimeLine() {
  return (
    <div className='w-full h-[100px] flex flex-row justify-center bg-[#d3cbc0]'>
        <div className='h-full w-[80%] lg:w-[60%] flex flex-col justify-center '>
            <div className='h-[2px] bg-gradient-to-r from-black from-15% to-[#282828]/40 to-85% relative'>
                <div className='w-full absolute -top-[25px]'>
                    <div className='w-full flex flex-row justify-around relative'>
                        
                        
                    <div className='w-1/3 flex flex-col items-center'>
                        <p className='text-sm font-Geometrica'>CART</p>
                    <div className='w-[15px] h-[15px] rounded-full bg-[#282828]'></div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center'>
                        <p className='text-sm font-Geometrica'>PAYMENT</p>
                    <div className='w-[15px] h-[15px] rounded-full bg-[#282828]/40 '></div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center'>
                        <p className='text-sm font-Geometrica'>CONFIRMATION</p>
                    <div className='w-[15px] h-[15px] rounded-full bg-[#282828]/40 '></div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}
