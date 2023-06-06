import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

import Image from "next/image";
import logo from "../assets/Logo/LOGOBLANCO.png";
import {BsTelephoneFill} from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLocationDot } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import location from '../assets/location.png'
import Link from "next/link";

function Footer() {
  return (
  
    <div className="w-full h-[500px] flex flex-col justify-center bg-[#31302c]">
      <div className=" flex flex-row justify-center ">
        <div className="flex flex-col w-1/3   ">
          <h3 className="font-cinzelBold text-2xl text-[#b4a692] mb-4">
            CONTACT
          </h3>
          <ul className="font-apollo text-white text-sm h-[150px]">
            <div className="cursor-pointer hover:text-[#b4a692]">

            <li className="flex flex-row "> <Image src={location} alt="location" className="h-[20px] w-[15px]"/> &nbsp; AVENIDA PÉREZ PONCE 120, </li>
            <li className="flex flex-row "><div className="w-[15px]"></div> &nbsp; COLONIA ITZIMNÁ 07100, MÉRIDA, YUCATÁN</li>
            </div>
            <li className="flex flex-row cursor-pointer hover:text-[#b4a692]"><BsTelephoneFill className="text-[#b4a692]"/> &nbsp;+52 55 2879 4515</li>
            <li className="flex flex-row cursor-pointer hover:text-[#b4a692]"><HiOutlineMail className="text-[#b4a692]"/> &nbsp;CONTACTO@CASAITZIMNA.COM</li>
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
            <li className="cursor-pointer hover:text-[#b4a692]"> <Link href='/about'>ABOUT US</Link></li>
            <li className="cursor-pointer hover:text-[#b4a692]"><Link href='/house'>HOUSE</Link></li>
            <li className="cursor-pointer hover:text-[#b4a692]"><Link href='/spaces'>SPACES</Link></li>
            <li className="cursor-pointer hover:text-[#b4a692]"><Link href='/experience'>EXPERIENCE</Link></li>
            <li className="cursor-pointer hover:text-[#b4a692]"><Link href='/boutique'>BOUTIQUE</Link></li>
            <li className="cursor-pointer hover:text-[#b4a692]"><Link href='/contact'>CONTACT</Link></li>
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
          <ul className="font-apollo text-white text-sm h-[50px] flex flex-col items-end ">
            <li className="flex flex-row cursor-pointer hover:text-[#b4a692]">CASA ITZIMNÁ BOUTIQUE &nbsp; <FaFacebookF className="text-[#b4a692]"/></li>
            <li className="flex flex-row cursor-pointer hover:text-[#b4a692]">CASAITZIMNÁ_BOUTIQUE &nbsp; <AiOutlineInstagram className="text-[#b4a692]"/></li>
          </ul>
          <div className="w-full h-[2px] bg-[#b4a692] mb-4" />
          <div className="uppercase flex flex-row w-full font-apollo text-white  ">
          Made by &nbsp; <span className="text-[#b4a692] cursor-pointer hover:text-white">jaizmora digital media</span>
          </div>
        </div>
      </div>
     

      
    </div>
  );
}

export default Footer;
