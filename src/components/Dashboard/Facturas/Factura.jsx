import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { AppContext } from "@/context/StateContext";

function Factura({ factura, setFacturasUpdated, handleUpdated }) {
  console.log(factura.state);
  const { updateFactura, deleteFactura } = AppContext();

  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    name: factura.name,
    phone: factura.phone,
    email: factura.email,
    date: factura.date,
    rfc: factura.rfc,
    state: factura.state,
    total: factura.total,
  });

  useEffect(() => {
    setFormData({
      name: factura.name,
      phone: factura.phone,
      email: factura.email,
      date: factura.date,
      rfc: factura.rfc,
      total: factura.total,
    });
  }, [factura]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteClick = async () => {
    try {
      await deleteFactura(factura._id);
      handleUpdated(); // Llama a handleUpdated después de eliminar
    } catch (error) {
      console.error("Error al eliminar factura:", error);
    }
  };

  const [isSwitchChecked, setIsSwitchChecked] = useState(factura.state);

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
    await updateFactura(factura._id, updatedFormData);
    setShowModal(false);
    setFacturasUpdated(true);
  };

  return (
    <div className="flex flex-row justify-between">
      <span>Factura de {factura.name}</span>
      <button >
        {factura.state === true ? "recibida" : "enviada"}
      </button>
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Eliminar</button>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="p-6">
          <h2 className="text-xl mb-4">Editar factura de {factura.name}</h2>
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
              <label htmlFor="switch">
                {isSwitchChecked ? "Recibida" : "enviada"}
              </label>
              <input
                type="checkbox"
                name="switch"
                id="switch"
                className="mr-2"
                onChange={handleSwitchChange}
                checked={isSwitchChecked}
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

export default Factura;
