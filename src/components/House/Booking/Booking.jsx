import Image from "next/image";
import React, { useEffect, useState } from "react";
import bookingfoto from "./Booking.jpg";
import trianguloAb from "./trianguloAb.png";
import Link from "next/link";
import Calendario from "@/components/Home/Modal/Calendario";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AppContext } from "@/context/StateContext";
import { differenceInDays, isValid } from "date-fns";
import { useRouter } from "next/router";
import emailjs from '@emailjs/browser';
import Experiencias from "./Experiencias";

function Booking({ json }) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [guestsPrecio, setGuestsPrecio] = useState(0);
  const [plan, setPlan] = useState("");
  const [planPrecio, setPlanPrecio] = useState(14100);
  const [experiences, setExperiences] = useState([]);
  const [experiencesPrecio, setExperiencesPrecio] = useState(0);
  
  const {carritoReservaciones, setCarritoReservaciones, getFechas, fechas, moneda, usdRate,
    eurRate,} = AppContext();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };

  const handleCheckinChange = (event) => {
    setCheckin(event.target.value);
  };

  const handleCheckoutChange = (event) => {
    setCheckout(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleExperienceChange = experiencia => {
    const experienceIndex = experiences.findIndex((exp) => exp._id === experiencia._id);

    if (experienceIndex === -1) {
      // Agregar experiencia seleccionada
      setExperiences([...experiences, experiencia]);
    } else {
      const updatedExperiences = experiences.filter((exp) => exp._id !== experiencia._id);
      setExperiences(updatedExperiences);
    }
  };

  /* const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }; */

  const router = useRouter();

  const { postReservacion } = AppContext();

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    guests: "",
    checkin: "",
    checkout: "",
    comments: "",
    total: "",
  });
  const [precio, setPrecio] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (success) {
      // Mostrar el mensaje durante 5 segundos
      const timeout = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      // Limpiar el timeout cuando el componente se desmonte
      return () => clearTimeout(timeout);
    }
  }, [success]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const options = { weekday: "long" };

  const today = new Date();
  const todayName = today?.toLocaleDateString("en-US", options);
  const [inicio, setInicio] = useState(null);
  const inicioName = inicio?.toLocaleDateString("en-US", options);
  const [fin, setFin] = useState(null);
  const finName = fin?.toLocaleDateString("en-US", options);
  const [hoy, setHoy] = useState(new Date(today));
  const hoyName = hoy?.toLocaleDateString("en-US", options);
  const dateAfterThreeDays = new Date(today);
  dateAfterThreeDays.setDate(today.getDate() + 3);
  const [despues, setDespues] = useState(dateAfterThreeDays);
  const despuesName = despues?.toLocaleDateString("en-US", options);
  const [totalDiasHoy, setTotalDiasHoy] = useState(differenceInDays(despues, hoy) );
  const [totalDiasInicio, setTotalDiasInicio] = useState(differenceInDays(fin, inicio) );
  /*   const [total, setTotal] = useState(differenceInDays(despues, hoy) * precio);
 */
const [total, setTotal] = useState(0)



  const [show, setShow] = useState(false);

  const [selectedGuests, setSelectedGuests] = useState("1-2");

  const handlePackageChange = (event) => {
    setSelectedGuests(event.target.value);
  };

  const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  useEffect(() => {
   getFechas()
  }, [])
  

  useEffect(() => {
    if (inicio && fin) {
      const fechasEnRango = fechas.filter(fecha => fecha >= inicio && fecha <= fin);
      setTotalDiasInicio(differenceInDays(fin, inicio))
    }
  }, [inicio, fin]);

  useEffect(() => {
    if (inicio) {
      formData.checkin = inicio;
    }
    if (fin) {
      formData.checkout = fin;
    }
    if (inicio && fin) {

      formData.total = parseInt(total);
    }
  }, [inicio, fin, total]);

  useEffect(() => {
    localStorage.setItem("guests", "1-2");
  }, []);

  useEffect(() => {
    if(plan == "select"){
      setPlanPrecio(14100)
    }
    if(plan == "luxury"){
      setPlanPrecio(17900)
    }
    if(plan == "premier"){
      setPlanPrecio(20900)
    }
    if(selectedGuests == "7-+"){
      setGuestsPrecio(2000)
    }
    if(selectedGuests == "1-2"){
      setGuestsPrecio(0)
    }
    if(selectedGuests == "3-6"){
      setGuestsPrecio(0)
    }
    let totalExperiencesPrecio = 0;
    if(experiences.length>0){
      for(var i = 0; i<= experiences.length; i++){
        if(experiences[i]?.precio){
          totalExperiencesPrecio +=experiences[i]?.precio
        }
      }
      setExperiencesPrecio(totalExperiencesPrecio);
  }
  else{
    setExperiencesPrecio(0);
  }
    
  }, [experiences, selectedGuests, plan])

  const [fechasImportantes, setFechasImportantes] = useState([])
  
  const calculoFechasImportantes = (inicio, fin) => {
    const fechasEnRango = fechas.filter(fecha => {
      const fechaString = fecha.fecha.substr(0, 10);
      return fechaString >= inicio.toISOString().substr(0, 10) && fechaString <= fin.toISOString().substr(0, 10);
    });
  
    fechasEnRango.forEach(fechaImportante => {
      if (!fechasImportantes.some(fecha => fecha.nombre === fechaImportante.nombre)) {
        fechasImportantes.push(fechaImportante);
      }
    });
  }
  

  
  useEffect(() => {
   if(inicio && fin){

      calculoFechasImportantes(inicio, fin)
   
      var totalFechasImportantes = 0


      for(var i = 0; i<= fechasImportantes.length-1; i++){
        if(plan == ""){
          totalFechasImportantes += fechasImportantes[i]?.precioSelect
        }
        if(plan == "select"){
          totalFechasImportantes += fechasImportantes[i]?.precioSelect
        }
        if(plan == "luxury"){
          totalFechasImportantes += fechasImportantes[i]?.precioLuxury
        }
        if(plan == "premier"){
          totalFechasImportantes += fechasImportantes[i]?.precioPremier
        }
      }

      setTotal((((totalDiasInicio-fechasImportantes.length)*planPrecio)+guestsPrecio)+experiencesPrecio + totalFechasImportantes)
      setPrecio(((totalDiasInicio-fechasImportantes.length)*planPrecio)+guestsPrecio+ totalFechasImportantes)
   }
   else{
    totalFechasImportantes = 0
    setFechasImportantes([])
      setTotal(((totalDiasHoy*planPrecio)+guestsPrecio)+experiencesPrecio)
      setPrecio((totalDiasHoy*planPrecio)+guestsPrecio)
   }
  }, [experiencesPrecio,guestsPrecio, planPrecio,totalDiasHoy, totalDiasInicio,fin, inicio])


  

  

  const handleSubmit = async () => {
    event.preventDefault();
    
    formData.guests = selectedGuests;
    formData.experience = experiences;
    formData.plan = plan;
    formData.total = total
    formData.tipo = "reservacion"
    formData.price = precio
    if(!inicio && !fin){
      formData.checkin = hoy
      formData.checkout = despues
    }
    if (
      formData.name &&
      formData.tel &&
      formData.plan&&
      formData.email &&
      formData.guests &&
      formData.checkin &&
      formData.checkout &&
      formData.total
    ) {
      setCarritoReservaciones([...carritoReservaciones, formData])
      try {
        const reservacionId = await postReservacion(formData);
        formData.id = reservacionId;
      } catch (error) {
        console.error("Error al crear la reservación:", error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
      //
      if (localStorage.getItem("reservacion")) {
        // Obtener el arreglo actual de reservaciones desde localStorage
        const reservacionesEnLocalStorage = JSON.parse(localStorage.getItem("reservacion"));
      
        // Agregar el nuevo objeto formData al arreglo
        reservacionesEnLocalStorage.push(formData);
      
        // Guardar el arreglo actualizado de reservaciones en localStorage
        localStorage.setItem("reservacion", JSON.stringify(reservacionesEnLocalStorage));
      } else {
        // Si no hay reservaciones en el localStorage, crea un arreglo con formData y guárdalo
        const newReservaciones = [formData];
        localStorage.setItem("reservacion", JSON.stringify(newReservaciones)); 
      }
            /* 
      var formDataJSON = JSON.stringify(formData);
      localStorage.setItem('reservacion',[...carritoReservaciones, formDataJSON]); */

      
      emailjs.init("F9ctTSenSvQgRvd69");
    // Parámetros para enviar el correo electrónico
    const params = {
      from_name: formData.name,
      phone: formData.tel,
      email: formData.email,
      plan: formData.plan,
      guests: formData.guests,
      checkin: formData.checkin,
      checkout: formData.checkout,
      precio: formData.precio,
      experience1: formData.experience[0]?.nombre,
      experience2: formData.experience[1]?.nombre,
      experience3: formData.experience[2]?.nombre,
      experience4: formData.experience[3]?.nombre, 
      total: formData.total
    };
    

    // Envía el correo electrónico
    emailjs
      .send("service_d5x4xeq", "template_vrd3ujg", params)
      .then((response) => {
        console.log("Correo electrónico enviado exitosamente:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
      setSuccess(true)


      setFormData({
        name: "",
        tel: "",
        email: "",
        guests: "1-2",
        checkin: "",
        checkout: "",
        comments: "",
      });
      router.push("/Carrito");
    } else {
      setError(true);
    }
  };

  const determinarMoneda = () => {
    switch(moneda){
    
      case "USD":
        return usdRate
        break;
      case "EUR":
        return eurRate
        break;
        default:
          return 1
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-10 lg:mt-10">
      <div className="w-full  xl:w-[1300px] h-full flex flex-col-reverse lg:flex-row justify-center gap-4">
        <div className="w-full lg:w-[50%] h-full flex flex-col ">
          <div className="w-full h-full flex flex-row justify-center">
            <div className="w-full h-full flex flex-col items-center" id="booking">
              <h3 className=" text-5xl font-cinzelBold tracking-[2px] mb-4">
                {json.Booking.title}
              </h3>
              <form
                className="w-[90%] lg:w-full grid grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  placeholder={json.Booking.name}
                  className="placeholder:text-center placeholder:font-Geometrica w-full  col-span-2 border-[1px] py-1 border-[#d3cbc0]"
                />
                <input
                  type="tel"
                  name="tel"
                  onChange={handleInputChange}
                  value={formData.tel}
                  placeholder={json.Booking.phone}
                  className="placeholder:text-center placeholder:font-Geometrica col-span-2 border-[1px] py-1 border-[#d3cbc0]"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  placeholder={json.Booking.email}
                  className="placeholder:text-center placeholder:font-Geometrica col-span-2 border-[1px] py-1 border-[#d3cbc0]"
                />
                <div className="flex flex-col h-full w-full col-span-2">
                  <div className="flex flex-col h-full w-full ">
                  <div className="flex flex-col items-center">
                      <h3 className="text-[#d3cbc0] font-Geometrica uppercase tracking-[2px]">
                      {json.Booking.guests}
                      </h3>
                      <div className="flex flex-row justify-center gap-4 text-black mt-2 mb-4">
                        <div
                          onClick={() => {
                            setSelectedGuests("1-2");
                            localStorage.setItem("guests", "1-2");
                          }}
                          className={
                            selectedGuests === "1-2"
                              ? `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`
                              : `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedGuests === "1-2"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="1-2"
                          className={`font-Geometrica ${
                            selectedGuests === "1-2" ? "text-[#d3cbc0]" : ""
                          }`}
                        >
                          1-2
                        </label>
                        <div
                          onClick={() => {
                            setSelectedGuests("3-6");
                            localStorage.setItem("guests", "3-6");
                          }}
                          className={
                            selectedGuests === "3-6"
                              ? `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`
                              : `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedGuests === "3-6"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="3-6"
                          className={`font-Geometrica ${
                            selectedGuests === "3-6" ? "text-[#d3cbc0]" : ""
                          }`}
                        >
                          3-6
                        </label>
                        <div
                          onClick={() => {
                            setSelectedGuests("7-+");
                            localStorage.setItem("guests", "6-8");
                          }}
                          className={
                            selectedGuests === "7-+"
                              ? `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`
                              : `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedGuests === "7-+"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="7-+"
                          className={`font-Geometrica ${
                            selectedGuests === "7-+" ? "text-[#d3cbc0]" : ""
                          }`}
                        >
                          7-+
                        </label>
                      </div>
                    </div>
                    <select
                  name="plan"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="border-[1px] py-1 border-[#d3cbc0] font-Geometrica text-gray-500 col-span-2"
                >
                  <option className="text-center" value="">{json.Booking.plan}</option>
                  <option className="text-center" value="select">{json.Booking.planOption1}</option>
                  <option className="text-center" value="luxury">{json.Booking.planOption2}</option>
                  <option className="text-center" value="premier">{json.Booking.planOption3}</option>
                </select>
                    <div className="grid grid-cols-2 mt-2 mb-4 px-4 pb-4 pt-2 w-full h-full border-t-[1px] border-b-[1px] border-[#d3cbc0] gap-4">
                      <div className="flex flex-col items-center border-r-[1px] border-[#d3cbc0]  ">
                        <p className="text-[#d3cbc0] font-Geometrica uppercase mb-2 tracking-[2px]">
                        {json.Booking.checkin}
                        </p>

                        <div
                          className="w-[80%] bg-[#d3cbc0] text-black flex flex-col text-center relative cursor-pointer"
                          onClick={() => setShow(true)}
                        >
                          {!inicio ? (
                            <div>
                              <p className="text-2xl md:text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[hoy.getMonth()]}
                              </p>
                              <p className="text-2xl md:text-3xl  font-Geometrica">
                                {hoy.getDate()}, {hoy.getFullYear()}
                              </p>
                              <p className="text-md md:text-xl font-Geometrica uppercase mb-2">
                                {hoyName}
                              </p>
                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p className="text-2xl md:text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[inicio.getMonth()]}
                              </p>
                              <p className="text-2xl md:text-3xl  font-Geometrica">
                                {inicio.getDate()}, {inicio.getFullYear()}
                              </p>
                              <p className="text-md md:text-xl font-Geometrica uppercase mb-2">
                                {inicioName}
                              </p>
                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-center ">
                        <p className="text-[#d3cbc0] font-Geometrica uppercase mb-2 tracking-[2px]">
                        {json.Booking.checkout}
                        </p>

                        <div
                          className="w-[80%]  bg-[#d3cbc0] text-black flex flex-col text-center relative cursor-pointer"
                          onClick={() => setShow(true)}
                        >
                          {!fin ? (
                            <div>
                              <p className="text-2xl md:text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[despues.getMonth()]}
                              </p>
                              <p className="text-2xl md:text-3xl font-Geometrica">
                                {despues.getDate()}, {despues.getFullYear()}
                              </p>
                              <p className="text-md md:text-xl font-Geometrica uppercase mb-2">
                                {despuesName}
                              </p>

                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p className="text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[fin.getMonth()]}
                              </p>
                              <p className="text-3xl  font-Geometrica">
                                {fin.getDate()}, {fin.getFullYear()}
                              </p>
                              <p className="text-xl font-Geometrica uppercase mb-2">
                                {finName}
                              </p>
                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={`mt-4 mb-8 ${!show ? "hidden" : "block"}`}>
                      <Calendario
                      plan = {plan}
                      planPrecio = {planPrecio}
                      guestsPrecio={guestsPrecio}
                        inicio={inicio}
                        fin={fin}
                        setInicio={setInicio}
                        setFin={setFin}
                        setShow={setShow}
                      />
                    </div>
                    
                  </div>
                </div>
                
          <Experiencias
          json={json}
          handleExperienceChange = {handleExperienceChange}
          experiences = {experiences}

          />
                <p className="font-Geometrica">TOTAL:</p>
                <p className="font-Geometrica text-right">${((total)*determinarMoneda()).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )} {moneda}</p> 
                
                {error ? (
                  <div className="col-span-2 w-full flex flex-row justify-center text-red-500 font-Geometrica uppercase">
                    <p>{json.Booking.error}</p> 
                  </div>
                ) : null}
                 {success && (
        <div className="col-span-2 w-full flex flex-row justify-center mt-4 text-black tracking-[2px] font-Geometrica uppercase">
          <p>{json.Booking.success}</p>
        </div>
      )}
                <button
                  className="col-span-2  bg-black text-white hover:bg-[#a59f98] text-2xl tracking-[4px] font-Geometrica py-3 mt-2"
                  onClick={handleSubmit}
                >
                  {/*  <Link href="/Carrito"> BOOK NOW </Link> */}
                  {json.Booking.bookbutton}
                </button>

                <p className="w-full col-span-2 font-PlayfairDisplay text-sm text-justify">
                  {json.Booking.consent}
                  <span className="w-full text-[#d3cbc0] hover:text-[#a59f98] ml-2 cursor-pointer">
                  <Link href="/PrivacyPolicy">
                    {json.Booking.privacy}
                  </Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
          <div className="lg:w-[40%] 2xl:w-[570px]  flex flex-col ">
        <div className="w-full  h-full flex flex-row justify-center lg:justify-start">

  <div className="w-full h-full flex flex-col justify-center items-center ">
    <Image
      src={bookingfoto}
      alt="bookingfoto"
      className="w-[90%] h-[350px] md:h-[550px] object-cover md:rounded-[18px] overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50 mb-2 md:mb-0"
      />
  </div>
      </div>
</div>
      </div>
    </div>
  );
}

export default Booking;
