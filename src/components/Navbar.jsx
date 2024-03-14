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
import { useRouter } from 'next/router';
import {motion} from 'framer-motion'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";



function Navbar() {

  const {setShowModalCalendar, showModalCalendar, setMoneda, moneda} = AppContext()

  const [modalOpen, setModalOpen] = useState(false);
    const [slug, setSlug] = useState('');
  
    const openModal = () => {
      setModalOpen(true);
      
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    
  const [active, setActive] = useState(false);
  const { idioma, setIdioma } = AppContext();
  const json = idioma === "espanol" ? esJson : enJson;
  const router = useRouter();
  const isDashboardPage = router.pathname === '/Dashboard';
  const isDashboardComponentPage = router.pathname === '/Dashboard/[_component]';

  const handleMonedaChange = (selectedMoneda) => {
    setMoneda(selectedMoneda);
  };

 



  return (
    !isDashboardPage && !isDashboardComponentPage?
    <Fragment>
      <div className="w-full h-full hidden lg:flex flex-col items-center">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }} 
        className="h-[150px] max-w-[1920px] w-full absolute top-20 z-20 flex flex-row justify-around  font-apollo">
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
                  idioma === "espanol"
                    ? "border-[1px] rounded-full px-2 py-1"
                    : ""
                } cursor-pointer hover:text-[#d3cbc0]`}
                onClick={() => setIdioma("espanol")}
              >
                ES
              </span>
              <span
                className={`mr-4  ${
                  idioma === "ingles"
                    ? "border-[1px] rounded-full px-2 py-1"
                    : ""
                } cursor-pointer hover:text-[#d3cbc0]`}
                onClick={() => setIdioma("ingles")}
              >
                EN
              </span>
              <select
              value={moneda}
              onChange={(e) => handleMonedaChange(e.target.value)}
              className="cursor-pointer bg-transparent border-none hover:text-[#d3cbc0] focus:outline-none"
            >
              <option value="MXN" className="text-black">MXN</option>
              <option value="USD" className="text-black">USD</option>
              <option value="EUR" className="text-black">EUR</option>
              {/* Agrega otras opciones de moneda según tus necesidades */}
            </select>
            </div>
            <div className="flex flex-row justify-center">
              <ul className="flex flex-row text-center gap-20 text-md 2xl:text-2xl ">
                <li className="cursor-pointer hover:text-[#d3cbc0]  tracking-[6px]">
                  <Link href="/">{json.Navbar.option1}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px] w-[150px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/AboutUs">{json.Navbar.option2}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/House">{json.Navbar.option3}</Link>
                </li>
                {/* <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Experience">{json.Navbar.option4}</Link>
                </li> */}
              </ul>
            </div>
            <div className="flex flex-row justify-center">
              <ul className="flex flex-row text-center gap-20 text-md 2xl:text-2xl  mt-2">
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Spaces">{json.Navbar.option5}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Boutique">{json.Navbar.option6}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Contact">{json.Navbar.option7}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center">
           {/*  <button className="border-2 border-white rounded-md text-white w-[120px] h-[35px] text-xl flex flex-col justify-center items-center">
              <Link href="/Login">LOG IN</Link>
            </button> */}
            <div className="flex flex-row justify-center mb-4">
              <div className="flex flex-row justify-center items-center gap-4">

            <Link href="/Carrito">
                <Image src={carrito} alt="carrito de compras icon" className="w-[25px] h-[25px] cursor-pointer"/>
            </Link>
            <a href="https://www.facebook.com/CasaItzimnaboutique" target="_blank">
            <FaFacebookF className="text-[#d3cbc0] mt-1 text-[25px] cursor-pointer"/>
            </a>
            <a href="https://www.instagram.com/CasaItzimnaboutique" target="_blank">
            <AiOutlineInstagram className="text-[#d3cbc0] mt-1 text-[30px] cursor-pointer"/>
            </a>
              </div>
            </div>
            <button className="bg-[#d3cbc0] hover:bg-[#a59f98] rounded-md text-black w-[120px] h-[30px] mt-2 text-xl">
            <Link href="/House#booking">{json.Navbar.bookButton}</Link>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}  className={showModalCalendar === false ?"lg:hidden flex flex-row justify-between absolute top-10 md:top-20 z-20 w-full text-white ": "hidden"}>
      <Link href="/Carrito">
        <Image
          src={carrito}
          alt="menu movil"
          className={!active ? "flex w-[40px] ml-4 md:ml-8 cursor-pointer" : "hidden"}
        />
        </Link>
        <div className="flex flex-row justify-center text-2xl text-center items-center mb-2">
              <span
                className={`mr-4 ${
                  idioma === "espanol"
                    ? "border-[1px] rounded-full px-2 py-1"
                    : ""
                } cursor-pointer hover:text-[#d3cbc0]`}
                onClick={() => setIdioma("espanol")}
              >
                ES
              </span>
              <span
                className={`mr-4  ${
                  idioma === "ingles"
                    ? "border-[1px] rounded-full px-2 py-1"
                    : ""
                } cursor-pointer hover:text-[#d3cbc0]`}
                onClick={() => setIdioma("ingles")}
              >
                EN
              </span>
              <select
              value={moneda}
              onChange={(e) => handleMonedaChange(e.target.value)}
              className="cursor-pointer bg-transparent border-none hover:text-[#d3cbc0] focus:outline-none"
            >
              <option value="MXN" className="text-black">MXN</option>
              <option value="USD" className="text-black">USD</option>
              <option value="EUR" className="text-black">EUR</option>
              {/* Agrega otras opciones de moneda según tus necesidades */}
            </select>
            </div>
        <Image
          src={menu}
          alt="menu movil"
          className={!active ? "flex w-[40px] h-full mr-4 md:mr-8 cursor-pointer" : "hidden"}
          onClick={()=>setActive(true)}
        />
      </motion.div>
      <div className={active ? "flex flex-col w-full  absolute top-0 bg-white z-30 " : "hidden"}>
          <div className="w-full h-[180px] flex flex-row justify-center relative">
            <Image src={close} alt="close menu movil"
             onClick={()=>setActive(false)}
              className="w-[30px] absolute top-10 right-4 cursor-pointer"/>
               
            <Image src={logomovil} alt="logo menu movil" className="w-[60%] absolute top-[80px] sm:top-[30%] md:top-[10%] "/>
            
          </div>
          <div>
          <ul className="flex flex-col text-center gap-3 text-xl font-Geometrica">
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/">{json.Navbar.option1}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/AboutUs">{json.Navbar.option2}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/House">{json.Navbar.option3}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Experience">{json.Navbar.option4}</Link>
                </li>
               
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Spaces">{json.Navbar.option5}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Boutique">{json.Navbar.option6}</Link>
                </li>
                <li className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
                onClick={()=>setActive(false)}
                >
                  <Link href="/Contact">{json.Navbar.option7}</Link>
                </li>
              </ul>
          </div>
          <div className="w-full flex flex-row justify-center gap-2 mt-4">
{/*                 <button className="tracking-[2px] border-[1px] border-[#31302c] font-Geometrica text-[#31302c] px-4 text-lg"><Link href="/Login">LOG IN</Link></button>
 */}                <button className="tracking-[2px] py-2  bg-[#30302c] text-white font-Geometrica px-4 text-lg" /* onClick={() => { openModal(); setShowModalCalendar(true); }} */  onClick={()=>setActive(false)}> <Link href="/House#booking">BOOK NOW</Link> </button>
                <CalendarioModal
        
        isOpen={modalOpen}
        onRequestClose={closeModal}
        />
          </div> 
          <div className="w-full flex flex-row justify-center gap-12 mt-8 mb-8">
            <Link href="/Carrito" onClick={()=>setActive(false)}>
                <Image src={carritocafe} alt="carrito de compras icon" className="w-[25px] h-[25px] cursor-pointer"/>
            </Link>
            <a href='tel:+525528794515'>
                <Image src={telefonocafe} alt="telefono icon" className="w-[21px] h-[25px] cursor-pointer"/>
                </a>
                <a href='mailto:CASAITZIMNA@HOTELBOUTIQUE.COM'>
                <Image src={emailcafe} alt="email icon" className="w-[30px] h-[25px] cursor-pointer"/>
                </a>
                <a href="https://www.facebook.com/CasaItzimnaboutique" target="_blank">
                <Image src={fbcafe} alt="fb icon" className="w-[15px] h-[25px] cursor-pointer"/>
                </a>
                <a href="https://www.instagram.com/CasaItzimnaboutique" target="_blank">
                <Image src={igcafe} alt="ig icon" className="w-[25px] h-[25px] cursor-pointer"/>
                </a>
          </div>
      </div>
    </Fragment>
    : null
  );
}

export default Navbar;
