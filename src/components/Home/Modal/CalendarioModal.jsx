import React, { useEffect } from "react";
import Modal from "./Modal/Modal";
import { client, urlFor } from "../../../lib/client";
import { AiOutlineCaretDown } from "react-icons/ai";
import Calendario from "./Calendario";
import { differenceInDays, isValid } from "date-fns";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { AppContext } from "@/context/StateContext";
import close from '../../../assets/Icons/x.png'
import carritocafe from '../../../assets/Icons/carritocafe.png'
import emailcafe from '../../../assets/Icons/emailcafe.png'
import fbcafe from '../../../assets/Icons/fbcafe.png'
import igcafe from '../../../assets/Icons/igcafe.png'
import telefonocafe from '../../../assets/Icons/telefonocafe.png'

function ProductoModal({ producto, isOpen, onRequestClose }) {
 
  const { postReservacion, setShowModalCalendar } = AppContext();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "",
    begin: "",
    end: "",
    comments: "",
    total: "",
  });
  const [precio, setPrecio] = useState(200);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const options = { weekday: 'long' };

  const today = new Date();
  const todayName = today?.toLocaleDateString('en-US', options);
  const [inicio, setInicio] = useState(null);
  const inicioName = inicio?.toLocaleDateString('en-US', options);

  const [fin, setFin] = useState(null);
  const finName = fin?.toLocaleDateString('en-US', options);
  const [hoy, setHoy] = useState(new Date(today));
  const hoyName = hoy?.toLocaleDateString('en-US', options);
  const dateAfterThreeDays = new Date(today);
  dateAfterThreeDays.setDate(today.getDate() + 3);
  const [despues, setDespues] = useState(dateAfterThreeDays);
  const despuesName = despues?.toLocaleDateString('en-US', options);

  const [total, setTotal] = useState(differenceInDays(despues, hoy) * precio);


  const [show, setShow] = useState(false);
  console.log(show);

  const [selectedPackage, setSelectedPackage] = useState('paquete1');

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  useEffect(() => {
    if (inicio && fin) {
      console.log('aqui anndo', inicio, fin)
      setTotal(differenceInDays(fin, inicio) * precio);
      
    }
  }, [inicio, fin]);

  useEffect(() => {
    if (inicio) {
      formData.begin = inicio;
    }
    if (fin) {
      formData.end = fin;
    }
    if (inicio && fin) {
      formData.total = parseInt(total);
    }
  }, [inicio, fin,total]);

  useEffect(() => {
    localStorage.setItem("paquete", "paquete1")
  }, [])
  

  const handleSubmit = () => {
    event.preventDefault();
    console.log(formData);
    if (formData.name && formData.phone && formData.email && formData.people && formData.begin && formData.end && formData.comments && formData.total) {
      console.log('entre en el if',formData);

      postReservacion(formData);
      setFormData({
        name: "",
        phone: "",
        email: "",
        people: 0,
        inicio: null,
        fin: null,
        comments: "",
      }); 
    } else {
      setError(true);
    }
  };
  return (
    <Modal
      show={isOpen}
      onClose={onRequestClose}
      className="modal-overlay"
      overlayClassName="modal-overlay"
    >
      <div className="w-full h-full flex flex-col justify-center z-50">
        
      <div className="w-screen md:w-full  h-[150px]  flex flex-col justify-end items-center text-center">
        <Image src={close} alt="close modal" onClick={()=>{onRequestClose(true); setShowModalCalendar(false) }} className="w-[25px] absolute top-8 right-4 cursor-pointer "/>
        <div className="w-full flex flex-row justify-center">
          <div>
      <h1 className="  text-black text-4xl lg:text-8xl xl:text-7xl font-cinzelRegular">
            <span className="text-black text-[50px]  lg:text-[150px] xl:text-[100px]">
              C
            </span>
            asa{" "}
            <span className="text-black text-[50px]  lg:text-[150px] xl:text-[100px]">
              I
            </span>
            tzimná
          </h1>
          <h2 className="text-black text-3xl  font-cinzelRegular mb-2">
            Boutique
          </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full">
      
      <form className="flex flex-col h-full w-full" onSubmit={handleSubmit}>
       
        <div className="grid grid-cols-2 mt-2 mb-4 px-4 pb-4 pt-2 w-full h-full border-t-[1px] border-b-[1px] border-[#d3cbc0] gap-4">
          <div className="flex flex-col items-center border-r-[1px] border-[#d3cbc0]  ">
          <p className="text-[#d3cbc0] font-Geometrica uppercase mb-2 tracking-[2px]">Entrada</p>
          
          <div
            className="w-[70%] bg-[#d3cbc0] text-black flex flex-col text-center relative cursor-pointer"
            onClick={() => setShow(true)}
          >
            
            {!inicio ? (
              <div>
                <p className="text-3xl font-Geometrica mt-2 uppercase">{monthNames[hoy.getMonth()]}</p>
                <p className="text-3xl  font-Geometrica">
                {hoy.getDate()}, {hoy.getFullYear()}
                </p>
                <p className="text-xl font-Geometrica uppercase mb-2">{hoyName}</p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-3xl font-Geometrica mt-2 uppercase">{monthNames[inicio.getMonth()]}</p>
                <p className="text-3xl  font-Geometrica">
                {inicio.getDate()}, {inicio.getFullYear()}
                </p>
                <p className="text-xl font-Geometrica uppercase mb-2">{inicioName}</p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                </div>
              </div>
            )}
          </div>
          </div>
          <div className="flex flex-col items-center ">
          <p className="text-[#d3cbc0] font-Geometrica uppercase mb-2 tracking-[2px]">Salida</p>
          
          <div
            className="w-[70%]  bg-[#d3cbc0] text-black flex flex-col text-center relative cursor-pointer"
            onClick={() => setShow(true)}
          >
            {!fin ? (
              <div>
                <p className="text-3xl font-Geometrica mt-2 uppercase">{monthNames[despues.getMonth()]}</p>
                <p className="text-3xl font-Geometrica">
                {despues.getDate()}, {despues.getFullYear()}
                </p>
                <p className="text-xl font-Geometrica uppercase mb-2">{despuesName}</p>

                <div>
                  <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-3xl font-Geometrica mt-2 uppercase">{monthNames[fin.getMonth()]}</p>
                <p className="text-3xl  font-Geometrica">
                {fin.getDate()}, {fin.getFullYear()}
                </p>
                <p className="text-xl font-Geometrica uppercase mb-2">{finName}</p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        <div className={`mt-4 ${!show ? "hidden" : "block"}`}>
          <Calendario
            inicio={inicio}
            fin={fin}
            setInicio={setInicio}
            setFin={setFin}
            setShow={setShow}
          />
        </div>
        <div className="flex flex-col items-center">
      <h3 className="text-[#d3cbc0] font-Geometrica uppercase tracking-[2px]">GUEST NUMBER</h3>
      <div className="flex flex-row justify-center gap-4 text-black mt-2 mb-4">
      <div onClick={()=>{setSelectedPackage('paquete1'); localStorage.setItem("paquete", "paquete1")}} className={selectedPackage === 'paquete1'?`border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`:`border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`}>
          <div className={selectedPackage === 'paquete1'?`border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`:`border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `}></div>
        </div>
        <label
          htmlFor="paquete1"
          className={`font-Geometrica ${selectedPackage === 'paquete1' ? 'text-[#d3cbc0]' : ''}`}
        >
          1-2
        </label>
        <div onClick={()=>{setSelectedPackage('paquete2'); localStorage.setItem("paquete", "paquete2")}} className={selectedPackage === 'paquete2'?`border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`:`border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`}>
          <div className={selectedPackage === 'paquete2'?`border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`:`border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `}></div>
        </div>
        <label
          htmlFor="paquete2"
          className={`font-Geometrica ${selectedPackage === 'paquete2' ? 'text-[#d3cbc0]' : ''}`}
        >
          3-5
        </label>
        <div onClick={()=>{setSelectedPackage('paquete3'); localStorage.setItem("paquete", "paquete3")}} className={selectedPackage === 'paquete3'?`border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`:`border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`}>
          <div className={selectedPackage === 'paquete3'?`border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`:`border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `}></div>
        </div>
        <label
          htmlFor="paquete3"
          className={`font-Geometrica ${selectedPackage === 'paquete3' ? 'text-[#d3cbc0]' : ''}`}
        >
          6-8
        </label>
      </div>
    </div>
      <div className="flex flex-row justify-center">
      <button
          className="w-[70%] bg-black text-white text-lg uppercase font-semibold py-1 mt-4 rounded-[4px] font-Geometrica tracking-[4px] "
          onClick={() => { handleSubmit(); onRequestClose(true); setShowModalCalendar(false) }}
          type="submit"
        >
          <Link href="/House#booking">
          BOOK NOW
          </Link>
        </button>
      </div>
       
        <div className="w-full flex flex-row justify-around mt-8 mb-8">
                <Image src={carritocafe} alt="carrito de compras" className="w-[25px] h-[25px] cursor-pointer "/>
                <Image src={telefonocafe} alt="carrito de compras" className="w-[21px] h-[25px] cursor-pointer"/>
                <Image src={emailcafe} alt="carrito de compras" className="w-[30px] h-[25px] cursor-pointer"/>
                <Image src={fbcafe} alt="carrito de compras" className="w-[15px] h-[25px] cursor-pointer"/>
                <Image src={igcafe} alt="carrito de compras" className="w-[25px] h-[25px] cursor-pointer"/>
          </div>
      </form>
    </div>
    
    </div>
    </Modal>
  );
}

export default ProductoModal;
