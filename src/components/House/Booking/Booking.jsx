import React from 'react'

function Booking({json}) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full max-w-[1920px] flex flex-row justify-center'>
            <div className='w-[50%] flex flex-col '>
                <h3 className='text-4xl font-cinzelBold tracking-[2px]'>{json.Booking.title}</h3>
                <form>

                </form>
            </div>
            <div className='w-[50%] flex flex-col'>

            </div>
        </div>

    </div>
  )
}

export default Booking