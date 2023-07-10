import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Find({json}) {
  return (
    <div className='w-full h-full flex flex-row justify-center'>
        <div className='flex flex-col justify-center text-center'>
            <h3>{json.Contact.FindTittle}</h3>
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col text-center'>
                    <h4 className=''>{json.Contact.Business}</h4>
                    <p className=''>{json.Contact.BusinessDays}</p>
                    <p className=''>10:00 - 20:00 (GMT-6)</p>
                </div>
                <div className='flex flex-col text-center'>
                    <h4 className=''>{json.Contact.OurContact}</h4>
                    <p className='flex flex-row gap-2 justify-center'><BsTelephoneFill className="hidden lg:flex text-[#b4a692]"/> &nbsp;+52 55 2879 4515</p>
                    <p className='flex flex-row gap-2 justify-center'><HiOutlineMail className="hidden lg:flex text-[#b4a692]"/> &nbsp;CASAITZIMNA@HOTELBOUTIQUE.COM</p>
                </div>
                <div className='flex flex-col text-center'>
                    <h4 className=''>{json.Contact.Social}</h4>
                    <p className='flex flex-row gap-2 justify-center'><FaFacebookF className="text-[#b4a692] mt-1"/>CASA ITZIMNÁ BOUTIQUE</p>
                    <p className='flex flex-row gap-2 justify-center'><AiOutlineInstagram className="text-[#b4a692] mt-1"/>CASAITZIMNA_BOUTIQUE</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Find