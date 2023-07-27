import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";
import Reservacion from "./Reservaciones/Reservacion";
import triangulo from '../../assets/Icons/triangulo.png'
import Image from "next/image";
import Modal from "./Modal/Modal";
import { useState } from "react";

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
    reservaciones.sort(compararPorCheckin)
    setReservacionesCheckin(reservaciones)
  }, [])

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

  
  
 
  

  return (
     <div className="h-full flex flex-row justify-center ">
      <div className="h-full flex flex-col justify-center">
      
      <div className="  flex flex-col lg:flex-row justify-between lg:mt-8">

    <h2 className="text-2xl font-apollo tracking-[2px] mb-8">Reservaciones</h2>
    <div className="h-full flex flex-row gap-4">
      <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2">STATUS <Image src={triangulo} alt="triangulo icon" className="w-[9px] h-[7px] "/> </div>
      <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer"
      onClick={()=>setShowModal(true)}
      >+ AGREGAR </div>
    </div>
      </div>
    <div className="h-full grid grid-cols-1 md:grid-cols-2 mt-8 lg:mt-0 gap-4 lg:overflow-y-scroll">

    
    {isLoading ? (
  <p>Cargando Reservaciones...</p>
) : (
 
  reservacionesCheckin && reservacionesCheckin.length > 0 ? (
    reservacionesCheckin.map((reservacion) => (
      <Reservacion key={reservacion._id} reservacion={reservacion} />
    ))
    
  ) : (
    <span>No hay reservaciones</span>
  )
)}
</div>
  </div>
  <Modal show={showModal} onClose={handleCloseModal}>
            <div className="p-6">
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
