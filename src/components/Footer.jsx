import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

import Image from "next/image";
import logo from "../assets/Logo/LOGOBLANCO.png";

function Footer() {
  return (
    /* <div className='w-full h-full flex flex-row justify-center bg-black text-white '>
       
        <div className=' h-full flex flex-col w-[500px]  '>
           

        <Image className='w-[75px] text-center ' src={logo} alt='logo'/>
            

            <h3>Acerca de Casa ITZIMNÁ</h3>
            <p className='w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi et possimus laudantium ullam, ad molestiae amet. Laborum sunt quam porro iste, quod facere, quidem adipisci, esse quisquam molestias est rem?</p>
        </div>
        <div className=' w-[200px] h-full flex flex-col'>
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
        <div className=' w-[200px] h-full flex flex-col'>
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

    </div> */
    <div className="w-full h-[500px] flex flex-col justify-center bg-[#31302c]">
      <div className=" flex flex-row justify-center ">
        <div className="flex flex-col w-1/3   ">
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-4">
            CONTACT
          </h3>
          <ul className="font-apollo text-white text-sm h-[150px]">
            <li>AVENIDA PÉREZ PONCE 120,</li>
            <li>COLONIA ITZIMNÁ 07100, MÉRIDA, YUCATÁN</li>
            <li>+52 55 2879 4515</li>
            <li>CONTACTO@CASAITZIMNA.COM</li>
          </ul>
          <div className="w-full h-[2px] bg-[#b4a692] mb-4" />
          <div className="uppercase flex flex-col w-full font-apollo text-white ">
          copyright all rights reserved - casa itzimná hotel boutique
        </div>
        </div>
        <div className="flex flex-col w-1/4 ">
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-4">
            PAGES
          </h3>
          <ul className="font-apollo text-white text-sm h-[150px]">
            <li>ABOUT US</li>
            <li>HOUSE</li>
            <li>SPACES</li>
            <li>EXPERIENCE</li>
            <li>BOUTIQUE</li>
            <li>CONTACT</li>
          </ul>
          <div className="w-full h-[2px] bg-[#b4a692]" />
        </div>
        <div className="flex flex-col text-right ">
          <div className="flex flex-row justify-end">
            <Image src={logo} alt="logo" className="w-[100px] h-[100px] " />
          </div>
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-4">
            GET SOCIAL
          </h3>
          <ul className="font-apollo text-white text-sm h-[50px]">
            <li>CASA ITZIMNÁ BOUTIQUE</li>
            <li>CASAITZIMNÁ_BOUTIQUE</li>
          </ul>
          <div className="w-full h-[2px] bg-[#b4a692] mb-4" />
          <div className="uppercase flex flex-row w-full font-apollo text-white  ">
          Made by &nbsp; <span className="text-[#b4a692]">jaizmora digital media</span>
          </div>
        </div>
      </div>
     

      <div className="flex flex-row justify-center text-white font-apollo ">
       
        <div className="flex flex-col w-1/4">

        </div>
        
      </div>
    </div>
  );
}

export default Footer;
