import React from 'react';
import Masonry from 'react-masonry-css';

import garden1 from './img/Garden/garden1.png'
import garden2 from './img/Garden/garden2.png'
import garden3 from './img/Garden/garden3.png'
import garden4 from './img/Garden/garden4.png'
import garden5 from './img/Garden/garden5.png'
import garden6 from './img/Garden/garden6.png'
import garden7 from './img/Garden/garden7.png'

import Image from 'next/image';
import Img from './Img';


const GalleryMasonry = ({opcion}) => {

  const garden = [garden1,garden2,garden3,garden4,garden5,garden6,garden7]

  const breakpointColumnsObj = {
    default: 4, // número de columnas por defecto
    3000: 6, // número de columnas en pantallas más grandes o iguales a 1100px
    2000: 4, // número de columnas en pantallas más grandes o iguales a 1100px
    1200: 3, // número de columnas en pantallas más grandes o iguales a 1100px
    1000: 2, // número de columnas en pantallas más grandes o iguales a 1100px
    500: 1, // número de columnas en pantallas más grandes o iguales a 700px
    // Puedes agregar más tamaños de pantalla aquí si es necesario
  };
  return (
    
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='flex'
      
    >
      {
        opcion == "garden"?
        garden.map((foto, index) => (
          <Img key={index} foto={foto} className='w-max h-max'/>

        ))
        :null
      }
    </Masonry>
   
  );
};

export default GalleryMasonry;
