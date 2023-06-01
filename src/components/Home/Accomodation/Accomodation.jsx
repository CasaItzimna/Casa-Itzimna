import Image from 'next/image'
import React from 'react'

function Accomodation() {
  return (
    <div>
        <div className='flex flex-row justify-cennter w-full h-full '>
            <div className='flex flex-col justify-center'>
                <h3>Accomodation</h3>
                <div className='flex flex-row justify-center w-[300px] h-full'>
                    <h4>unique spaces</h4>
                    <h4>luxure & comfort</h4>
                    <h4>gracious hospitality</h4>
                </div>
                <div className=''></div>
            </div>
            <div className='flex flex-col justify-center'>
                <div>
                    <Image  alt='1' />
                </div>
                <div className='flex flex-row '>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Accomodation