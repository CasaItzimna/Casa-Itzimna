import React from "react";
import Modal from '../Modal/Modal'
import { client, urlFor } from "../../lib/client"
import Image from "next/image";
import { useState } from "react";
import cerrar from "../../assets/Icons/x.png"
import Link from "next/link";
import { AppContext } from "@/context/StateContext";
import { useRouter } from "next/router";

function ExperienceModal({ experiencia, isOpen, onRequestClose, json }) {

  const {moneda, eurRate,usdRate, idioma} = AppContext()

   const determinarMoneda = () => {
    switch(moneda){
    
      case "USD":
        return usdRate
        break;
      case "EUR":
        return eurRate
        break;
        default:
          return 1
    }
  }

  const router = useRouter()

  


  
  if (!experiencia) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga si experiencia es null o undefined
  }

 

  

  return (
    
    <Modal
      show={isOpen}
      onClose={onRequestClose}
      className="modal-overlay"
      overlayClassName="modal-overlay"
    >
      
        <div>
           <div className="w-full h-full flex flex-col justify-center z-50">
        <div className="flex flex-col place-items-center lg:place-content-start lg:flex-row">
          {/* Columna izquierda */}
          <div className="flex flex-col lg:w-[500px] h-full ">
              <img
                src={urlFor(experiencia?.image[0]?.asset._ref)}
                alt="Imagen del experiencia"
                className="w-[550px] h-[500px] object-cover"
              />
           
          </div>

          {/* Columna derecha */}
          <div className="w-[90%] lg:w-1/2 p-4 flex flex-col justify-start">
            <h2 className="text-xl lg:text-5xl mb-2 lg:mb-4 font-apollo uppercase tracking-[10px]">
              {idioma == "ingles" ? experiencia?.nombreENG : experiencia?.nombre}
            </h2>
            <p className="font-PlayfairDisplay">{idioma == "ingles" ? "Description:" : "Descripción:"}</p>
            <p className="font-PlayfairDisplay font-semibold text-[#d3cbc0]">
            {idioma == "ingles" ? experiencia?.descripcionENG : experiencia?.descripcion}
            </p>
            <p className="mt-4 mb-4 flex flex-row justify-end">
              <span className="text-3xl font-apollo  tracking-[4px] ">
               ${(experiencia?.precio * determinarMoneda()).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}
              </span>
              &nbsp;&nbsp;
              <span className="text-3xl font-apollo tracking-[4px] ">{moneda}</span>
            </p>
           
            
          </div>
        </div>
      </div>
      <button
        className="absolute top-0 right-0 lg:-top-5 lg:-right-5 w-[30px] h-[30px] lg:w-[55px] lg:h-[55px] bg-[#a2a2a2]  "
        
      >
        <div className="flex flex-row justify-center">

        <Image src={cerrar} alt="cerrar boton " className="w-[80%] lg:w-[30px] h-[80%] lg:h-[30px]"
        onClick={()=> onRequestClose(true)}
        />
        </div>
      </button>
        </div>
      
      
     
    </Modal>
  );
}

export default ExperienceModal;
