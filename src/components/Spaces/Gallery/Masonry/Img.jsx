import Image from 'next/image';
import React from 'react';

function Img({ foto }) {
  return (
    <>
        <Image src={foto} alt="foto masonry" className="w-full h-full object-cover mt-2 px-1" />
      
    </>
  );
}

export default Img;
