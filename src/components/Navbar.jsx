import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logo/LOGOBLANCO.png";
import { AppContext } from "@/context/StateContext";
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';

function Navbar() {
  const { idioma, setIdioma } = AppContext();
  console.log(idioma);
  const json = idioma === 'espanol' ? esJson : enJson;

  return (
    <div className="w-full h-full flex flex-col items-center">

    
    <div className="h-[150px] max-w-[1920px] w-full absolute top-20 z-20 flex flex-row justify-around  font-apollo">
      <div className="flex flex-col">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-[150px] object-cover cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center text-white w-[50%]">
        <div className="flex flex-row justify-center text-2xl text-center items-center mb-2">
          <span
            className={`mr-4 ${
              idioma === "espanol" ? "border-[1px] rounded-full px-2 py-1" : ""
            } cursor-pointer hover:text-[#b4a692]`}
            onClick={() => setIdioma("espanol")}
          >
            ES
          </span>
          <span
            className={`mr-4  ${
              idioma === "ingles" ? "border-[1px] rounded-full px-2 py-1" : ""
            } cursor-pointer hover:text-[#b4a692]`}
            onClick={() => setIdioma("ingles")}
          >
            EN
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="flex flex-row text-center gap-20 text-xl">
            <li className="cursor-pointer hover:text-[#b4a692]  tracking-[6px]">
              <Link href="/">{json.Navbar.option1}</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]">
              <Link href="/AboutUs">{json.Navbar.option2}</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]">
              <Link href="/House">{json.Navbar.option3}</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]">
              <Link href="/Experience">{json.Navbar.option4}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="flex flex-row text-center gap-20 text-xl mt-2">
            <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]">
              <Link href="/Spaces">{json.Navbar.option5}</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]">
              <Link href="/Boutique">{json.Navbar.option6}</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]">
              <Link href="/Contact">{json.Navbar.option7}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button className="border-2 border-white rounded-md text-white w-[120px] h-[35px] text-xl flex flex-col justify-center items-center">
          <Link href="/Login">LOG IN</Link>
        </button>
        <button className="bg-[#b4a692] rounded-md text-black w-[120px] h-[30px] mt-2 text-xl">
          <Link href="/Booking">BOOK NOW</Link>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
