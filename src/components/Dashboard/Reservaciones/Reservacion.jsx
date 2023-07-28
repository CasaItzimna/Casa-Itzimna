import React, { useEffect, useState } from "react";
import { AppContext } from "@/context/StateContext";
import Modal from "../Modal/Modal";

import bote from "../../../assets/Icons/bote.png";
import editar from "../../../assets/Icons/editar.png";
import Image from "next/image";

function Reservacion({ reservacion }) {
  const { updateReservacion, deleteReservacion } = AppContext();

  const [showModal, setShowModal] = useState(false);
  const [experiences, setExperiences] = useState([]);



  const { getReservaciones } = AppContext();

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(reservacion)

  const [formData, setFormData] = useState({
    name: reservacion.name,
    tel: reservacion.tel,
    email: reservacion.email,
    guests: reservacion.guests,
    checkin: reservacion.checkin,
    checkout: reservacion.checkout,
    plan: reservacion.plan,
    experience: reservacion.experience,
    comments: reservacion.comments,
    status: reservacion.status,
    idioma: reservacion.idioma,
    total: reservacion.total,
  });

  useEffect(() => {
    setFormData({
      name: reservacion.name,
      tel: reservacion.tel,
      email: reservacion.email,
      guests: reservacion.guests,
      checkin: reservacion.checkin,
      checkout: reservacion.checkout,
    plan: reservacion.plan,
    experience: reservacion.experience,
      comments: reservacion.comments,
      status: reservacion.status,
      idioma: reservacion.idioma,
      total: reservacion.total,
    });
  }, [reservacion]);

  useEffect(() => {
    if(reservacion.experience){
    setExperiences(reservacion.experience)
    }
  }, [reservacion.experience])
  
  
  

  const handleExperienceChange = (e) => {
    const selectedValue = e.target.value;
    if (e.target.checked) {
      // Agregar experiencia seleccionada
      setExperiences([...experiences, selectedValue]);
    } else {
      // Eliminar experiencia deseleccionada
      setExperiences(experiences.filter((experience) => experience !== selectedValue));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteClick = async () => {
    try {
      await deleteReservacion(reservacion._id);
      console.log("Reservacion eliminada");
      getReservaciones();
    } catch (error) {
      console.error("Error al eliminar reservacion:", error);
    }
  };

  const handleSwitchChange = (event) => {
    setIsSwitchChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
    };
    updatedFormData.experience = experiences
    console.log(updatedFormData);
    try {
      console.log(reservacion._id);
      const respuesta = await updateReservacion(
        reservacion._id,
        updatedFormData
      );
      console.log("la respuesta fue", respuesta);

      setShowModal(false);
    } catch (error) {
      console.log(error);
    }

    await getReservaciones();
  };

  

  console.log(reservacion);

  return (
    <div className="w-[350px] h-[235px] rounded-[7px] border-[2px] bg-white">
      <div className="w-full flex flex-row justify-center">
        <div className="w-[90%] flex flex-col gap-1">
          <div className="flex flex-row justify-between">
            <span className="uppercase font-apollo tracking-[2px] mt-4 text-lg">
              {reservacion.name}
            </span>
            <button onClick={handleEditClick}>
              <Image src={editar} alt="editar button" className="w-[20px]" />{" "}
            </button>
          </div>
          <p className="font-apollo uppercase text-sm">
            {reservacion.checkin} - {reservacion.checkout}
          </p>
          <p className="font-apollo uppercase text-sm">
            {reservacion.guests} Húespedes
          </p>
          <p className="font-apollo uppercase text-sm">
            PLAN: {reservacion.plan}
          </p>
          {console.log(reservacion.experience)}
          <p className="font-apollo uppercase text-sm">
            EXTRA: {experiences.map((exp,index)=>(
              <span key={index} className="mr-2">{exp}</span>
            ))}
          </p>
          <p className="font-apollo uppercase text-sm">
            teléfono: {reservacion.tel}{" "}
          </p>
          <p className="font-apollo uppercase text-sm">
            e-mail: {reservacion.email}{" "}
          </p>
          <div className="flex flex-row justify-between mb-4">
            <div>
              <button onClick={handleDeleteClick} className="mt-2">
                <Image src={bote} alt="editar button" className="w-[15px] " />
              </button>
            </div>

            <div>
              <button
                onClick={handleDeleteClick}
                className="font-Geometrica tracking-[2px] bg-[#d3cbc0] px-4 py-1 rounded-[7px]"
              >
                MAILING
              </button>
            </div>
          </div>

          <Modal show={showModal} onClose={handleCloseModal} className="">
            <div className="p-6  ">
              <h2 className="text-xl mb-4">
                Editar reservacion de {reservacion.name}
              </h2>
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
                    name="tel"
                    id="tel"
                    className="border-2 mt-2"
                    placeholder="tel"
                    onChange={handleInputChange}
                    value={formData.tel}
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
                    type="text"
                    name="guests"
                    id="guests"
                    className="border-2 mt-2"
                    placeholder="guests"
                    onChange={handleInputChange}
                    value={formData.guests}
                    required
                  />
                  <input
                    type="date"
                    name="checkin"
                    id="checkin"
                    className="border-2 mt-2"
                    placeholder="checkin date"
                    onChange={handleInputChange}
                    value={formData.checkin}
                    required
                  />
                  <input
                    type="date"
                    name="checkout"
                    id="checkout"
                    className="border-2 mt-2"
                    placeholder="checkout date"
                    onChange={handleInputChange}
                    value={formData.checkout}
                    required
                  />

<select
  name="plan"
  id="plan"
  className="border-2 mt-2"
  onChange={handleInputChange}
  value={formData.plan}
  required
>
  <option value="">Seleccionar plan</option>
  <option value="select">Select</option>
  <option value="luxury">Luxury</option>
  <option value="premier">Premier</option>
</select>

<div className="flex flex-row  gap-4 col-span-2 mt-4">
                  <div className="flex flex-col ">

                  <h3 className="uppercase ">Experiences:</h3>
                  <div className="flex flex-row gap-4 mb-4">
                    
                  
      <label className="block">
        {console.log(experiences)}
        <input
          type="checkbox"
          value="cena"
          checked={experiences.includes("cena")}
          onChange={handleExperienceChange}
          className=""
        />
        CENA ROMANTICA
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="recorrido"
          checked={experiences.includes("recorrido")}
          onChange={handleExperienceChange}
          className="uppercase"
        />
        RECORRIDO
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="spa"
          checked={experiences.includes("spa")}
          onChange={handleExperienceChange}
          className="uppercase"
        />
        SPA
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="comidas"
          checked={experiences.includes("comidas")}
          onChange={handleExperienceChange}
          className="uppercase"
        />
        COMIDAS
      </label>
     
      
      </div>
      </div>
    </div>
                  
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
                 <select
  name="status"
  id="status"
  className="border-2 mt-2"
  onChange={handleInputChange}
  value={formData.status}
  required
>
  <option value="">Seleccionar estado</option>
  <option value="pendiente">Pendiente</option>
  <option value="aprobada">Aprobada</option>
  <option value="cancelada">Cancelada</option>
</select>
                </form>
              </div>
              <div className="flex flex-row justify-between">
                <button
                  className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Guardar
                </button>
                <button
                  className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Reservacion;
