import React, { useEffect } from "react";
import { useState } from "react";
import bote from "./icons/bote.png";
import experience from "./img/experiencefoto.png";
import producto from "./img/productoCarrito.png";
import masaje from "./img/masaje.png";
import Image from "next/image";
import { AppContext } from "@/context/StateContext";
import Link from "next/link";

function CarritoInfo() {
  //const [carrito, setCarrito] = useState(null)
  const [plan, setPlan] = useState(null);
  console.log(plan);
  const { carrito, setCarrito } = AppContext();
  console.log(carrito);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  useEffect(() => {
    if (carrito) {
      setPlan(carrito?.plan);
      setCheckin(carrito?.checkin.substring(0, 10));
      setCheckout(carrito?.checkout.substring(0, 10));
    } else {
      setCarrito(JSON.parse(localStorage.getItem("carrito")));
      setPlan(JSON.parse(localStorage.getItem("carrito"))?.plan);
      setCheckin(carrito?.checkin.substring(0, 10));
      setCheckout(carrito?.checkout.substring(0, 10));
    }
  }, [carrito]);
  console.log(carrito);

  const [guest, setGuest] = useState("");

  const deleteItem = (exp) => {
    console.log("eliminando..." + exp);
    const updatedCart = { ...carrito }; // Copia el objeto carrito

    const index = updatedCart.experience.findIndex((item) => item === exp);
    if (index !== -1) {
      updatedCart.experience.splice(index, 1); // Elimina el elemento del arreglo
    }

    // Actualiza el estado con el nuevo carrito
    setCarrito(updatedCart);
    JSON.stringify(localStorage.setItem("carrito", updatedCart));
  };

  return (
    <div className="w-full h-full flex flex-row justify-center bg-[#b4a692]">
      {carrito ? (
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
              <p className="font-apollo mb-1 uppercase tracking-[2px]">
                {carrito?.name}
              </p>
              <p className="font-apollo mb-1 uppercase tracking-[2px]">
                {carrito?.tel}
              </p>
              <p className="font-apollo mb-1 uppercase tracking-[2px]">
                {carrito?.email}
              </p>
              <select
                name="guest"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="border-[1px] w-[50%] py-1 border-[#b4a692] font-apollo text-gray-500 uppercase tracking-[2px]"
              >
                <option value="" className="font-apollo ">
                  CHOOSE A PLAN
                </option>
                <option value="select" className="font-apollo">
                  SELECT
                </option>
                <option value="luxury" className="font-apollo">
                  LUXURY
                </option>
                <option value="premier" className="font-apollo">
                  PREMIER
                </option>
              </select>
              <div className="w-[50%] h-full flex flex-row gap-1 mt-4 font-apollo ">
                <div className="w-1/2 border-[1px] h-[30px] border-[#b4a692] text-center text-sm tracking-[2px] flex flex-col items-center justify-center">
                  {checkin}
                </div>
                <div className="w-1/2 border-[1px] h-[30px] border-[#b4a692] text-center text-sm tracking-[2px] flex flex-col items-center justify-center">
                  {checkout}
                </div>
              </div>
              {/* <p className='text-right font-apollo mt-4'>PRICE FOR TOTAL NOCHES - NOMBRE PAQUETE</p> */}
              <p className="text-right font-apollo text-3xl mt-8 mb-4 tracking-[2px] ">
                ${carrito?.total} MXN
              </p>
            </div>

            {carrito?.experience.length > 0 ? (
              carrito.experience.map((exp, index) => (
                <div
                  key={index}
                  className="w-[90%] flex flex-col mt-4 mb-2 border-b-[2px] border-b-[#b4a692]"
                >
                  <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]">
                    {exp}
                  </h2>
                  <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="w-[90%] font-apollo uppercase tracking-[2px]">
                          Descripcion experiencia
                        </h3>
                        <p className="text-[#31302c] mt-2  font-apollo w-[90%] tracking-[2px]">
                          *AT YOUR ARRIVING, PLEASE CONFIRM THE DATE OF THE
                          SERVICE
                        </p>
                      </div>
                      <div className="flex flex-row mt-2 justify-start">
                        <Image
                          src={bote}
                          alt="basura"
                          className=" cursor-pointer mb-4"
                          onClick={() => deleteItem(exp)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Image
                        src={experience}
                        alt=""
                        className="rounded-[2px]"
                      />
                      <p className="text-right font-apollo text-3xl mt-4 tracking-[2px]">
                        $300 MXN
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-[90%] flex flex-col items-center mb-2 border-b-[2px] border-b-[#b4a692]">
                <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]">
                  NO HAY EXPERIENCIAS AGREGADAS
                </h2>
              </div>
            )}

            <div className="w-[90%] flex flex-col mb-2 mt-4 ">
              <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]">
                nombre producto
              </h2>
              <div className="w-full flex flex-row justify-between">
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <h3 className=" font-apollo uppercase tracking-[2px]">
                      Descripcion producto
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
                      onClick={() => deleteItem()}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end w-full">
                  <Image
                    src={producto}
                    alt="producto foto"
                    className="w-[50%]"
                  />
                  <p className="text-right font-apollo text-3xl mt-4 tracking-[2px]">
                    $1464 MXN
                  </p>
                </div>
              </div>
            </div>
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
