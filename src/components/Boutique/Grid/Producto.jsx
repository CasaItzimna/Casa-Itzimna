import React, { useState } from 'react'
import { client, urlFor } from "../../../lib/client";
import ProductoModal from './ProductoModal';

function Producto({producto}) {

    const [modalOpen, setModalOpen] = useState(false);
    const [slug, setSlug] = useState('');
  
    const openModal = () => {
        console.log(producto)
      setModalOpen(true);
      // Genera la URL con el slug
      const productSlug = producto?.slug.current; // Asegúrate de tener el slug del producto en tu objeto producto
      const newUrl = `/Boutique/${productSlug}`; // Personaliza la ruta según tus necesidades
      window.history.pushState(null, '', newUrl); // Actualiza la URL sin recargar la página
    };
  
    const closeModal = () => {
      setModalOpen(false);
      // Restaura la URL original
      window.history.pushState(null, '', '/Boutique'); // Reemplaza "/" por la URL original de tu tienda
    };

    

  return (
    
    <div className='bg-[#b4a692] w-[350px] lg:w-[478px] h-[480px] lg:h-[533px] flex flex-col justify-center overflow-hidden shadow-[12.0px_12.0px_8.0px_#b4a692] shadow-[#b4a692]/50'>
            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-col'>
                    <div className='w-full flex flex-row justify-center'>
                        <div className='flex flex-col mb-4'>

                <img src={urlFor(producto?.image[0].asset._ref)} alt='imagen producto' className='w-[200px] h-[230px] object-contain'   /> 
                <img src={urlFor(producto?.image[0].asset._ref)} alt='imagen producto' className='w-[200px] h-[90px] rotate-180 blur-xl '   /> 
                        </div>
                    </div>
            <p className='font-apollo uppercase text-2xl lg:text-4xl tracking-[4px] mb-4'>{producto?.name}</p>
            <button className='border-[1px] border-[#31302c] tracking-[4px] font-apollo text-2xl py-1 mt-4'
            onClick={openModal}
            >
                VIEW DETAILS
            </button>
            
      <ProductoModal
        producto={producto}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        setModalOpen={setModalOpen}
      />
                </div>
            </div>
            </div>
  )
}

export default Producto