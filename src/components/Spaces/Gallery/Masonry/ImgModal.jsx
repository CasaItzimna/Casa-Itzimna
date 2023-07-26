import React from 'react'
import Modal from './Modal/Modal'
import Image from 'next/image'

function ImgModal({ foto, isOpen, onRequestClose }) {
  return (
    <Modal
    show={isOpen}
    onClose={onRequestClose}
    className="modal-overlay"
    overlayClassName="modal-overlay"
  >
       
        <Image src={foto} alt="foto masonry" className="w-full h-full object-cover  cursor-pointer"/>

       

</Modal>
  )
}

export default ImgModal