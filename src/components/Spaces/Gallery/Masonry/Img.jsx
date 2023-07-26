import Image from 'next/image';
import React from 'react';
import ImgModal from './ImgModal';
import { useState } from 'react';

function Img({ foto }) {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    
  setModalOpen(true);
 
};

const closeModal = () => {
  setModalOpen(false);

};


  return (
    <>
        <Image src={foto} alt="foto masonry" className="w-full h-full object-cover mt-2 px-1 cursor-pointer"
        onClick={openModal}
        />
        <ImgModal
        foto={foto}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        setModalOpen={setModalOpen}
      />
      
    </>
  );
}

export default Img;
