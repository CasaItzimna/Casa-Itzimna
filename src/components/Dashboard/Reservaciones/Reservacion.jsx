import React, { useEffect, useState } from "react";
import { AppContext } from "@/context/StateContext";
import Modal from "../Modal/Modal";

import bote from "../../../assets/Icons/bote.png";
import editar from "../../../assets/Icons/editar.png";
import Image from "next/image";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from '@emailjs/browser';


function Reservacion({ reservacion }) {
  const { updateReservacion, deleteReservacion } = AppContext();

  const [showModal, setShowModal] = useState(false);
  const [experiences, setExperiences] = useState([]);
    const [selectedOption, setSelectedOption] = useState("pendiente")




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
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la reservación. ¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      // Aquí realizar la eliminación de la reservación
      await deleteReservacion(reservacion._id);
      console.log('Reservacion eliminada');
      getReservaciones();

      Swal.fire('Eliminada', 'La reservación ha sido eliminada', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // El usuario ha cancelado la eliminación
      Swal.fire('Cancelado', 'La eliminación ha sido cancelada', 'error');
    }
  } catch (error) {
    console.error('Error al eliminar reservacion:', error);
    Swal.fire('Error', 'Ha ocurrido un error al eliminar la reservación', 'error');
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
    updatedFormData.experience = experiences;
    console.log(updatedFormData);
  
    // Mostrar una alerta de confirmación antes de enviar los datos actualizados
    const confirmationResult = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas actualizar la reservación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
    });
  
    if (confirmationResult.isConfirmed) {
      try {
        console.log(reservacion._id);
        const respuesta = await updateReservacion(reservacion._id, updatedFormData);
        console.log('la respuesta fue', respuesta);
  
        setShowModal(false);
  
        // Mostrar una alerta de éxito si la actualización fue exitosa
        Swal.fire('Actualizada', 'La reservación ha sido actualizada correctamente', 'success');
      } catch (error) {
        console.log(error);
  
        // Mostrar una alerta de error si la actualización falló
        Swal.fire('Error', 'Ha ocurrido un error al actualizar la reservación', 'error');
      }
    } else {
      // El usuario ha cancelado la actualización
      Swal.fire('Cancelada', 'La actualización ha sido cancelada', 'info');
    }
  
    await getReservaciones();
  };

  const handleSelectChange = async (event) => {
    setSelectedOption(event.target.value);
    const newEstado = event.target.value;

    // Actualizar el campo estado en el formData
    const updatedFormData = { ...formData, status: newEstado };

    // Mostrar alerta de confirmación antes de actualizar la venta
    const result = await Swal.fire({
        title: 'Confirmar Cambio de Estado',
        text: `¿Estás seguro de cambiar el estado de la reservacion a "${newEstado}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
        try {
          await updateReservacion(reservacion._id, updatedFormData);
          emailjs.init("F9ctTSenSvQgRvd69");
          console.log(reservacion)
          if(newEstado == "confirmado"){
            const params = {
              texto1confirmed:"CONFIRMED RESERVATION",
              texto2confirmed:"THANK YOU FOR CHOOSING CASA ITZIMNÁ",
              texto3confirmed: "WE ARE DELIGHTED TO CONFIRM YOUR RESERVATION FROM ",
              from_name_confirmed: reservacion.name,
              checkin_confirmed: reservacion.checkin,
              checkout_confirmed: reservacion.checkout,
              from_email: reservacion.email,
              email_cc: "boutiquecasaitzimna@gmail.com",
              subject: "CONFIRMED RESERVATION"
              
            };
            emailjs
            .send("service_d5x4xeq", "template_15qv37j", params)
            .then((response) => {
              console.log("Correo electrónico enviado exitosamente:", response);
            })
            .catch((error) => {
              console.error("Error al enviar el correo electrónico:", error);
            });
          }  
          if(newEstado == "cancelado"){
            const params = {
              texto1canceled:"RESERVATION CANCELED",
              texto2canceled:"THANK YOU FOR CHOOSING CASA ITZIMNÁ",
              texto3canceled: "UNFORTUNATELY, WE HAD TO CANCEL YOUR RESERVATION. PLEASE GET IN TOUCH WITH US FOR YOUR REFOUND. ",
              from_name_canceled: reservacion.name,
              from_email: reservacion.email,
              email_cc: "boutiquecasaitzimna@gmail.com",
              subject: "RESERVATION CANCELED"
              
            };
            emailjs
            .send("service_d5x4xeq", "template_15qv37j", params)
            .then((response) => {
              console.log("Correo electrónico enviado exitosamente:", response);
            })
            .catch((error) => {
              console.error("Error al enviar el correo electrónico:", error);
            });
          }  
          if(newEstado == "finalizado"){
            const params = {
              texto1finished:"RESERVATION COMPLETED",
              texto2finished:"THANK YOU FOR CHOOSING CASA ITZIMNÁ",
              texto3finished: "YOUR RESERVACTION HAS BEEN COMPLETED. WE APPRECIATE YOUR PREFERENCE.",
              from_email: reservacion.email,
              email_cc: "boutiquecasaitzimna@gmail.com",
              subject: "THANK YOU FOR CHOOSING CASA ITZIMNÁ"
              
            };
            emailjs
            .send("service_d5x4xeq", "template_15qv37j", params)
            .then((response) => {
              console.log("Correo electrónico enviado exitosamente:", response);
            })
            .catch((error) => {
              console.error("Error al enviar el correo electrónico:", error);
            });
          }  
            Swal.fire({
                title: 'Estado Actualizado',
                text: `El estado de la reservacion ha sido cambiado a "${newEstado}"`,
                icon: 'success',
            });
        } catch (error) {
            console.error('Error al actualizar la reservacion:', error);
            Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error al actualizar la reservacion',
                icon: 'error',
            });
            // Restaurar el valor seleccionado anteriormente
            setSelectedOption(formData.status);
        }
    } else {
        // Restaurar el valor seleccionado anteriormente
        setSelectedOption(formData.status);
    }
};


  

  

  console.log(reservacion);

  return (
    <div className="w-[350px] h-[280px] rounded-[7px] border-[2px] bg-white">
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
              <span key={index} className="mr-2">{exp.nombre}</span>
            ))}
          </p>
          <p className="font-apollo uppercase text-sm">
            teléfono: {reservacion.tel}{" "}
          </p>
          <p className="font-apollo uppercase text-sm">
            e-mail: {reservacion.email}{" "}
          </p>
          {console.log(reservacion)}
          <p className="font-apollo uppercase text-sm">
            estado: {reservacion.status}{" "}
          </p>
          <div className="flex flex-row justify-between mb-4">
            <div className="flex ">
              <button onClick={handleDeleteClick} className="mt-2">
                <Image src={bote} alt="editar button" className="w-[15px] " />
              </button>
            </div>

            <div>
              {
                console.log(reservacion.status)
              }
            <select
        value={reservacion.status}
        onChange={handleSelectChange}
        className="mt-2  border bg-[#d3cbc0] text-center py-1 rounded uppercase"
      >
        <option className='uppercase' value="">Seleccionar opción</option>
        <option className='uppercase' value="pendiente">Pendiente</option>
        <option className='uppercase' value="confirmado">Confirmado</option>
        <option className='uppercase' value="cancelado">Cancelado</option>
        <option className='uppercase' value="finalizado">Finalizado</option>
      </select>
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
