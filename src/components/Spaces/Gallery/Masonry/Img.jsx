import Image from 'next/image';
import React from 'react';

function Img({ foto }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-center">
        <Image src={foto} alt="foto masonry" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Img;
