import React from "react";
import Modal from "./Modal/Modal";
import { client, urlFor } from "../../../lib/client";
import ar from "./icons/ar.png";
import share from "./icons/share.png";
import Image from "next/image";
import { useState } from "react";
import cerrar from './icons/x.png'
import Link from "next/link";
import { AppContext } from "@/context/StateContext";
import { useRouter } from "next/router";

function ProductoModal({ producto, isOpen, onRequestClose }) {
  console.log(producto);
  const [opcion, setOpcion] = useState("opcion1");
  console.log(opcion);
  const {carritoProductos, setCarritoProductos} = AppContext()


  const addProductCart = (producto) => {
    console.log(producto);
  
    // Agregar la propiedad 'tipo' al objeto producto
    const productoConTipo = { ...producto, tipo: "producto" };
  
    // Agregar el producto con la propiedad 'tipo' al carrito
    setCarritoProductos([...carritoProductos, productoConTipo]);
  
    if(localStorage.getItem("producto")){

    
    // Obtener el arreglo actual de productos desde localStorage
    const productosEnLocalStorage = JSON.parse(localStorage.getItem("producto")) ;
    // Agregar el nuevo producto al arreglo
    productosEnLocalStorage.push(productoConTipo);
    // Guardar el arreglo actualizado de productos en localStorage
    localStorage.setItem("producto", JSON.stringify(productosEnLocalStorage));
    } 
    else{
// Guardar el arreglo actualizado de productos en localStorage
localStorage.setItem("producto",JSON.stringify([...carritoProductos, productoConTipo]) );
    }
  
    router.push('/Carrito');
  };

  return (
    <Modal
      show={isOpen}
      onClose={onRequestClose}
      className="modal-overlay"
      overlayClassName="modal-overlay"
    >
      <div className="w-full h-full flex flex-col justify-center">
        <div className="flex flex-col place-items-center lg:place-content-start lg:flex-row">
          {/* Columna izquierda */}
          <div className="flex flex-col lg:w-[500px] p-4">
            <div className="flex flex-row justify-center mb-4">
              <img
                src={urlFor(producto?.image[0].asset._ref)}
                alt="Imagen del producto"
                className="w-[250px] lg:w-full"
              />
            </div>
            <div className="flex flex-row w-full  justify-center lg:justify-between ">
              <div className="w-[80%] lg:w-full flex flex-row gap-4">

              
              {producto.image.slice(1, 4).map((img, index) => (
                <div key={index} className="w-1/3">
                  <img
                    src={urlFor(img.asset._ref)}
                    alt={`Imagen del producto ${index + 2}`}
                    className="w-full overflow-hidden shadow-[12.0px_12.0px_8.0px_#b4a692] shadow-[#b4a692]/50"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="w-[90%] lg:w-1/2 p-4 flex flex-col justify-start">
            <h2 className="text-xl lg:text-7xl mb-2 lg:mb-4 font-apollo uppercase tracking-[10px]">
              {producto.name}
            </h2>
            <p className="font-PlayfairDisplay">Categoria</p>
            <p className="font-PlayfairDisplay font-semibold text-[#b4a692]">
              {producto.artist}
            </p>
            <p className="mt-4 mb-4">
              <span className="text-4xl font-apollo  tracking-[4px] ">
                {producto.price}
              </span>
              &nbsp;&nbsp;
              <span className="text-4xl font-apollo tracking-[4px] ">USD</span>
            </p>
            <div className="w-full flex flex-row justify-center lg:justify-start">
              <div className="flex flex-row  justify-between w-[90%] h-full font-ethereal uppercase text-[11px] ">
                <h4
                  className="cursor-pointer"
                  onClick={() => setOpcion("opcion1")}
                >
                  {" "}
                  DESCRIPTION{" "}
                </h4>
                <h4
                  className="cursor-pointer"
                  onClick={() => setOpcion("opcion2")}
                >
                  {" "}
                  DETAILS{" "}
                </h4>
                <h4
                  className="cursor-pointer"
                  onClick={() => setOpcion("opcion3")}
                >
                  {" "}
                  SHIPPING{" "}
                </h4>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center lg:justify-start">
              <div className="w-[90%] h-full flex flex-row relative mb-4">
                <div className="bg-[#b4a692] w-full h-[3px]"></div>
                <div
                  className={`absolute bg-[#31302c] w-[30%] h-[3px] ${
                    opcion === "opcion1"
                      ? "left-0"
                      : opcion === "opcion2"
                      ? "left-[33%]"
                      : opcion === "opcion3"
                      ? "right-0"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
            <p className={`${opcion === "opcion1"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>
              {producto.description}
            </p>
            <p className={`${opcion === "opcion2"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>{producto.details}</p>
            <p className={`${opcion === "opcion3"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>{producto.shipping}</p>
            <div className="flex flex-col items-center lg:items-start">
            <button className="w-[210px] tracking-[4px] mt-8 py-2 text-xl text-white bg-black"
            onClick={()=>addProductCart(producto)}
            >
              ADD TO CART
            </button>
            <Link
            href={`AR/${producto.slug.current}`}
            >
            <button className="w-[210px] tracking-[4px] py-1 text-md mt-3 border-[1px] border-black ">
              <div className="flex flex-row  justify-center gap-2">
                <Image src={ar} alt="ar logo" className="h-[25px] w-[25px] " />
                <span>AR VIEW</span>
              </div>
            </button>
            </Link>
            <button className="w-[210px] tracking-[4px] py-1 text-md mt-3 border-[1px] border-black ">
              <div className="flex flex-row  justify-center items-center gap-2">
                <Image
                  src={share}
                  alt="ar logo"
                  className="h-[18px] w-[16px] "
                />
                <span>SHARE</span>
              </div>
            </button>
            </div>

            {/* ... Agrega más información del producto aquí ... */}
          </div>
        </div>
      </div>
      <button
        className="absolute top-0 right-0 lg:-top-5 lg:-right-5 w-[30px] h-[30px] lg:w-[55px] lg:h-[55px] bg-[#31302c] rounded-[7px] "
        onClick={onRequestClose}
      >
        <div className="flex flex-row justify-center">

        <Image src={cerrar} alt="cerrar boton " className="w-[80%] lg:w-[30px] h-[80%] lg:h-[30px]" />
        </div>
      </button>
    </Modal>
  );
}

export default ProductoModal;
