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
 
  const { postReservacion } = AppContext();

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

  const today = new Date();

  const [inicio, setInicio] = useState(null);
  const [fin, setFin] = useState(null);

  const [hoy, setHoy] = useState(new Date(today));
  const dateAfterThreeDays = new Date(today);
  dateAfterThreeDays.setDate(today.getDate() + 3);
  const [despues, setDespues] = useState(dateAfterThreeDays);

  const [total, setTotal] = useState(differenceInDays(despues, hoy) * precio);


  const [show, setShow] = useState(false);
  console.log(show);

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
      <div className="w-screen h-[150px] flex flex-col justify-end items-center text-center">
      <h1 className="  text-black text-4xl sm:text-7xl md:text-6xl lg:text-8xl xl:text-7xl font-cinzelRegular">
            <span className="text-black text-[50px] sm:text-[100px] md:text-[100px] lg:text-[150px] xl:text-[100px]">
              C
            </span>
            asa{" "}
            <span className="text-black text-[50px] sm:text-[100px] md:text-[100px] lg:text-[150px] xl:text-[100px]">
              I
            </span>
            tzimná
          </h1>
          <h2 className="text-black text-3xl sm:text-5xl md:text-5xl font-cinzelRegular mb-2">
            Boutique
          </h2>
      </div>
      <div className="flex flex-col h-full w-full">
      
      <form className="flex flex-col h-full w-full" onSubmit={handleSubmit}>
       
        <div className="grid grid-cols-2 mt-2 mb-4 px-4 pb-4 pt-2 w-full h-full border-t-[1px] border-b-[1px] border-[#b4a692] gap-4">
          <div className="flex flex-col items-center">
          <p className="text-[#b4a692] font-Geometrica uppercase mb-2 tracking-[2px]">Entrada</p>
          
          <div
            className="w-full mx-[25%] bg-[#b4a692] text-black flex flex-col text-center relative cursor-pointer"
            onClick={() => setShow(true)}
          >
            
            {!inicio ? (
              <div>
                <p className="text-6xl">{hoy.getDate()}</p>
                <p className="mt-2">
                  {monthNames[hoy.getMonth()]}, {hoy.getFullYear()}
                </p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-6xl">{inicio.getDate()}</p>
                <p className="mt-2">
                  {monthNames[inicio.getMonth()]}, {inicio.getFullYear()}
                </p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
                </div>
              </div>
            )}
          </div>
          </div>
          <div className="flex flex-col items-center ">
          <p className="text-[#b4a692] font-Geometrica uppercase mb-2 tracking-[2px]">Salida</p>
          
          <div
            className="w-full  bg-[#b4a692] text-black flex flex-col text-center relative cursor-pointer"
            onClick={() => setShow(true)}
          >
            {!fin ? (
              <div>
                <p className="text-6xl">{despues.getDate()}</p>
                <p className="mt-2">
                  {monthNames[despues.getMonth()]}, {despues.getFullYear()}
                </p>

                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-6xl">{fin.getDate()}</p>
                <p className="mt-2">
                  {monthNames[fin.getMonth()]}, {fin.getFullYear()}
                </p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
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
              <h3 className="text-[#b4a692] font-Geometrica uppercase tracking-[2px]">GUEST NUMBER</h3>
              <div className="flex flex-row justify-center gap-4 text-black mt-2 mb-4 ">
                
              <input type="radio" value="Male" name="gender" className="font-Geometrica" /> 1-2
        <input type="radio" value="Female" name="gender" className="font-Geometrica" /> 3-5
        <input type="radio" value="Other" name="gender" className="font-Geometrica" /> 6-8
        
        </div>
        </div>
      <div className="flex flex-row justify-center">
      <button
          className="w-[70%] bg-black text-white text-lg uppercase font-semibold py-1 mt-4 rounded-[4px] font-Geometrica tracking-[4px] "
          onClick={handleSubmit}
          type="submit"
        >
          BOOK NOW
        </button>
      </div>
       
        <div className="w-full flex flex-row justify-around mt-8 mb-8">
                <Image src={carritocafe} alt="carrito de compras" className="w-[25px] h-[25px] cursor-pointer"/>
                <Image src={telefonocafe} alt="carrito de compras" className="w-[21px] h-[25px] cursor-pointer"/>
                <Image src={emailcafe} alt="carrito de compras" className="w-[30px] h-[25px] cursor-pointer"/>
                <Image src={fbcafe} alt="carrito de compras" className="w-[15px] h-[25px] cursor-pointer"/>
                <Image src={igcafe} alt="carrito de compras" className="w-[25px] h-[25px] cursor-pointer"/>
          </div>
      </form>
    </div>
    </Modal>
  );
}

export default ProductoModal;
