import React from 'react'
import Modal from './Modal/Modal'
import { client, urlFor } from "../../../lib/client";

function ProductoModal({ producto, isOpen, onRequestClose }) {
    console.log(producto)
  return (
    <Modal
      show={isOpen}
      onClose={onRequestClose}
      className="modal-overlay"
      overlayClassName="modal-overlay"
    >
      <div className="flex">
        {/* Columna izquierda */}
        <div className="w-1/2 p-4">
          <div className="mb-4">
            <img src={urlFor(producto?.image[0].asset._ref)} alt="Imagen del producto" className="w-full" />
          </div>
          <div className="flex justify-between">
            {producto.image.slice(1, 4).map((img, index) => (
              <div key={index} className="w-1/3">
                <img src={urlFor(img.asset._ref)} alt={`Imagen del producto ${index + 2}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="w-1/3 p-4">
          <h2 className="text-xl mb-4">{producto.name}</h2>
          <p>{producto.description}</p>
          {/* ... Agrega más información del producto aquí ... */}
        </div>
      </div>
      <button className="absolute top-4 right-4" onClick={onRequestClose}>
        Cerrar
      </button>
    </Modal>
  );
}

export default ProductoModal