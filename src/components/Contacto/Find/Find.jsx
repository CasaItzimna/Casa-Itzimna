import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Find({json}) {
  return (
    <div className='w-full h-full flex flex-row justify-center'>
        <div className='flex flex-col justify-center text-center'>
            <h3 className='text-4xl font-apollo text-center tracking-[8px] mb-4 mt-8'>{json.Contact.FindTittle}</h3>
            <div className='flex flex-col lg:flex-row justify-center gap-8'>
                <div className='flex flex-col text-center'>
                    <h4 className='text-xl font-apollo text-center tracking-[4px] uppercase mb-4'>{json.Contact.Business}</h4>
                    <p className=' font-apollo tracking-[2px]'>{json.Contact.BusinessDays}</p>
                    <p className=' font-apollo tracking-[2px]'>10:00 - 20:00 (GMT-6)</p>
                </div>
                <div className='flex flex-col text-center'>
                    <h4 className='text-xl font-apollo text-center tracking-[4px] uppercase mb-4'>{json.Contact.OurContact}</h4>
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><BsTelephoneFill className="hidden lg:flex text-[#b4a692]"/> +52 55 2879 4515</p>
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><HiOutlineMail className="hidden lg:flex text-[#b4a692]"/> CASAITZIMNA@HOTELBOUTIQUE.COM</p>
                </div>
                <div className='flex flex-col text-center'>
                    <h4 className='text-xl font-apollo text-center tracking-[4px] uppercase mb-4'>{json.Contact.Social}</h4>
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><FaFacebookF className="text-[#b4a692] mt-1"/>CASA ITZIMNÁ BOUTIQUE</p>
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><AiOutlineInstagram className="text-[#b4a692] mt-1"/>CASAITZIMNA_BOUTIQUE</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Find