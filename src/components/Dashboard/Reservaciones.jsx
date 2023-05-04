import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";
import Reservacion from "./Reservaciones/Reservacion";

const Reservaciones = () => {


  const {getReservaciones, reservaciones, isLoading} = AppContext()
  useEffect(() => {
    getReservaciones()
  }, [])
 
  

  return (
     <div>
    <h2>Reservaciones</h2>
    <p>Aquí se muestra el contenido de Reservaciones.</p>
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
  );
};

export default Reservaciones;
