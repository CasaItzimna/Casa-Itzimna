import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logo/LOGOBLANCO.png";
import { AppContext } from "@/context/StateContext";

function Navbar() {
  const { idioma, setIdioma } = AppContext();
  console.log(idioma);

  return (
    <div className="h-[150px] w-full absolute top-20 z-30 flex flex-row justify-center gap-10 font-apollo">
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
            className={`mr-4 ${
              idioma === "ingles" ? "border-[1px] rounded-full px-2 py-1" : ""
            } cursor-pointer hover:text-[#b4a692]`}
            onClick={() => setIdioma("ingles")}
          >
            EN
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="flex flex-row text-center gap-20 text-xl">
            <li className="cursor-pointer hover:text-[#b4a692]">
              <Link href="/">HOME</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692]">
              <Link href="/AboutUs">ABOUT US</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692]">
              <Link href="/House">HOUSE</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692]">
              <Link href="/Experience">EXPERIENCE</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="flex flex-row text-center gap-20 text-xl mt-2">
            <li className="cursor-pointer hover:text-[#b4a692]">
              <Link href="/Spaces">SPACES</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692]">
              <Link href="/Boutique">BOUTIQUE</Link>
            </li>
            <li className="cursor-pointer hover:text-[#b4a692]">
              <Link href="/Contact">CONTACT</Link>
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
  );
}

export default Navbar;
