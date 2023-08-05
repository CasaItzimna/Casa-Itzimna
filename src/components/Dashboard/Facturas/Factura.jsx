import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { AppContext } from "@/context/StateContext";
import Image from "next/image";
import bote from '../../../assets/Icons/bote.png'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




function Factura({ factura, index  }) {

  
  const { updateFactura, deleteFactura } = AppContext();

  const [showModal, setShowModal] = useState(false);

  const{getFacturas} = AppContext()

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const [formData, setFormData] = useState({
    name: factura.name,
    phone: factura.phone,
    email: factura.email,
    date: factura.date,
    id_fiscal: factura.id_fiscal,
    pais: factura.pais,
    calle: factura.calle,
    ciudad: factura.ciudad,
    codigo_postal: factura.codigo_postal,
    state: factura.state,
    total: factura.total,
  });


  useEffect(() => {
    setFormData({
      name: factura.name,
    phone: factura.phone,
    email: factura.email,
    date: factura.date,
    id_fiscal: factura.id_fiscal,
    pais: factura.pais,
    calle: factura.calle,
    ciudad: factura.ciudad,
    codigo_postal: factura.codigo_postal,
    state: factura.state,
    total: factura.total,
    });
  }, [factura]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteClick = async () => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará la factura. ¡Esta acción no se puede deshacer!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      });
  
      if (result.isConfirmed) {
        // Aquí realizar la eliminación de la factura
        await deleteFactura(factura._id);
        console.log('factura eliminada');
        getFacturas();
  
        Swal.fire('Eliminada', 'La factura ha sido eliminada', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario ha cancelado la eliminación
        Swal.fire('Cancelado', 'La eliminación ha sido cancelada', 'error');
      }
    } catch (error) {
      console.error('Error al eliminar factura:', error);
      Swal.fire('Error', 'Ha ocurrido un error al eliminar la factura', 'error');
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
  
    // Mostrar una alerta de confirmación antes de enviar los datos actualizados
    const confirmationResult = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas actualizar la factura?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
    });
  
    if (confirmationResult.isConfirmed) {
      try {
        const respuesta = await updateFactura(factura._id, updatedFormData);
        console.log('la respuesta fue', respuesta);
  
        setShowModal(false);
  
        // Mostrar una alerta de éxito si la actualización fue exitosa
        Swal.fire('Actualizada', 'La factura ha sido actualizada correctamente', 'success');
      } catch (error) {
        console.log(error);
  
        // Mostrar una alerta de error si la actualización falló
        Swal.fire('Error', 'Ha ocurrido un error al actualizar la factura', 'error');
      }
    } else {
      // El usuario ha cancelado la actualización
      Swal.fire('Cancelada', 'La actualización ha sido cancelada', 'info');
    }
  
    await getFacturas();
  };


 

  console.log(factura)

  return (
    <>
     <tr key={factura.id} className={`${index % 2 === 0 ? 'bg-[#e7e4df] ' : 'bg-white'} `}>
  <td className="text-left font-apollo uppercase tracking-[2px] text-sm pl-2">{factura.name}</td>
  <td className="font-apollo uppercase tracking-[2px] text-sm  hidden xl:table-cell">{factura.phone}</td>
{/*   <td className="font-apollo uppercase tracking-[2px] text-sm hidden lg:table-cell ">{factura.email}</td>
 */}  <td className="font-apollo uppercase tracking-[2px] text-sm hidden xl:table-cell ">{factura.id_fiscal}</td>
  <td className="font-apollo uppercase tracking-[2px] text-sm hidden xl:table-cell ">{factura.date}</td>
  <td className="font-apollo uppercase tracking-[2px] text-sm hidden md:table-cell">{factura.state ? "pendiente" : "enviada"}</td>
  <td className="font-apollo uppercase tracking-[2px] text-sm  "><button className="py-2 px-2 cursor-pointer" onClick={()=>setShowModal(true)}>Ver Detalle</button></td>

 
</tr>

<Modal show={showModal} onClose={handleCloseModal}>
        <div className="p-6 ">
          <h2 className="text-xl mb-4 font-apollo uppercase tracking-[2px]">Editar factura de {factura.name}</h2>
          <div>
            <form
              className="flex flex-col h-full w-full font-Geometrica"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 mt-2 "
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
                name="id_fiscal"
                id="id_fiscal"
                className="border-2 mt-2"
                placeholder="id_fiscal"
                onChange={handleInputChange}
                value={formData.id_fiscal}
                required
              />
              <input
          type="text"
          name="calle"
          id="calle"
          className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
          placeholder= "calle"
          onChange={handleInputChange}
          value={formData.calle}
          required
        />
           <input
          type="text"
          name="ciudad"
          id="ciudad"
          className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2   border-[1px] py-1 border-[#d3cbc0]"
          placeholder= "ciudad"
          onChange={handleInputChange}
          value={formData.ciudad}
          required
        />
      

        <input
          type="text"
          name="pais"
          id="pais"
          className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#d3cbc0]"
          placeholder= "pais"
          onChange={handleInputChange}
          value={formData.pais}
          required
        />

     

        <input
          type="text"
          name="codigo_postal"
          id="codigo_postal"
          className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#d3cbc0]"
          placeholder= "codigo postal"
          onChange={handleInputChange}
          value={formData.codigo_postal}
          required
        />
              <input
                type="number"
                name="total"
                id="total"
                className="border-2 mt-2 mb-2"
                placeholder="total"
                onChange={handleInputChange}
                value={formData.total}
                required
              />
              <label htmlFor="switch">
                {isSwitchChecked ? "RECIBIDA" : "ENVIADA"}
              </label>
              <div className="flex flex-row w-[50px]">

              <input
                type="checkbox"
                name="switch"
                id="switch"
                className="mr-2"
                onChange={handleSwitchChange}
                checked={isSwitchChecked}
              />
              </div>
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
              onClick={handleDeleteClick}
            >
              Eliminar 
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


     
    </>
  );
}

export default Factura;
