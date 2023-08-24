import { AppContext } from '@/context/StateContext';
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from "../Modal/Modal";
import { client, urlFor } from "../../../lib/client";

import Swal from 'sweetalert2'

import bote from "../../../assets/Icons/bote.png";
import editar from "../../../assets/Icons/editar.png";

function Producto({producto}) {
  console.log(producto)

  const {getProductos, updateProducto, deleteProducto} = AppContext();
  

  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("pendiente")


  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(producto)

 
  

  const [formData, setFormData] = useState({
    name: producto?.name,
    artist: producto?.artist,
    slug: producto?.slug,
    details: producto?.details,
    detailsENG: producto?.detailsENG,
    description: producto?.description,
    descriptionENG: producto?.descriptionENG,
    Shipping: producto?.shipping,
    ShippingENG: producto?.shippingENG,
    category: producto?.cateogry,
    price: producto?.price,
    cantidad: producto?.cantidad,
    imagen: producto?.imagen,
    archivo: producto?.archivo

  });

  useEffect(() => {
    setFormData({
        name: producto?.name,
        artist: producto?.artist,
        slug: producto?.slug,
        details: producto?.details,
        detailsENG: producto?.detailsENG,
        description: producto?.description,
        descriptionENG: producto?.descriptionENG,
        Shipping: producto?.shipping,
        ShippingENG: producto?.shippingENG,
        category: producto?.cateogry,
        price: producto?.price,
        cantidad: producto?.cantidad,
        imagen: producto?.imagen,
        archivo: producto?.archivo
    });
  }, [producto]);

  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    const newEstado = event.target.value;

    // Actualizar el campo estado en el formData
    const updatedFormData = { ...formData, estado: newEstado };
  
    // Llamar a la función para actualizar la venta
    updateProducto(producto._id, updatedFormData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleDeleteClick = async () => {
  try {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto. ¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      const deletionSuccessful = await deleteProducto(producto._id);

      if (deletionSuccessful) {
        console.log('Producto eliminado');
        getProductos();
        Swal.fire('Eliminada', 'El producto ha sido eliminada', 'success');
      } else {
        Swal.fire('Error', 'No se pudo eliminar la venta', 'error');
      }

      Swal.fire('Eliminada', 'El producto ha sido eliminado', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // El usuario ha cancelado la eliminación
      Swal.fire('Cancelado', 'La eliminación ha sido cancelada', 'error');
    }
  } catch (error) {
    console.error('Error al eliminar venta:', error);
    Swal.fire('Error', 'Ha ocurrido un error al eliminar el producto', 'error');
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
    };
    console.log(updatedFormData);
  
    // Mostrar una alerta de confirmación antes de enviar los datos actualizados
    const confirmationResult = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas actualizar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
    });
  
    if (confirmationResult.isConfirmed) {
      try {
        console.log(producto._id);
        const respuesta = await updateProducto(producto._id, updatedFormData);
        console.log('la respuesta fue', respuesta);
  
        setShowModal(false);
  
        // Mostrar una alerta de éxito si la actualización fue exitosa
        Swal.fire('Actualizado', 'El producto ha sido actualizado correctamente', 'success');
      } catch (error) {
        console.log(error);
  
        // Mostrar una alerta de error si la actualización falló
        Swal.fire('Error', 'Ha ocurrido un error al actualizar el producto', 'error');
      }
    } else {
      // El usuario ha cancelado la actualización
      Swal.fire('Cancelada', 'La actualización ha sido cancelada', 'info');
    }
  
  };

  const [category, setCategory] = useState(null);


  useEffect(() => {
    client
      .fetch(`*[_id == "${producto?.category._ref}"]`)
      .then(category => {console.log(category[0]);setCategory(category[0])})
  }, [producto.category._ref]);
  console.log(category)
  
  

  return (
    <div className="w-[350px] h-[280px] md:h-[350px] rounded-[7px] border-[2px] bg-white">
      {
        producto &&
        <div className="w-full flex flex-row justify-center">
        <div className="w-[90%] flex flex-col gap-1">
          <div className="flex flex-row justify-between ">
            <span className="uppercase font-apollo tracking-[2px] mt-4 text-lg">
              {producto?.name}
            </span>
            <button onClick={handleEditClick}>
              <Image src={editar} alt="editar button" className="w-[20px]" />{" "}
            </button>
          </div>
          <div className='flex flex-row justify-between gap-8'>
            <div className='w-[50%] h-full'>
            <img src={urlFor(producto?.image[0]?.asset._ref)} alt='imagen producto' className='w-[150px] h-[150px] md:w-[200px] md:h-[230px]  object-contain'   /> 
            </div>
            <div className='w-[50%] flex flex-col justify-center  '>
          
          <p className="font-apollo uppercase text-sm">
          Fecha: {producto?._createdAt.substring(0,10)} 
          </p>
          <p className="font-apollo uppercase text-sm">
            Precio: ${producto?.price}
          </p>
          <p className="font-apollo uppercase text-sm">
            Artist: {producto?.artist}
          </p>
          <p className="font-apollo uppercase text-sm">
            Categoria: {category?.title }
          </p>
          </div>
          </div>
          <div className="flex flex-row justify-between mb-4">
            <div className='flex '>
              <button onClick={handleDeleteClick} className="mt-2">
                <Image src={bote} alt="editar button" className="w-[15px] " />
              </button>
            </div>

            <div>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="mt-2 border bg-[#d3cbc0] text-center py-1 rounded uppercase"
      >
        <option className='uppercase' value="">Seleccionar opción</option>
        <option className='uppercase' value="pendiente">Pendiente</option>
        <option className='uppercase' value="confirmado">Confirmado</option>
        <option className='uppercase' value="cancelado">Cancelado</option>
        <option className='uppercase' value="enviado">Enviado</option>
        <option className='uppercase' value="finalizado">Finalizado</option>
      </select>
      
    </div>
          </div>

          <Modal show={showModal} onClose={handleCloseModal} className="">
            <div className="p-6  ">
              <h2 className="text-xl mb-4">
                Editar producto
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
                    placeholder="nombre"
                    onChange={handleInputChange}
                    value={formData.name}
                    required
                  />
                  <input
                    type="text"
                    name="artist"
                    id="artist"
                    className="border-2 mt-2"
                    placeholder="artist"
                    onChange={handleInputChange}
                    value={formData.artist}
                    required
                  />
                  {
                    console.log(producto.slug)
                  }
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    className="border-2 mt-2"
                    placeholder="slug"
                    onChange={handleInputChange}
                    value={formData.slug.current}
                    required
                  />
                  
                  <textarea
                    type="text"
                    name="details"
                    id="details"
                    className="border-2 mt-2"
                    placeholder="detalles"
                    onChange={handleInputChange}
                    value={formData.details}
                    required
                  />
                  <textarea
                    type="text"
                    name="detailsENG"
                    id="detailsENG"
                    className="border-2 mt-2"
                    placeholder="detallesENG"
                    onChange={handleInputChange}
                    value={formData.detailsENG}
                    required
                  />
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    className="border-2 mt-2"
                    placeholder="descripcion"
                    onChange={handleInputChange}
                    value={formData.description}
                    required
                  />
                  <textarea
                    type="text"
                    name="descriptionENG"
                    id="descriptionENG"
                    className="border-2 mt-2"
                    placeholder="descripcion ENG"
                    onChange={handleInputChange}
                    value={formData.descriptionENG}
                    required
                  />
                  <textarea
                    type="text"
                    name="shipping"
                    id="shipping"
                    className="border-2 mt-2"
                    placeholder="envio"
                    onChange={handleInputChange}
                    value={formData.shipping}
                    required
                  />
                  <textarea
                    type="text"
                    name="shippingENG"
                    id="shippingENG"
                    className="border-2 mt-2"
                    placeholder="envio ENG"
                    onChange={handleInputChange}
                    value={formData.shippingENG}
                    required
                  />
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="border-2 mt-2"
                    placeholder="category"
                    onChange={handleInputChange}
                    value={category?.title}
                    required
                  />
                
                 <select
  name="estado"
  id="estado"
  className="border-2 mt-2"
  onChange={handleInputChange}
  value={formData.estado}
  required
>
<option className='uppercase' value="">Seleccionar opción</option>
        <option className='uppercase' value="pendiente">Pendiente</option>
        <option className='uppercase' value="confirmado">Confirmado</option>
        <option className='uppercase' value="cancelado">Cancelado</option>
        <option className='uppercase' value="enviado">Enviado</option>
        <option className='uppercase' value="finalizado">Finalizado</option>
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
      }
      </div>
      
  );
}

export default Producto