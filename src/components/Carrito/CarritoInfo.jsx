import React, { useEffect } from "react";
import { useState } from "react";
import bote from "./icons/bote.png";
import experience from "./img/experiencefoto.png";
import producto from "./img/productoCarrito.png";
import masaje from "./img/masaje.png";
import Image from "next/image";
import { AppContext } from "@/context/StateContext";
import Link from "next/link";
import { client, urlFor } from "../../lib/client";
import Reservacion from "./Reservacion";


function CarritoInfo() {
  //const [carrito, setCarrito] = useState(null)
  const [plan, setPlan] = useState(null);
  const { carritoReservaciones, setCarritoReservaciones, carritoProductos, setCarritoProductos, reservacion, setReservacion } = AppContext();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [reservacionEnCarrito, setReservacionEnCarrito] = useState([]);
  const [productosEnCarrito, setProductosEnCarrito] = useState([])

  

  useEffect(() => {
    if(!carritoProductos.length>0){
      console.log(carritoProductos)
      if(localStorage.getItem('producto')){

        setCarritoProductos([...carritoProductos,JSON.parse(localStorage.getItem('producto'))[0]])
      }
    }
    if(!carritoReservaciones?.length>0){
      if(localStorage.getItem('reservacion')){
        console.log(JSON.parse(localStorage.getItem('reservacion')))
        setCarritoReservaciones([...carritoReservaciones,JSON.parse(localStorage.getItem('reservacion'))[0]])
      }
    }
  }, [carritoProductos, carritoReservaciones])
  console.log(carritoProductos[0])
  console.log(carritoReservaciones)
  


  const deleteProduct = (producto) => {
    console.log(producto);
    const updatedCart =  [...carritoProductos] ; // Copia el objeto carrito
console.log(updatedCart)
    const index = updatedCart.findIndex((item) => item === producto);
    console.log(index)
    if (index !== -1) {
      updatedCart.splice(index, 1); // Elimina el elemento del arreglo
    }

    // Actualiza el estado con el nuevo carrito
    setCarritoProductos(updatedCart);
    JSON.stringify(localStorage.setItem("producto", updatedCart));
  };
  const deleteExp = (reservacion, exp) => {
    console.log(exp);
    const updatedCart = carritoReservaciones.map((rsv) => {
      // Si rsv es la misma reservacion que la que queremos modificar
      if (rsv === reservacion && Array.isArray(rsv.experience)) {
        const index = rsv.experience.findIndex((item) => item === exp);
        console.log(index);
        if (index !== -1) {
          // Creamos una copia de la propiedad 'experience' usando slice()
          const updatedExperience = [...rsv.experience];
          // Eliminamos el elemento del arreglo 'experience' usando splice()
          updatedExperience.splice(index, 1);
          // Actualizamos la propiedad 'experience' del objeto reservacion
          rsv.experience = updatedExperience;
        }
      }
      return rsv; // Devuelve el objeto modificado o sin cambios
    });
  
    // Actualiza el estado con el nuevo carrito
    setCarritoReservaciones(updatedCart);
    // Actualiza el localStorage
    localStorage.setItem("reservacion", JSON.stringify(updatedCart));
  };
  
  const deleteReservation = (reservacion) => {
    console.log(reservacion);
    const updatedCart =  [...carritoReservaciones] ; // Copia el objeto carrito
console.log(updatedCart)
    const index = updatedCart.findIndex((item) => item === reservacion);
    console.log(index)
    if (index !== -1) {
      updatedCart.splice(index, 1); // Elimina el elemento del arreglo
    }

    // Actualiza el estado con el nuevo carrito
    setCarritoReservaciones(updatedCart);
    JSON.stringify(localStorage.setItem("reservacion", updatedCart));
  };

  console.log(carritoProductos)

  return (
    <div className="w-full h-full flex flex-row justify-center bg-[#b4a692]">
      {carritoReservaciones || carritoProductos ? (
        <div className="w-[80%] xl:w-[60%] h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-9 mb-8 ">
          {/*Cart*/}
          <div className="w-full flex flex-col bg-white items-center ">
            <div className="w-[90%] flex flex-col mb-2 border-b-[2px]  border-b-[#b4a692]">
              <h1 className="font-apollo text-3xl tracking-[4px] mt-8 mb-4">
                CART
              </h1>
              <h2 className="font-apollo text-xl tracking-[4px] mb-2 text-[#b4a692]">
                BOOKING DATA
              </h2>
              {
                console.log(carritoReservaciones)
              }
              {
                carritoReservaciones.length>0 ?(
                  carritoReservaciones.map((reservacion, index)=>(
                    <Reservacion key={index} reservacion = {reservacion} deleteExp={deleteExp} deleteReservation={deleteReservation}/>
                  
                ))
                )
              :(
              <div className="w-[90%] flex flex-col items-center mb-2">
                <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]">
                  NO HAY RESERVACION AGREGADA
                </h2>
              </div>)

              }
              
            </div>

            {
              console.log(carritoProductos)
            }
              {
                carritoProductos.length>0?
                
                carritoProductos.map((producto,index) =>(
              <div key={index} className="w-[90%] flex flex-col mb-2 mt-4 border-b-[2px] border-b-[#b4a692] ">
              <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]">
                {producto?.name}
              </h2>
              <div className="w-full flex flex-row justify-between">
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <h3 className=" font-apollo uppercase tracking-[2px]">
                      {producto?.description.substring(0,70)+" ..."}
                    </h3>
                    <p className="text-[#31302c] mt-2  font-apollo w-full tracking-[2px]">
                      *SET SHIPING AT PAYMENT
                    </p>
                  </div>
                  <div className="flex flex-row mt-2 justify-start ">
                    <Image
                      src={bote}
                      alt="basura"
                      className=" cursor-pointer mb-4"
                      onClick={() => deleteProduct(producto)}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end w-full">
                <img src={urlFor(producto.image[0].asset._ref)}
                    alt="producto foto"
                    className="w-[50%]"
                  /> 
                  <p className="text-right font-apollo text-3xl mt-4 tracking-[2px]">
                    ${producto?.price} MXN
                  </p>
                </div>
              </div>
            </div>
                ))

                :
<div className="w-[90%] flex flex-col items-center mb-2">
                <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]">
                  NO HAY PRODUCTOS AGREGADOS
                </h2>
              </div>
              }
            
          </div>

          <div className="h-full flex flex-col gap-8 ">
            <div className="w-full flex flex-row justify-center">
              <div className=" w-full flex flex-col items-center bg-white mt-8 lg:mt-0">
                <div className="w-[90%] h-full flex flex-col  ">
                  <h1 className="font-apollo text-3xl tracking-[4px] mt-8 mb-4 uppercase text-center">
                    Summary
                  </h1>
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full h-full flex flex-row  justify-between border-b-[2px] border-[#b4a692] ">
                      <div className="h-full flex flex-col justify-between">
                        <p className="font-apollo text-[#31302c]/40 text-lg tracking-[2px]">
                          SUBTOTAL
                        </p>
                        <p className="font-apollo text-[#31302c]/40 text-lg tracking-[2px]">
                          TAX
                        </p>
                      </div>
                      <div className="h-[150px] flex flex-col justify-between text-right ">
                        <div className="h-full flex flex-col">
                          <p className="font-apollo text-[#31302c]/40 tracking-[2px] text-lg">
                            $1,288 MXN
                          </p>
                          <p className="font-apollo text-[#31302c]/40 tracking-[2px] text-lg">
                            $300 MXN
                          </p>
                          <p className="font-apollo text-[#31302c]/40 tracking-[2px] text-lg">
                            $1,464 MXN
                          </p>
                        </div>
                        <div className="h-full flex flex-col justify-end">
                          <p className="font-apollo text-[#282828] tracking-[2px] text-lg ">
                            $120 MXN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between mt-4">
                      <p className="font-apollo text-[#282828] tracking-[2px] text-xl ">
                        TOTAL
                      </p>
                      <p className="font-apollo text-[#282828] tracking-[2px] text-xl">
                        $3,172 MXN
                      </p>
                    </div>
                    <button className="bg-black text-white uppercase w-full py-4 mt-4 font-Geometrica text-xl mb-4">
                      Proceed to pay
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row justify-center">
              <div className="w-full  bg-white flex flex-col items-center">
                <Image
                  src={masaje}
                  alt="masaje"
                  className="w-full h-[250px] object-cover"
                />
                <div className="w-[90%] h-full flex flex-col items-center">
                  <h3 className="text-left uppercase font-apollo tracking-[4px] mt-4 text-2xl">
                    unforgettable experiences await
                  </h3>
                  <p className="text-justify font-PlayfairDisplay tracking-[2px] mt-4">
                    Make your visit an unparelleled journey by adding an
                    experience to your cart.
                  </p>
                  <div className="w-full flex flex-row justify-start mt-4 mb-8">
                    <button className="uppercase w-[170px] bg-[#b4a692] rounded-[7px] text-xl py-1 font-Geometrica tracking-[2px]">
                      <Link href="Experience">experiences</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>No hay nada en el carrito</p>
        </div>
      )}
      {/*linea de tiempo*/}

      {/*Cart*/}
    </div>
  );
}

export default CarritoInfo;
