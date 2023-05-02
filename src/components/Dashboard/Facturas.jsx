import { AppContext } from "@/context/StateContext";
import { useEffect, useState } from "react";
import Factura from "./Facturas/Factura";
import { useRef } from "react";

const Facturas = () => {


  const { getFacturas, setIsLoading, isLoading, facturas } = AppContext();

  const [facturasUpdated, setFacturasUpdated] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  const handleUpdated = () => {
    setLastUpdated(Date.now());
  };

  useEffect(() => {
    getFacturas();
  }, [facturasUpdated]);

  useEffect(() => {
    if (facturasUpdated) {
      setFacturasUpdated(false);
    }
  }, [facturasUpdated]);

  useEffect(() => {
    getFacturas();
  }, [lastUpdated]);

  console.log(facturas);

  return (
    <div>
      <h2>Facturas</h2>
      <p>Aquí se muestra el contenido de Facturas.</p>
      {isLoading ? (
        <p>Cargando facturas...</p>
      ) : (
        facturas?.map((factura, index) => (
          <Factura
            factura={factura}
            key={index}
            setFacturasUpdated={setFacturasUpdated}
            handleUpdated={handleUpdated}
          />
        ))
      )}
    </div>
  );
};

export default Facturas;
