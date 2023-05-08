import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

function Footer() {
  return (
    <div className='w-full h-full flex flex-row justify-center bg-gray-900'>
       
        <div className=' h-full flex flex-col '>
            <h3>Acerca de Casa ITZIMNÁ</h3>
            <p className='w-[350px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi et possimus laudantium ullam, ad molestiae amet. Laborum sunt quam porro iste, quod facere, quidem adipisci, esse quisquam molestias est rem?</p>
        </div>
        <div className=' h-full flex flex-col'>
            <h3>Explore</h3>
            <ul>
                <li>Nosotros</li>
                <li>Habitaciones</li>
                <li>Restaurante</li>
                <li>Boutique</li>
                <li>Facturación</li>
                <li>Contacto</li>
            </ul>
        </div>
        <div className=' h-full flex flex-col'>
    <h3>Contact</h3>
    <p>Merida, Yucatán</p>
    <p>México</p>
    <span>Telefono</span> 55 2345 6987
    <a href='mailto:""' className='underlined'>info@casaItzimna.com</a>
    <div className='flex flex-row justify-start'>
    <BsInstagram/>
    <BsFacebook/>
    <BsWhatsapp/>
    </div>
</div>

    </div>
  )
}

export default Footer