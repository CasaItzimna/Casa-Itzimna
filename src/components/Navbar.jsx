import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logo/LOGOBLANCO.png";
import { AppContext } from "@/context/StateContext";
import esJson from "../assets/JSON/es.json";
import enJson from "../assets/JSON/en.json";
import carrito from "../assets/Icons/carrito.png";
import menu from "../assets/Icons/menu.png";
import logomovil from '../assets/Logo/logomenumov.png'
import close from '../assets/Icons/x.png'
import carritocafe from '../assets/Icons/carritocafe.png'
import emailcafe from '../assets/Icons/emailcafe.png'
import fbcafe from '../assets/Icons/fbcafe.png'
import igcafe from '../assets/Icons/igcafe.png'
import telefonocafe from '../assets/Icons/telefonocafe.png'
import { useEffect } from "react";
import CalendarioModal from './Home/Modal/CalendarioModal';


function Navbar() {

  const {setShowModalCalendar, showModalCalendar} = AppContext()

  const [modalOpen, setModalOpen] = useState(false);
    const [slug, setSlug] = useState('');
  
    const openModal = () => {
        console.log('entre')
      setModalOpen(true);
      
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    
  const [active, setActive] = useState(false);
  console.log(active)

  const { idioma, setIdioma } = AppContext();
  console.log(idioma);
  const json = idioma === "espanol" ? esJson : enJson;


  return (
    <Fragment>
      <div className="w-full h-full hidden lg:flex flex-col items-center">
        <div className="h-[150px] max-w-[1920px] w-full absolute top-20 z-20 flex flex-row justify-around  font-apollo">
          <div className="flex flex-col">
            z
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
                  idioma === "espanol"
                    ? "border-[1px] rounded-full px-2 py-1"
                    : ""
                } cursor-pointer hover:text-[#b4a692]`}
                onClick={() => setIdioma("espanol")}
              >
                ES
              </span>
              <span
                className={`mr-4  ${
                  idioma === "ingles"
                    ? "border-[1px] rounded-full px-2 py-1"
                    : ""
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
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/AboutUs">{json.Navbar.option2}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/House">{json.Navbar.option3}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Experience">{json.Navbar.option4}</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-center">
              <ul className="flex flex-row text-center gap-20 text-xl mt-2">
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Spaces">{json.Navbar.option5}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Boutique">{json.Navbar.option6}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
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

      <div className={showModalCalendar === false ?"lg:hidden flex flex-row justify-between absolute top-10  z-20 w-full text-white ": "hidden"}>
      <Link href="/Carrito">
        <Image
          src={carrito}
          alt="menu movil"
          className={!active ? "flex w-[40px] ml-4 cursor-pointer" : "hidden"}
        />
        </Link>
        <Image
          src={menu}
          alt="menu movil"
          className={!active ? "flex w-[40px] mr-4 cursor-pointer" : "hidden"}
          onClick={()=>setActive(true)}
        />
      </div>
      <div className={active ? "flex flex-col w-full  absolute top-0 bg-white z-30 " : "hidden"}>
          <div className="w-full h-[180px] flex flex-row justify-center relative">
            <Image src={close} alt="close menu movil"
             onClick={()=>setActive(false)}
              className="w-[30px] absolute top-10 right-4 cursor-pointer"/>
               
            <Image src={logomovil} alt="logo menu movil" className="w-[60%] absolute top-[80px] sm:top-[30%] md:top-[10%] "/>
            
          </div>
          <div>
          <ul className="flex flex-col text-center gap-3 text-xl font-Geometrica">
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/">{json.Navbar.option1}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/AboutUs">{json.Navbar.option2}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/House">{json.Navbar.option3}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Experience">{json.Navbar.option4}</Link>
                </li>
               
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Spaces">{json.Navbar.option5}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Boutique">{json.Navbar.option6}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#b4a692] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Contact">{json.Navbar.option7}</Link>
                </li>
              </ul>
          </div>
          <div className="w-full flex flex-row justify-center gap-2 mt-4">
                <button className="tracking-[2px] border-[1px] border-[#31302c] font-Geometrica text-[#31302c] px-4 text-lg"><Link href="/Login">LOG IN</Link></button>
                <button className="tracking-[2px] bg-[#30302c] text-white font-Geometrica px-2 text-lg" onClick={() => { openModal(); setShowModalCalendar(true); }}> BOOK NOW</button>
                <CalendarioModal
        
        isOpen={modalOpen}
        onRequestClose={closeModal}
        />
          </div>
          <div className="w-full flex flex-row justify-center gap-12 mt-8 mb-8">
                <Image src={carritocafe} alt="carrito de compras" className="w-[25px] h-[25px] cursor-pointer"/>
                <Image src={telefonocafe} alt="carrito de compras" className="w-[21px] h-[25px] cursor-pointer"/>
                <Image src={emailcafe} alt="carrito de compras" className="w-[30px] h-[25px] cursor-pointer"/>
                <Image src={fbcafe} alt="carrito de compras" className="w-[15px] h-[25px] cursor-pointer"/>
                <Image src={igcafe} alt="carrito de compras" className="w-[25px] h-[25px] cursor-pointer"/>
          </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
