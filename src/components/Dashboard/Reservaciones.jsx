import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";
import Reservacion from "./Reservaciones/Reservacion";
import triangulo from '../../assets/Icons/triangulo.png'
import Image from "next/image";
import Modal from "./Modal/Modal";
import { useState } from "react";
import fondo from './img/fondo.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Reservaciones = () => {


  const {getReservaciones, postReservacion, reservaciones, isLoading} = AppContext()
  
  function compararPorCheckin(a, b) {
    const fechaCheckinA = new Date(a.checkin);
    const fechaCheckinB = new Date(b.checkin);
    return fechaCheckinA - fechaCheckinB;
  }

  const [reservacionesCheckin, setReservacionesCheckin] = useState([])

  useEffect(() => {
    getReservaciones()
   
   
  }, [])

  useEffect(() => {
    if(reservaciones){
      reservaciones.sort(compararPorCheckin)
      setReservacionesCheckin(reservaciones)
    }
  }, [reservaciones])
  

  const [experiences, setExperiences] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [addFormData, setAddFormData] = useState({
    name: '',
    tel: 0,
    email: "",
    guests: "1-2",
    checkin:null,
    checkout:null,
    plan: "",
    experience: [],
    comments: "",
    status: "",
    idioma: "ES",
    total: 0,
  });

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

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("esto es lo que vamos a mandar" + addFormData)
    addFormData.experience = experiences

    try {
      const respuesta = await postReservacion(addFormData);
      console.log('la respuesta fue', respuesta)
     
      getReservaciones()
      setShowModal(false);
      
     
      
    } catch (error) {
      console.log(error)
    }

   
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  const [currentPage, setCurrentPage] = useState(1)

  const reservacionesPerPage = 5
  const indexOfLastReservacion = currentPage * reservacionesPerPage
  const indexOfFirstReservacion  = indexOfLastReservacion - reservacionesPerPage
  const currentReservaciones = reservacionesCheckin?.slice(indexOfFirstReservacion, indexOfLastReservacion )

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  
  
 
  

  return (
     <div className="h-full flex flex-row justify-center relative ">
        <Image src={fondo} alt="fondo img" className="absolute hidden lg:flex object-cover top-0 h-full w-full left-0 z-0" />
      <div className="h-full flex flex-col justify-center z-10">
      
      <div className="  flex flex-col lg:flex-row justify-between lg:mt-8">

    <h2 className="text-2xl lg:text-4xl  font-apollo tracking-[2px] mb-8 lg:text-white">Reservaciones</h2>
    <div className="h-full flex flex-row gap-4">
      <div className="hidden border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2 bg-white">STATUS <Image src={triangulo} alt="triangulo icon" className="w-[9px] h-[7px] "/> </div>
      <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer bg-white"
      onClick={()=>setShowModal(true)}
      >+ AGREGAR </div>
    </div>
      </div>
    <div className="  grid grid-cols-1 md:grid-cols-2  mt-8 lg:mt-0 gap-4 lg:overflow-y-scroll ">

    
    {isLoading ? (
  <p>Cargando Reservaciones...</p>
) : (
 
  currentReservaciones && currentReservaciones.length > 0 ? (
    currentReservaciones.map((reservacion) => (
      <Reservacion key={reservacion._id} reservacion={reservacion} />
    ))
    
    
    
  ) : (
    <div className="w-[350px] h-[350px]">
    <span className="lg:text-white">No hay reservaciones</span>
      </div>
  )
)}
</div>
<div  className="flex flex-row justify-center gap-8 mt-8 mb-8">

<button onClick={handlePrevPage} >
        <FaArrowLeft className={currentPage == 1? "hidden":"text-[#d3cbc0] lg:text-white text-3xl"}/>
      </button>
      <button onClick={handleNextPage} >
        <FaArrowRight className={currentReservaciones.length < reservacionesPerPage? "hidden": "text-[#d3cbc0] lg:text-white text-3xl "}/>
      </button>
</div>
  </div>
  <Modal show={showModal} onClose={handleCloseModal}>
            <div className="p-6 ">
              <h2 className="text-xl mb-4">
                Crear Reservacion
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
                    value={addFormData.name}
                    required
                  />
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="border-2 mt-2"
                    placeholder="tel"
                    onChange={handleInputChange}
                    value={addFormData.tel}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 mt-2"
                    placeholder="email"
                    onChange={handleInputChange}
                    value={addFormData.email}
                    required
                  />
                  <input
                    type="text"
                    name="guests"
                    id="guests"
                    className="border-2 mt-2"
                    placeholder="guests"
                    onChange={handleInputChange}
                    value={addFormData.guests}
                    required
                  />
                  <input
                    type="date"
                    name="checkin"
                    id="checkin"
                    className="border-2 mt-2"
                    placeholder="checkin date"
                    onChange={handleInputChange}
                    value={addFormData.checkin}
                    required
                  />
                  <input
                    type="date"
                    name="checkout"
                    id="checkout"
                    className="border-2 mt-2"
                    placeholder="checkout date"
                    onChange={handleInputChange}
                    value={addFormData.checkout}
                    required
                  />
                  <select
  name="plan"
  id="plan"
  className="border-2 mt-2"
  onChange={handleInputChange}
  value={addFormData.plan}
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
                    value={addFormData.comments}
                    required
                  />
                  <input
                    type="string"
                    name="total"
                    id="total"
                    className="border-2 mt-2"
                    placeholder="total"
                    onChange={handleInputChange}
                    value={addFormData.total}
                    required
                  />
                 <select
  name="status"
  id="status"
  className="border-2 mt-2"
  onChange={handleInputChange}
  value={addFormData.status}
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
  );
};

export default Reservaciones;
