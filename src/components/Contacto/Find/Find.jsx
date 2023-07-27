import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Find({json}) {
  return (
    <div className='w-full h-full flex flex-row justify-center'>
        <div className='flex flex-col justify-center text-center'>
            <h3 className='text-4xl md:text-5xl font-apollo text-center tracking-[8px] mb-4 mt-8'>{json.Contact.FindTittle}</h3>
            <div className='flex flex-col lg:flex-row justify-center gap-8'>
                <div className='flex flex-col text-center'>
                    <h4 className='text-xl font-apollo text-center tracking-[4px] uppercase mb-4'>{json.Contact.Business}</h4>
                    <p className=' font-apollo tracking-[2px]'>{json.Contact.BusinessDays}</p>
                    <p className=' font-apollo tracking-[2px]'>10:00 - 20:00 (GMT-6)</p>
                </div>
                <div className='flex flex-col text-center'>
                    <h4 className='text-xl font-apollo text-center tracking-[4px] uppercase mb-4'>{json.Contact.OurContact}</h4>
                    <a href='tel:+525528794515'>
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><BsTelephoneFill className="hidden lg:flex text-[#d3cbc0]"/> +52 55 2879 4515</p>
                    </a>
                    <a href='mailto:CASAITZIMNA@HOTELBOUTIQUE.COM'>
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><HiOutlineMail className="hidden lg:flex text-[#d3cbc0]"/> CASAITZIMNA@HOTELBOUTIQUE.COM</p>
                    </a>
                </div>
                <div className='flex flex-col text-center'>
                    <h4 className='text-xl font-apollo text-center tracking-[4px] uppercase mb-4'>{json.Contact.Social}</h4>
                    <div className='flex flex-row lg:flex-col justify-center lg:justify-normal gap-4'>

                    <a href="https://www.facebook.com/CasaItzimnaboutique" target="_blank">
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><FaFacebookF className="text-[#d3cbc0] mt-1 text-4xl lg:text-sm"/><span className='hidden lg:flex'>CASA ITZIMNÁ BOUTIQUE</span></p>
                    </a>
                    <a href="https://www.instagram.com/CasaItzimnaboutique" target="_blank">
                    <p className='flex flex-row gap-2 justify-center font-apollo tracking-[2px]'><AiOutlineInstagram className="text-[#d3cbc0] text-5xl lg:text-sm md:mt-1"/><span  className='hidden lg:flex'>CASAITZIMNA_BOUTIQUE</span></p>
                    </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Find