import { AppContext } from '@/context/StateContext';
import { useEffect, useState } from 'react';
import Factura from './Facturas/Factura';

const Facturas = () => {
  const { getFacturas, facturas } = AppContext()

  useEffect(() => {
   getFacturas()
  }, []);


  return (
    <div>
      <h2>Facturas</h2>
      <p>Aquí se muestra el contenido de Facturas.</p>
      {facturas.map((factura, index) => (
        <Factura factura={factura} key={index}   />
      ))}
    </div>
  );
};

export default Facturas;
