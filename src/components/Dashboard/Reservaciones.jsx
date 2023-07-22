import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";
import Reservacion from "./Reservaciones/Reservacion";
import triangulo from '../../assets/Icons/triangulo.png'
import Image from "next/image";

const Reservaciones = () => {


  const {getReservaciones, reservaciones, isLoading} = AppContext()
  useEffect(() => {
    getReservaciones()
  }, [])
 
  

  return (
     <div className="h-full flex flex-row justify-center ">
      <div className="h-full flex flex-col justify-center">
      
      <div className="flex flex-row justify-between">

    <h2 className="text-2xl font-apollo tracking-[2px] mb-8">Reservaciones</h2>
    <div className="flex flex-row gap-4">
      <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2">STATUS <Image src={triangulo} alt="triangulo icon" className="w-[9px] h-[7px] "/> </div>
      <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer">+ AGREGAR RESERVACIÓN</div>
    </div>
      </div>
    <div className="grid grid-cols-2 gap-4">

    
    {isLoading ? (
  <p>Cargando Reservaciones...</p>
) : (
 
  reservaciones && reservaciones.length > 0 ? (
    reservaciones.map((reservacion) => (
      <Reservacion key={reservacion._id} reservacion={reservacion} />
    ))
    
  ) : (
    <span>No hay reservaciones</span>
  )
)}
</div>
  </div>
    
  </div>
  );
};

export default Reservaciones;
