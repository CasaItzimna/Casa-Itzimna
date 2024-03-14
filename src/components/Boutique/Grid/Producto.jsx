import React, { useState } from 'react'
import { client, urlFor } from "../../../lib/client";
import ProductoModal from './ProductoModal';

function Producto({producto, json}) {
 
    const [modalOpen, setModalOpen] = useState(false);
    const [slug, setSlug] = useState('');
  
    const openModal = () => {
        
      setModalOpen(true);
      // Genera la URL con el slug
      const productSlug = producto?.slug?.current; // Asegúrate de tener el slug del producto en tu objeto producto
      const newUrl = `/Boutique/${productSlug}`; // Personaliza la ruta según tus necesidades
      window.history.pushState(null, '', newUrl); // Actualiza la URL sin recargar la página
    };
  
    const closeModal = () => {
      setModalOpen(false);
      // Restaura la URL original
      window.history.pushState(null, '', '/Boutique'); // Reemplaza "/" por la URL original de tu tienda
    };

    if (!producto) {
      return <div>Cargando...</div>; // Muestra un mensaje de carga si producto es null o undefined
    }
    if(producto?.cantidad <= 0){
      return
    }

    

  return (
    
    <div className='bg-[#d3cbc0] w-[350px] lg:w-[478px] h-[400px] lg:h-[533px] flex flex-col justify-center overflow-hidden shadow-[12.0px_12.0px_8.0px_#1b1a18] shadow-[#403e3b]/50'>
            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-col'>
                    <div className='w-full flex flex-row justify-center'>
                        <div className='flex flex-col mb-4'>

                <img src={urlFor(producto?.image[0]?.asset._ref)} alt='imagen producto' className='w-[150px] h-[150px] md:w-[200px] md:h-[230px]  object-contain'   /> 
                <img src={urlFor(producto?.image[0]?.asset._ref)} alt='imagen producto' className='w-[150px] h-[25px] rotate-180 blur-lg '   /> 
                        </div>
                    </div>
            <p className='font-apollo uppercase text-2xl lg:text-4xl tracking-[4px] mb-4'>{producto?.name}</p>
            <button className='border-[1px] border-[#31302c] tracking-[4px] font-apollo text-2xl py-1 mt-4'
            onClick={openModal}
            >
                {json.Boutique.viewDetails}
            </button>
            {
              producto &&
              <ProductoModal
              json={json}
        producto={producto}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        setModalOpen={setModalOpen}
      />
            }
            
      
                </div>
            </div>
            </div>
  )
}

export default Producto