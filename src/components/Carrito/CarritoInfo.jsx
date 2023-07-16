import React from 'react'
import { useState } from 'react'
import bote from './icons/bote.png'
import experience from './img/experiencefoto.png'
import producto from './img/productoCarrito.png'
import masaje from './img/masaje.png'
import Image from 'next/image'

function CarritoInfo() {
  const [guest, setGuest] = useState("")
  return (
    <div className='w-full h-full flex flex-row justify-center bg-[#b4a692]'>
        {/*linea de tiempo*/}

        {/*Cart*/}
        <div className='bg-white w-[95%] lg:w-full h-full grid grid-cols-1 lg:grid-cols-2 mb-8 '>
                {/*Cart*/}
                <div className='w-full flex flex-col items-center '>
                  <div className='w-[90%] flex flex-col mb-2 border-b-[2px] border-b-[#b4a692]'>

                  
                <h1 className='font-apollo text-3xl tracking-[4px] mt-8 mb-4'>CART</h1>
                <h2 className='font-apollo text-xl tracking-[4px] mb-2 text-[#b4a692]'>BOOKING DATA</h2>
                <p className='font-apollo mb-1'>Nombre</p>
                <p className='font-apollo mb-1'>Tel</p>
                <p className='font-apollo mb-1'>Correo</p>
                <select
                  name="guest"
                  value={guest}
                  onChange={(e) => setPlan(e.target.value)}
                  className="border-[1px] w-[50%] py-1 border-[#b4a692] font-apollo text-gray-500"
                >
                  <option value="" className='font-apollo'>CHOOSE A PLAN</option>
                  <option value="option1" className='font-apollo'>Option 1</option>
                  <option value="option2" className='font-apollo'>Option 2</option>
                  <option value="option3" className='font-apollo'>Option 3</option>
                </select>
                <div className='w-[50%] flex flex-row gap-1 mt-4'>
                  <div className='w-1/2 border-[1px] h-[30px] border-[#b4a692] text-center'>check-in</div>
                  <div className='w-1/2 border-[1px] h-[30px] border-[#b4a692] text-center'>check-out </div>
                </div>
                <p className='text-right font-apollo mt-4'>PRICE FOR TOTAL NOCHES - NOMBRE PAQUETE</p>
                <p className='text-right font-apollo text-3xl mb-4'>$TOTAL USD</p>
                </div>
                
                <div className='w-[90%] flex flex-col mb-2 border-b-[2px] border-b-[#b4a692]'>
                  <h2 className='font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]'>nombre experiencia</h2>
                  <div className='w-full flex flex-row justify-between'>

                  <div className='flex flex-col'>

                  <h3 className='w-[90%] font-apollo uppercase tracking-[2px]'>Descripcion experiencia</h3>
                  <p className='text-[#31302c] mt-2  font-apollo w-[90%]'>*AT YOUR ARRIVING, PLEASE CONFIRM THE DATE OF THE SERVICE</p>
                  <div className='flex flex-row mt-2 justify-start'>

                  <Image src={bote} alt='basura' className=' mb-4' />
                  </div>
                  </div>
                  <div className='flex flex-col justify-center w-full'>
                  <Image src={experience} alt=''className='rounded-[2px]' />
                  <p className='text-right font-apollo text-3xl mt-4'>$300 USD</p>
                  </div>
                  </div>
                </div>
                <div className='w-[90%] flex flex-col mb-2 '>
                  <h2 className='font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]'>nombre producto</h2>
                  <div className='w-full flex flex-row justify-between'>

                  <div className='w-full flex flex-col'>

                  <h3 className=' font-apollo uppercase tracking-[2px]'>Descripcion producto</h3>
                  <p className='text-[#31302c] mt-2  font-apollo w-full'>*SET SHIPING AT PAYMENT</p>
                  <div className='flex flex-row mt-2 justify-start'>

                  <Image src={bote} alt='basura' className=' mb-4' />
                  </div>
                  </div>
                  <div className='flex flex-col justify-center items-center w-full'>
                  <Image src={producto} alt='producto foto' className='w-[50%]' />
                  </div>
                  </div>
                </div>
                </div>
            <div className='w-full flex flex-row justify-center'>
              <div className=' w-full flex flex-col items-center bg-white mt-8'>
                <div className='w-[90%] h-full flex flex-col  '>
                <h1 className='font-apollo text-3xl tracking-[4px] mt-8 mb-4 uppercase text-center'>Summary</h1>
                <div className='w-full flex flex-col items-center'>
                <div className='w-full h-full flex flex-row  justify-between border-b-[2px] border-[#b4a692] '>
                  <div className='h-full flex flex-col justify-between'>
                    <p className='font-apollo text-[#282828]'>SUBTOTAL</p>
                    <p className='font-apollo text-[#282828]'>TAX</p>
                  </div>
                  <div className='h-full flex flex-col text-right'>
                    <div>
                    <p className='font-apollo text-[#282828]'>$1,288 MXN</p>
                    <p className='font-apollo text-[#282828]'>$300 MXN</p>
                    <p className='font-apollo text-[#282828]'>$1,464 MXN</p>
                    </div>
                    <br />
                    <p className='font-apollo text-[#282828] mb-4'>$120 MXN</p>
                  </div>
                </div>
                <div className='w-full flex flex-row justify-between'>
                  <p className='font-apollo text-[#282828]'>TOTAL</p>
                  <p className='font-apollo text-[#282828]'>$3,172 MXN</p>
                </div>
                <button className='bg-black text-white uppercase w-full py-4 mt-4 font-Geometrica text-xl mb-4'>
                  Proceed to pay
                </button>
                </div>
                </div>

              </div>
            </div>
            <div className='w-full flex flex-row justify-center'>
              <div className='w-full flex flex-col items-center'>

              
              <Image src={masaje} alt='masaje' className='w-full h-[250px] object-cover'/>
              <div className='w-[90%] h-full flex flex-col items-center'>
                <h3 className='text-left uppercase font-apollo tracking-[4px] mt-4 text-2xl' >unforgettable experiences await</h3>
                <p className='text-justify font-PlayfairDisplay tracking-[2px] mt-4'>Make your visit an unparelleled journey by adding an experience to your cart.</p>
                <div className='w-full flex flex-row justify-start mt-4 mb-8'>

                <button className='uppercase w-[170px] bg-[#b4a692] rounded-[7px] text-xl py-1 font-Geometrica tracking-[2px]'>experiences</button>
                </div>
              </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default CarritoInfo