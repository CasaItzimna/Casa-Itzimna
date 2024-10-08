import React from 'react'

function Error({json}) {
    return (
        <div className='w-full flex flex-row justify-center bg-[#d3cbc0] '>
            <div className='w-[90%] xl:w-[80%] h-[60vh]  2xl:h-[40vh] flex flex-col  items-center bg-white mb-8'>
                <div className='w-[90%] h-full flex flex-col '>
                    <div className='w-full h-full flex flex-col justify-start lg:justify-center items-center'>
    
                    <h2 className='text-center font-apollo tracking-[8px] text-5xl mt-8 mb-8'>{json.Error.payment}</h2>
                    <p className='text-center font-apollo tracking-[2px] uppercase'>{json.Error.apologize}</p>
                    <p className='text-center font-apollo tracking-[2px] uppercase mt-4'>{json.Error.meantime}<span className='uppercase text-[#d3cbc0]'>Contacto@CASAITZIMNÁ.com</span></p>
                    <p className='text-center font-apollo tracking-[2px] mt-8'>{json.Confirmation.regards} </p>
                <p className='text-center font-apollo tracking-[2px] mb-8'>CASA ITZIMNÁ </p>
                
                    </div>
                    
    
                </div>
            </div>
        </div>
      )
}

export default Error