import React, { useEffect } from "react";
import { BsFacebook, BsFillEnvelopeFill, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useRouter } from 'next/router';

import Image from "next/image";
import logo from "../assets/Logo/LOGOBLANCO.png";
import {BsTelephoneFill} from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLocationDot, FaLongArrowAltUp } from "react-icons/fa";
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
  const isDashboardPage = router.pathname === '/Dashboard';
  const isDashboardComponentPage = router.pathname === '/Dashboard/[_component]';


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Hacer scroll hasta la parte superior de la página
      behavior: 'smooth', // Animación de desplazamiento suave
    });
  };

  // Agrega un efecto de efecto secundario para controlar el comportamiento de desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      // Muestra u oculta el botón de "volver arriba" según la posición del scroll
      const scrollButton = document.getElementById('scrollToTopButton');
      if (scrollButton) {
        if (window.scrollY > 200) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      }
    };

    // Agrega un evento de escucha de desplazamiento cuando se monta el componente
    window.addEventListener('scroll', handleScroll);

    // Elimina el evento de escucha de desplazamiento cuando se desmonta el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
  
    !isDashboardPage && !isDashboardComponentPage?
  

    <div className="w-full h-full  lg:h-[500px]  flex flex-col items-center justify-center bg-[#31302c] ">
      <div className="w-full lg:w-[90%] xl:w-[80%] max-w-[1920px]  flex flex-col-reverse lg:flex-row  justify-center xl:justify-between  ">
       
       
        <div className="h-full flex flex-col mb-4 lg:mb-0  lg:w-1/4 lg:mr-10  text-center lg:text-start   ">
          <h3 className="font-cinzelBold text-2xl text-[#d3cbc0] mb-2 lg:mb-4">
            CONTACT
          </h3>
          <ul className="font-apollo text-white text-center text-sm h-[150px]">
          <a href='https://goo.gl/maps/GzpqxsC24WFuUFZS9' target="_blank">
            <div className="cursor-pointer py-2 text-md lg:text-lg hover:text-[#d3cbc0] xl:w-[400px]">

            <li className="flex flex-row justify-center tracking-[4px] lg:tracking-[0px] xl:tracking-[2px] lg:justify-start lg:text-left"> <Image src={location} alt="location" className="hidden lg:flex h-[20px] w-[15px] "/> &nbsp; AVENIDA PÉREZ PONCE 120,  </li>
            <li className="flex flex-row justify-center tracking-[4px]  lg:tracking-[0px] xl:tracking-[2px] lg:justify-start lg:text-left">COLONIA ITZIMNÁ, 07100, MÉRIDA, YUCATÁN</li>
            </div>
            </a>
            <a href='tel:+525528794515'>
            <li className="flex flex-row tracking-[4px]  lg:py-0  text-lg justify-center lg:justify-start cursor-pointer hover:text-[#d3cbc0]"><BsTelephoneFill className="hidden lg:flex text-[#d3cbc0]"/> &nbsp;+52 55 2879 4515</li>
            </a>
            <a href='mailto:CASAITZIMNA@HOTELBOUTIQUE.COM'>
            <li className="flex flex-row text-lg justify-center tracking-[4px]  lg:tracking-[0px] xl:tracking-[2px] lg:justify-start lg:text-left] hover:text-[#d3cbc0]"><BsFillEnvelopeFill  className="hidden lg:flex text-[#d3cbc0]"/> &nbsp;CONTACTO@CASAITZIMNA.COM</li>
            </a>
            
            <div className="h-[200px] bg-[#31302c] lg:hidden flex flex-col justify-center items-center">
              <li><FaLongArrowAltUp className="text-[#d3cbc0] text-[50px]" onClick={handleScrollToTop}/></li>
            </div>
            <div className="uppercase hidden lg:flex flex-col w-full text-left font-apollo text-white lg:mt-4">
         <p> copyright all rights reserved</p>
         <p> casa itzimná boutique</p>
        </div>
          </ul>
       
        </div>
       
        <div className="w-full lg:w-1/5 flex flex-row justify-center lg:justify-start">

        
        <div className="hidden lg:flex flex-col w-full text-center lg:text-start  ">
          <h3 className="font-cinzelBold text-2xl text-[#d3cbc0] mb-4">
            PAGES
          </h3>
          <ul className="font-apollo text-white text-sm text-center lg:w-1/4 lg:text-start h-[150px]">
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"> <Link href='/AboutUs'>{json.Footer.option1}</Link></li>
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"><Link href='/House'>{json.Footer.option2}</Link></li>
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"><Link href='/Experience'>{json.Footer.option3}</Link></li>
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"><Link href='/Spaces'>{json.Footer.option4}</Link></li>
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"><Link href='/Boutique'>{json.Footer.option5}</Link></li>
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"><Link href='/Contact'>{json.Footer.option6}</Link></li> 
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"><Link href='/TermsAndConditions'>{json.Footer.option7}</Link></li> 
            <li className="cursor-pointer tracking-[4px]  hover:text-[#d3cbc0]"><Link href='/PrivacyPolicy'>{json.Footer.option8}</Link></li> 
          </ul>
{/*           <div className="hidden lg:flex w-full h-[2px] bg-[#d3cbc0]" />
 */}        </div>
        </div>
        
        <div className=" flex flex-col text-center lg:text-right mt-4 lg:mt-0 ">
          <div className="flex flex-row justify-center lg:justify-end">
            <Image src={logo} alt="logo" className="w-[100px] h-[100px] " />
          </div>
          <h3 className="font-cinzelBold text-2xl text-[#d3cbc0] mt-2 lg:mt-0 mb-2">
            GET SOCIAL
          </h3>
          <ul className="font-apollo text-white text-sm h-[50px] flex flex-row justify-center gap-4 lg:gap-0 lg:flex-col lg:justify-normal items-center lg:items-end mb-2 ">
          <a href="https://www.facebook.com/CasaItzimnaboutique" target="_blank">
            <li className="flex flex-row cursor-pointer text-lg tracking-[4px]  hover:text-[#d3cbc0]"><span className="hidden lg:flex">CASA ITZIMNÁ BOUTIQUE &nbsp;</span> <FaFacebookF className="text-[#d3cbc0] mt-1 text-4xl lg:text-sm"/></li>
            </a>
            <a href="https://www.instagram.com/CasaItzimnaboutique" target="_blank">
            <li className="flex flex-row cursor-pointer text-lg tracking-[4px]  hover:text-[#d3cbc0] "><span className="hidden lg:flex">CASAITZIMNÁ_BOUTIQUE &nbsp;</span> <AiOutlineInstagram className="text-[#d3cbc0] mt-1 text-5xl lg:text-sm"/></li>
         </a>
          </ul> 
{/*           <div className="hidden lg:flex w-full h-[2px] bg-[#d3cbc0] mb-4" />
 */}          <div className="uppercase hidden lg:flex flex-row justify-end w-full font-apollo  text-white lg:mt-4  ">
          Made by &nbsp; 
          <a href='https://www.jaizmora.com'  target="_blank">
          <span className="text-[#d3cbc0]  cursor-pointer hover:text-white ">jaizmora digital media</span>
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
