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
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-2 lg:mb-4">
            CONTACT
          </h3>
          <ul className="font-apollo text-white text-center text-sm h-[150px]">
          <a href='https://goo.gl/maps/GzpqxsC24WFuUFZS9' target="_blank">
            <div className="cursor-pointer py-2 text-md lg:text-lg hover:text-[#b4a692]">

            <li className="flex flex-row justify-center lg:justify-start "> <Image src={location} alt="location" className="hidden lg:flex h-[20px] w-[15px] "/> &nbsp; AVENIDA PÉREZ PONCE 120, </li>
            <li className="flex flex-row justify-center lg:justify-start lg:text-left">COLONIA ITZIMNÁ 07100, MÉRIDA, YUCATÁN</li>
            </div>
            </a>
            <a href='tel:+525528794515'>
            <li className="flex flex-row lg:py-0  text-lg justify-center lg:justify-start cursor-pointer hover:text-[#b4a692]"><BsTelephoneFill className="hidden lg:flex text-[#b4a692]"/> &nbsp;+52 55 2879 4515</li>
            </a>
            <a href='mailto:CASAITZIMNA@HOTELBOUTIQUE.COM'>
            <li className="flex flex-row  text-md lg:text-lg justify-center lg:justify-start cursor-pointer hover:text-[#b4a692] "><HiOutlineMail className="hidden lg:flex text-[#b4a692]"/> &nbsp;CONTACTO@CASAITZIMNA.COM</li>
            </a>
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
            <li className="cursor-pointer  hover:text-[#b4a692]"> <Link href='/AboutUs'>{json.Footer.option1}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/House'>{json.Footer.option2}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/Experience'>{json.Footer.option3}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/Spaces'>{json.Footer.option4}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/Boutique'>{json.Footer.option5}</Link></li>
            <li className="cursor-pointer  hover:text-[#b4a692]"><Link href='/Contact'>{json.Footer.option6}</Link></li>
          </ul>
          <div className="hidden lg:flex w-full h-[2px] bg-[#b4a692]" />
        </div>
        </div>
        
        <div className=" flex flex-col text-center lg:text-right mt-4 lg:mt-0 ">
          <div className="flex flex-row justify-center lg:justify-end">
            <Image src={logo} alt="logo" className="w-[100px] h-[100px] " />
          </div>
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mt-2 lg:mt-0 mb-2">
            GET SOCIAL
          </h3>
          <ul className="font-apollo text-white text-sm h-[50px] flex flex-row justify-center gap-4 lg:gap-0 lg:flex-col lg:justify-normal items-center lg:items-end mb-2 ">
            <li className="flex flex-row cursor-pointer text-lg hover:text-[#b4a692]"><span className="hidden lg:flex">CASA ITZIMNÁ BOUTIQUE &nbsp;</span> <FaFacebookF className="text-[#b4a692] mt-1 text-4xl lg:text-sm"/></li>
            <li className="flex flex-row cursor-pointer text-lg hover:text-[#b4a692] "><span className="hidden lg:flex">CASAITZIMNÁ_BOUTIQUE &nbsp;</span> <AiOutlineInstagram className="text-[#b4a692] mt-1 text-5xl lg:text-sm"/></li>
          </ul>
          <div className="hidden lg:flex w-full h-[2px] bg-[#b4a692] mb-4" />
          <div className="uppercase hidden lg:flex flex-row w-full font-apollo text-white  ">
          Made by &nbsp; 
          <a href='https://www.jaizmora.com'  target="_blank">
          <span className="text-[#b4a692] cursor-pointer hover:text-white">jaizmora digital media</span>
          </a>
          </div>
        </div>
      </div>
     

      
    </div>
    :
    null
      
  
    
  );
}

export default Footer;
