import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";
import Reservacion from "./Reservaciones/Reservacion";

const Reservaciones = () => {


  const {getReservaciones, reservaciones} = AppContext()
  useEffect(() => {
    getReservaciones()
  }, [])
 
  

  return (
    <div>
      <h2>Reservaciones</h2>
      <p>Aquí se muestra el contenido de Reservaciones.</p>
      {
        reservaciones.map((reservacion, index) =>(
          <Reservacion reservacion= {reservacion}
          key={index}
          />
        ))
      }
    </div>
  );
};

export default Reservaciones;
