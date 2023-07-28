import React from 'react'
import Reservacion from './Reservacion'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '@/context/StateContext';
import { useRef } from 'react';
import Producto from './Producto';
import { useRouter } from "next/router";


function Order({json}) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productosCarrito, setproductosCarrito] = useState([])
    const [reservacionesCarrito, setreservacionesCarrito] = useState([])
    const {updateReservacion, updateProducto} = AppContext()
    const sessionIdRef = useRef(null);

    const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Obtener el valor del parámetro 'session_id' de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id');
      sessionIdRef.current = sessionId;

      

      // Ahora puedes utilizar el valor de 'sessionId' en tu código
      console.log(sessionId);
    }

    if (sessionIdRef.current) {
      if (localStorage.getItem('reservacion')  ) {
        console.log("entre")
        const reservaciones = JSON.parse(localStorage.getItem('reservacion'));
        setreservacionesCarrito(reservaciones)
        reservaciones.map((rsv) => {
            console.log(rsv)
          rsv.status = 'aprobada';
          console.log(rsv)
          updateReservacion(rsv.id, rsv);
        });
        localStorage.removeItem('reservacion')
        // eliminar localstorage
        // mandar a error404?
      } 

      if(localStorage.getItem('producto')){
        console.log("entre")
        const productos = JSON.parse(localStorage.getItem('producto'));
        setproductosCarrito(productos)
        productos.map((item) => {
            console.log(item)
          item.cantidad = item.cantidad - 1
          console.log(item)
          updateProducto(item._id, item);

        });
        localStorage.removeItem('producto')
      }
    }
    else{
        router.push("/");
    }
  }, []);

  return (
    <div className='w-full flex flex-row justify-center bg-[#d3cbc0] '>
        <div className='w-[90%] xl:w-[80%]  h-full flex flex-col items-center bg-white mb-8'>
            <div className='w-[90%] flex flex-col '>
                <div className='w-full flex flex-col items-center'>

                <h2 className='text-center font-apollo tracking-[4px] text-xl mt-8'>{json.Confirmation.titulo}</h2>
                <h3 className='text-center font-apollo tracking-[4px] text-xl text-[#d3cbc0]'>{json.Confirmation.thanks}</h3>
                <p className='text-center font-apollo tracking-[2px]'>{json.Confirmation.delighted}</p>
                <p className='text-center font-apollo tracking-[2px]'>{json.Confirmation.recipt}.</p>
                </div>
                <div className='w-full flex flex-col items-center lg:items-start'>
                    <p className='text-center lg:text-left font-apollo tracking-[2px] mt-8'>{json.Confirmation.review}</p>
                   
                    {
                        reservacionesCarrito.map((rsv, index) =>(
                            <Reservacion key={index} rsv={rsv}/>
                        ))
                    }


                </div>
                
                <div className='w-full flex flex-col items-start mt-4'>
                    {
                        productosCarrito.map((item,index)=>(
                            <Producto key={index} item={item}/>

                        ))
                    }

                </div>
                <div className='w-full flex flex-col items-center mt-8'>

                <p className='uppercase text-center font-apollo tracking-[2px]'>{json.Confirmation.recommend}</p>
                <p className='uppercase text-center font-apollo tracking-[2px]'>{json.Confirmation.questions} <span className='text-[#d3cbc0]'>CONTACTO@CASAITZIMNA.COM</span>.</p>
                <p className='uppercase text-center font-apollo tracking-[2px]'>{json.Confirmation.forward} <span className='text-[#d3cbc0]'>CASA ITZIMNÁ BOUTIQUE</span>.</p>
                <p className='text-center font-apollo tracking-[2px] mt-4'>{json.Confirmation.regards} </p>
                <p className='text-center font-apollo tracking-[2px] mb-8'>CASA ITZIMNÁ </p>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Order