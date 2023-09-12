import React, { useEffect } from "react";
import { useState } from "react";
import bote from "./icons/bote.png";
import experience from "./img/experiencefoto.png";
import producto from "./img/productoCarrito.png";
import masaje from "./img/carrito-2.jpg";
import Image from "next/image";
import { AppContext } from "@/context/StateContext";
import Link from "next/link";
import { client, urlFor } from "../../lib/client";
import Reservacion from "./Reservacion";
import { differenceInDays, isValid } from "date-fns";
import getStripe from "../../lib/getStripe";
import Producto from "./Producto";

function CarritoInfo({ json }) {
  const [carrito, setCarrito] = useState([]);
  const [plan, setPlan] = useState(null);

  const {
    carritoReservaciones,
    setCarritoReservaciones,
    carritoProductos,
    setCarritoProductos,
    reservacion,
    setReservacion,
    moneda,
    usdRate,
    eurRate,
  } = AppContext();


  const determinarMoneda = () => {
    switch (moneda) {
      case "USD":
        return usdRate;
        break;
      case "EUR":
        return eurRate;
        break;
      default:
        return 1;
    }
  };

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [reservacionEnCarrito, setReservacionEnCarrito] = useState([]);
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    if (carritoProductos.length === 0) {
      

      // Verifica si hay datos en el localStorage
      if (JSON.parse(localStorage.getItem("producto"))) {
        // Parsea los datos del localStorage y guárdalos en el estado carritoProductos
        setCarritoProductos(JSON.parse(localStorage.getItem("producto")));
      }
    }
  }, []);

  useEffect(() => {
    if (!carritoReservaciones?.length > 0) {
      if (JSON.parse(localStorage.getItem("reservacion"))) {
        setCarritoReservaciones(
          JSON.parse(localStorage.getItem("reservacion"))
        );
      }
    }
  }, []);
  const deleteProduct = (producto) => {
    const updatedCart = [...carritoProductos]; // Copia el objeto carrito
    const index = updatedCart.findIndex((item) => item === producto);
    if (index !== -1) {
      updatedCart.splice(index, 1); // Elimina el elemento del arreglo
    }

    // Actualiza el estado con el nuevo carrito
    setCarritoProductos(updatedCart);
    JSON.stringify(
      localStorage.setItem("producto", JSON.stringify(updatedCart))
    );
  };

  const deleteExp = (reservacion, exp) => {
    const updatedCart = carritoReservaciones.map((rsv) => {
      // Si rsv es la misma reservacion que la que queremos modificar
      if (rsv === reservacion && Array.isArray(rsv.experience)) {
        const index = rsv.experience.findIndex((item) => item === exp);
        if (index !== -1) {
          // Creamos una copia de la propiedad 'experience' usando slice()
          const updatedExperience = [...rsv.experience];
          // Eliminamos el elemento del arreglo 'experience' usando splice()
          updatedExperience.splice(index, 1);
          // Actualizamos la propiedad 'experience' del objeto reservacion
          rsv.experience = updatedExperience;
          rsv.total = rsv.total - exp.precio;
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
    const updatedCart = [...carritoReservaciones]; // Copia el objeto carrito
    const index = updatedCart.findIndex((item) => item === reservacion);
    if (index !== -1) {
      updatedCart.splice(index, 1); // Elimina el elemento del arreglo
    }

    // Actualiza el estado con el nuevo carrito
    setCarritoReservaciones(updatedCart);
    JSON.stringify(
      localStorage.setItem("reservacion", JSON.stringify(updatedCart))
    );
  };


  // Variables para almacenar la suma de cada sección
  let sumReservaciones = 0;
  let sumExperiences = 0;
  let sumProductos = 0;

  // Calcula la suma de las reservaciones
  carritoReservaciones.forEach((rsv) => {
    (sumReservaciones += rsv.total);
  });
  // Calcula la suma de las experiencias
  carritoReservaciones.forEach((rsv) => {
    rsv.experience.forEach((exp) => {
      sumExperiences += exp.precio;
    });
  });

  // Calcula la suma de los productos
  carritoProductos.forEach((product) => {
    sumProductos += parseFloat(product.price);
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleCheckOut = async () => {
    setIsLoading(true);

    // Recorremos carritoReservaciones para guardar cada reservación y experiencia en el arreglo carrito
    carritoReservaciones.forEach((reservacion) => {
      console.log(reservacion)
      reservacion.price = (reservacion.price * determinarMoneda()).toFixed(2);

      carrito.push(reservacion); // Guardamos la reservación completa en el arreglo carrito

      // Recorremos el arreglo experience dentro de cada reservación
      if (reservacion.experience && Array.isArray(reservacion.experience)) {
        reservacion.experience.forEach((exp) => {
          const precioExperiencia = exp.precio;
          carrito.push({
            name: exp,
            price: (precioExperiencia * determinarMoneda()).toFixed(2),
            tipo: "experiencia",
          }); // Guardamos la experiencia con su precio en el arreglo carrito
        });
      }
    });

    // Recorremos carritoProductos para guardar cada producto en el arreglo carrito
    carritoProductos.forEach((producto) => {
      console.log(parseFloat(producto.price))
      producto.price = (parseFloat(producto.price) * determinarMoneda()).toFixed(2);
      console.log(parseFloat(producto.price))
      carrito.push(producto); // Guardamos cada producto en el arreglo carrito
    });
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: carrito,
        moneda: moneda,
      }),
    });

    if (response.status === 500) return;

    const data = await response.json();

    // Solo pasa el sessionId a la función redirectToCheckout
    const { error } = stripe.redirectToCheckout({ sessionId: data.id });

    // Manejar el error si es necesario
    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-row justify-center bg-[#d3cbc0] ">
      {carritoReservaciones || carritoProductos ? (
        <div className="w-[80%] 2xl:w-[1140px]  h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-9 mb-8  ">
          {/*Cart*/}
          <div className="relative w-full h-full  overflow-hidden shadow-[12.0px_12.0px_8.0px_#9b9696]">
            <div className="w-full h-full  flex flex-col bg-white items-center    ">
              <div className="w-[90%] flex flex-col mb-2 border-b-[2px]  border-b-[#d3cbc0] ">
                <div className="flex flex-row justify-center">
                  <h1 className="font-apollo text-3xl tracking-[4px] mt-8 mb-4">
                    {json.Cart.cart}
                  </h1>
                </div>
                <h2 className="font-apollo text-xl tracking-[4px] mb-2 text-[#d3cbc0]">
                  {json.Cart.booking}
                </h2>
                {carritoReservaciones.length > 0 ? (
                  carritoReservaciones.map((reservacion, index) => (
                    <Reservacion
                      json={json}
                      key={index}
                      reservacion={reservacion}
                      deleteExp={deleteExp}
                      deleteReservation={deleteReservation}
                    />
                  ))
                ) : (
                  <div className="w-full flex flex-row justify-center">
                    <div className="w-[90%] lg:w-full flex flex-col items-center  mb-2">
                      <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#d3cbc0] ">
                        {json.Cart.noreservations}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
              {console.log(eurRate,usdRate)}

              {carritoProductos.length > 0 ? (
                carritoProductos.map((producto, index) => (
                  <Producto key={index} index={index} producto = {producto} carritoProductos={carritoProductos} json={json} determinarMoneda={determinarMoneda} moneda={moneda}/>
                ))
              ) : (
                <div className="w-[90%] flex flex-col items-center mb-2">
                  <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#d3cbc0]">
                    {json.Cart.noproducts}
                  </h2>
                </div>
              )}
            </div>
          </div>

          <div className="h-full flex flex-col gap-8 ">
            <div className="w-full flex flex-row justify-center">
              <div className=" w-full flex flex-col items-center bg-white mt-8 lg:mt-0  overflow-hidden shadow-[12.0px_12.0px_8.0px_#9b9696]">
                <div className="w-[90%] h-full flex flex-col   ">
                  <h1 className="font-apollo text-3xl tracking-[4px] mt-8 mb-4 uppercase text-center">
                    {json.Cart.summary}
                  </h1>
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full h-full flex flex-row  justify-between border-b-[2px] border-[#d3cbc0] ">
                      <div className="h-full flex flex-col justify-between">
                        <p className="font-apollo text-[#31302c]/40 text-lg tracking-[2px]">
                          SUBTOTAL
                        </p>
                      </div>
                      <div className="h-full flex flex-col justify-between text-right ">
                        <div className="h-full flex flex-col">
                          {carritoReservaciones.map((rsv, index) => (
                            <p
                              key={index}
                              className="font-apollo text-[#31302c]/40 tracking-[2px] text-lg"
                            >
                              
                              ${((sumReservaciones - sumExperiences)* determinarMoneda()).toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      })} {moneda}
                            </p>
                          ))}
                          {carritoReservaciones.map(
                            (rsv, index) => (
                              (
                                <div key={index + 10}>
                                  {rsv.experience.map((exp, i) => (
                                    <p
                                      key={i}
                                      className="font-apollo text-[#31302c]/40 tracking-[2px] text-lg"
                                    >
                                      $
                                      {(
                                        exp.precio * determinarMoneda()
                                      ).toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      })}{" "}
                                      {moneda}
                                    </p>
                                  ))}
                                </div>
                              )
                            )
                          )}

                          {carritoProductos.map((product, index) => (
                            <p
                              key={index}
                              className="font-apollo text-[#31302c]/40 tracking-[2px] text-lg"
                            >
                              $
                              {(
                                parseFloat(product?.price) * determinarMoneda()
                              ).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}{" "}
                              {moneda}{" "}
                              {console.log(parseFloat(product.price))}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between mt-4">
                      <p className="font-apollo text-[#282828] tracking-[2px] text-xl ">
                        TOTAL
                      </p>
                      <p className="font-apollo text-[#282828] tracking-[2px] text-xl">
                        $
                        {(
                          (parseFloat(sumReservaciones) + parseFloat(sumProductos)) *
                          determinarMoneda()
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        {moneda}
                        {console.log(sumProductos)}
                      </p>
                    </div>
                    <button
                      className="bg-black hover:bg-[#a59f98]  text-white uppercase w-full py-4 mt-4 font-Geometrica text-xl mb-4"
                      onClick={handleCheckOut}
                    >
                      {isLoading ? (
                        <span>{json.Cart.loading}</span>
                      ) : (
                        json.Cart.proceed
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row justify-center">
              <div className="w-full   bg-white flex flex-col items-center  overflow-hidden shadow-[12.0px_12.0px_8.0px_#9b9696]">
                <Image
                  src={masaje}
                  alt="masaje"
                  className="w-full h-[250px] object-cover"
                />
                <div className="w-[90%] h-full flex flex-col items-center">
                  <h3 className="text-center lg:text-left uppercase font-apollo tracking-[4px] mt-4 text-2xl">
                    {json.Cart.unforgettable}
                  </h3>
                  <p className="text-justify font-PlayfairDisplay tracking-[2px] mt-4">
                    {json.Cart.make}
                  </p>
                  <div className="w-full flex flex-row justify-center lg:justify-start mt-4 mb-8">
                    <button className="uppercase w-[170px] bg-[#d3cbc0] hover:bg-[#a59f98] rounded-[7px] text-xl py-1 font-Geometrica tracking-[2px]">
                      <Link href="Experience">{json.Cart.experiences}</Link>
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
