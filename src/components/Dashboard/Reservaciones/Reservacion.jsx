import React, { useEffect, useState } from "react";
import { AppContext } from "@/context/StateContext";
import Modal from "../Modal/Modal";


function Reservacion({ reservacion, isDeleting}) {

  
  const { updateReservacion, deleteReservacion } = AppContext();

  const [showModal, setShowModal] = useState(false);
  const{getReservaciones} = AppContext()

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    name: reservacion.name,
    phone: reservacion.phone,
    email: reservacion.email,
    date: reservacion.date,
    rfc: reservacion.rfc,
    state: reservacion.state,
    total: reservacion.total,
  });

  useEffect(() => {
    setFormData({
      name: reservacion.name,
      phone: reservacion.phone,
      email: reservacion.email,
      date: reservacion.date,
      rfc: reservacion.rfc,
      total: reservacion.total,
    });
  }, [reservacion]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteClick = async () => {
    try {
      
      await deleteReservacion(reservacion._id);
      console.log("Reservacion eliminada");
      getReservacion()
    } catch (error) {
      console.error("Error al eliminar reservacion:", error);
    }
  };
  

  const [isSwitchChecked, setIsSwitchChecked] = useState(reservacion.state);

  const handleSwitchChange = (event) => {
    setIsSwitchChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      state: isSwitchChecked,
    };
    console.log(updatedFormData);
    try {
      const respuesta = await updateReservacion(reservacion._id, updatedFormData);
      console.log('la respuesta fue', respuesta)
      
      setShowModal(false);
      
      
    } catch (error) {
      console.log(error)
    }

    await getReservacion()
   
  };

  return (
    <div className="flex flex-row justify-between">
      <span>Reservacion de {reservacion.name}</span>
      <button>{reservacion.state === true ? "recibida" : "enviada"}</button>
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick} >
  Eliminar
</button>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="p-6">
          <h2 className="text-xl mb-4">Editar reservacion de {reservacion.name}</h2>
          <div>
            <form
              className="flex flex-col h-full w-full"
              onSubmit={handleSubmit}
            >
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
                type="number"
                name="people"
                id="people"
                className="border-2 mt-2"
                placeholder="people"
                onChange={handleInputChange}
                value={formData.people}
                required
              />
              <input
                type="date"
                name="begin"
                id="begin"
                className="border-2 mt-2"
                placeholder="begin date"
                onChange={handleInputChange}
                value={formData.begin}
                required
              />
              <input
                type="date"
                name="end"
                id="end"
                className="border-2 mt-2"
                placeholder="end date"
                onChange={handleInputChange}
                value={formData.end}
                required
              />
              <textarea
                type="text"
                name="comments"
                id="comments"
                className="border-2 mt-2"
                placeholder="comments"
                onChange={handleInputChange}
                value={formData.comments}
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
          <div className="flex flex-row justify-between">
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

export default Reservacion;
