import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useRouter } from 'next/router';

import Image from "next/image";
import logo from "../assets/Logo/LOGOBLANCO.png";
import {BsTelephoneFill} from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLocationDot } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import location from '../assets/location.png'
import Link from "next/link";
import { AppContext } from "@/context/StateContext";
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';

function Footer() {
  const { idioma, setIdioma } = AppContext();
  const json = idioma === 'espanol' ? esJson : enJson;

  const router = useRouter();
  console.log(router.pathname)
  const isDashboardPage = router.pathname === '/Dashboard';
  const isDashboardComponentPage = router.pathname === '/Dashboard/[_component]';
  console.log(isDashboardComponentPage)


  return (
  
  
    !isDashboardPage && !isDashboardComponentPage?
  

    <div className="w-full h-full lg:h-[500px]  flex flex-col justify-center bg-[#31302c] ">
      <div className=" flex flex-col-reverse lg:flex-row  justify-center  ">
       
       
        <div className="h-full flex flex-col mb-4 lg:mb-0  lg:w-1/4  text-center lg:text-start   ">
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-4">
            CONTACT
          </h3>
          <ul className="font-apollo text-white text-center text-sm h-[150px]">
            <div className="cursor-pointer py-2 text-lg hover:text-[#b4a692]">

            <li className="flex flex-row justify-center lg:justify-start "> <Image src={location} alt="location" className="hidden lg:flex h-[20px] w-[15px] "/> &nbsp; AVENIDA PÉREZ PONCE 120, </li>
            <li className="flex flex-row justify-center lg:justify-start lg:text-left">COLONIA ITZIMNÁ 07100, MÉRIDA, YUCATÁN</li>
            </div>
            <li className="flex flex-row lg:py-0  text-lg justify-center lg:justify-start cursor-pointer hover:text-[#b4a692]"><BsTelephoneFill className="hidden lg:flex text-[#b4a692]"/> &nbsp;+52 55 2879 4515</li>
            <li className="flex flex-row  text-lg justify-center lg:justify-start cursor-pointer hover:text-[#b4a692] "><HiOutlineMail className="hidden lg:flex text-[#b4a692]"/> &nbsp;CONTACTO@CASAITZIMNA.COM</li>
          </ul>
          <div className="hidden lg:flex w-full h-[2px] bg-[#b4a692] mb-4" />
          <div className="uppercase hidden lg:flex flex-col w-full font-apollo text-white ">
          copyright all rights reserved - casa itzimná hotel boutique
        </div>
        </div>
       
        <div className="w-full lg:w-1/5 flex flex-row justify-center lg:justify-start">

        
        <div className="hidden lg:flex flex-col w-full text-center lg:text-start  ">
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-4">
            PAGES
          </h3>
          <ul className="font-apollo text-white text-sm text-center lg:w-1/4 lg:text-start h-[150px]">
            <li className="cursor-pointer  hover:text-[#b4a692]"> <Link href='/about'>{json.Footer.option1}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/house'>{json.Footer.option2}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/spaces'>{json.Footer.option3}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/experience'>{json.Footer.option4}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/boutique'>{json.Footer.option5}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/contact'>{json.Footer.option6}</Link></li>
          </ul>
          <div className="hidden lg:flex w-full h-[2px] bg-[#b4a692]" />
        </div>
        </div>
        
        <div className=" flex flex-col text-center lg:text-right mt-4 lg:mt-0 ">
          <div className="flex flex-row justify-center lg:justify-end">
            <Image src={logo} alt="logo" className="w-[100px] h-[100px] " />
          </div>
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-2">
            GET SOCIAL
          </h3>
          <ul className="font-apollo text-white text-sm h-[50px] flex flex-col items-center lg:items-end mb-2 ">
            <li className="flex flex-row cursor-pointer text-lg hover:text-[#b4a692]">CASA ITZIMNÁ BOUTIQUE &nbsp; <FaFacebookF className="text-[#b4a692] mt-1"/></li>
            <li className="flex flex-row cursor-pointer text-lg hover:text-[#b4a692] ">CASAITZIMNÁ_BOUTIQUE &nbsp; <AiOutlineInstagram className="text-[#b4a692] mt-1"/></li>
          </ul>
          <div className="hidden lg:flex w-full h-[2px] bg-[#b4a692] mb-4" />
          <div className="uppercase hidden lg:flex flex-row w-full font-apollo text-white  ">
          Made by &nbsp; <span className="text-[#b4a692] cursor-pointer hover:text-white">jaizmora digital media</span>
          </div>
        </div>
      </div>
     

      
    </div>
    :
    null
      
  
    
  );
}

export default Footer;
