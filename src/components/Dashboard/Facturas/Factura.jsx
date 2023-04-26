import React, { useState } from 'react';
import Modal from './Modal';
import { AppContext } from '@/context/StateContext';

function Factura({ factura}) {

    const {updateFactura, deleteFactura} = AppContext()
    
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    name: factura.name,
    phone:factura.phone,
    email:factura.email,
    date:factura.date,
    rfc:factura.rfc,
    total:factura.total
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () =>{
    console.log(formData)
     updateFactura(factura._id,formData)
    setShowModal(false); 
  }

  const handleDeleteClick = async () => {
    try {
      await deleteFactura(factura._id);
    } catch (error) {
      console.error("Error al eliminar factura:", error);
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <span>Factura de {factura.name}</span>
      <button>Enviada</button>
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Eliminar</button>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="p-6">
          <h2 className="text-xl mb-4">Editar factura de {factura.name}</h2>
          {/* Aquí puedes agregar el formulario para editar la factura */}
          <div>
          <form className="flex flex-col h-full w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 mt-2"
        placeholder="name"
        onChange={handleInputChange}
        value={formData.name}
        required
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        className="border-2 mt-2"
        placeholder="phone"
        onChange={handleInputChange}
        value={formData.phone}
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        className="border-2 mt-2"
        placeholder="email"
        onChange={handleInputChange}
        value={formData.email}
        required
      />
      <input
        type="date"
        name="date"
        id="date"
        className="border-2 mt-2"
        placeholder="date"
        onChange={handleInputChange}
        value={formData.date}
        required
      />
      <input
        type="text"
        name="rfc"
        id="rfc"
        className="border-2 mt-2"
        placeholder="rfc"
        onChange={handleInputChange}
        value={formData.rfc}
        required
      />
      <input
        type="number"
        name="total"
        id="total"
        className="border-2 mt-2"
        placeholder="total"
        onChange={handleInputChange}
        value={formData.total}
        required
      />
      
      </form>
          </div>
          <div className='flex flex-row justify-between'>

          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Guardar cambios
          </button>
          <button
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCloseModal}
          >
            Cancelar
          </button>

          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Factura;