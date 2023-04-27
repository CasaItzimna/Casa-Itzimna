import { AppContext } from '@/context/StateContext';
import { useEffect, useState } from 'react';
import Factura from './Facturas/Factura';
import { useRef } from 'react';

const Facturas = () => {
  const { getFacturas, facturas, isLoading} = AppContext()
  const [localFacturas, setLocalFacturas] = useState([])

  const isMounted = useRef(true);
  

  useEffect(() => {
    getFacturas()
  }, []);
  
  

  return (
    <div>
      <h2>Facturas</h2>
      <p>Aquí se muestra el contenido de Facturas.</p>
      {isLoading ? (
        <p>Cargando facturas...</p>
      ) : (
        facturas.map((factura, index) => (
          <Factura factura={factura} key={index} />
        ))
      )}
    </div>
  );
};

export default Facturas;
