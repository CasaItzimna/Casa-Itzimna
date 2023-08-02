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

function Booking({ json }) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [guestsPrecio, setGuestsPrecio] = useState(0);
  const [plan, setPlan] = useState("");
  const [planPrecio, setPlanPrecio] = useState(18000);
  const [experiences, setExperiences] = useState([]);
  const [experiencesPrecio, setExperiencesPrecio] = useState(0);
  
  const {carritoReservaciones, setCarritoReservaciones} = AppContext();

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
  console.log(totalDiasHoy)
  console.log(hoy, despues)
  console.log(fin,inicio)
  const [totalDiasInicio, setTotalDiasInicio] = useState(differenceInDays(fin, inicio) );
  console.log(totalDiasInicio)
/*   const [total, setTotal] = useState(differenceInDays(despues, hoy) * precio);
 */
const [total, setTotal] = useState(0)



  const [show, setShow] = useState(false);
  console.log(show);

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
    if (inicio && fin) {
      setTotalDiasInicio(differenceInDays(fin, inicio))
    }
  }, [inicio, fin]);

  useEffect(() => {
    if (inicio) {
      formData.begin = inicio;
    }
    if (fin) {
      formData.end = fin;
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
      setPlanPrecio(18000)
    }
    if(plan == "luxury"){
      setPlanPrecio(22000)
    }
    if(plan == "premier"){
      setPlanPrecio(25000)
    }
    if(selectedGuests == "6-8"){
      setGuestsPrecio(2000)
    }
    if(selectedGuests == "1-2"){
      setGuestsPrecio(0)
    }
    if(selectedGuests == "3-5"){
      setGuestsPrecio(0)
    }
    let totalExperiencesPrecio = 0;
    if(experiences.length>0){
      console.log(experiences)
      for(var i = 0; i<= experiences.length; i++){
        if(experiences[i] == "cena"){
         totalExperiencesPrecio += 3000
        }
        if(experiences[i] == "recorrido"){
          totalExperiencesPrecio += 2500
         }
         if(experiences[i] == "spa"){
          totalExperiencesPrecio += 5000
         }
         if(experiences[i] == "comidas"){
          totalExperiencesPrecio += 6000
         }
        
      }
      setExperiencesPrecio(totalExperiencesPrecio);
  }
  else{
    setExperiencesPrecio(0);
  }
    
  }, [experiences, selectedGuests, plan])
  
  
  useEffect(() => {
   if(inicio && fin){
    setTotal(((totalDiasInicio*planPrecio)+guestsPrecio)+experiencesPrecio)
    setPrecio((totalDiasInicio*planPrecio)+guestsPrecio)
   }
   else{
      setTotal(((totalDiasHoy*planPrecio)+guestsPrecio)+experiencesPrecio)
      setPrecio((totalDiasHoy*planPrecio)+guestsPrecio)
   }
  }, [experiencesPrecio,guestsPrecio, planPrecio,totalDiasHoy, totalDiasInicio,fin, inicio])
  

  
  

  const handleSubmit = async () => {
    event.preventDefault();
    console.log(formData);
    
    formData.checkin = inicio;
    formData.checkout = fin;
    formData.guests = selectedGuests;
    formData.experience = experiences;
    formData.plan = plan;
    formData.total = total
    formData.tipo = "reservacion"
    formData.price = precio
    console.log(formData);
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
      console.log("entre en el if", formData);
      setCarritoReservaciones([...carritoReservaciones, formData])
      const reservacionId = await postReservacion(formData);
      try {
        const reservacionId = await postReservacion(formData);
        console.log("ID de la nueva reservacion:", reservacionId);
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
      experiences: formData.experience,
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
                            setSelectedGuests("3-5");
                            localStorage.setItem("guests", "3-5");
                          }}
                          className={
                            selectedGuests === "3-5"
                              ? `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`
                              : `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedGuests === "3-5"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="3-5"
                          className={`font-Geometrica ${
                            selectedGuests === "3-5" ? "text-[#d3cbc0]" : ""
                          }`}
                        >
                          3-5
                        </label>
                        <div
                          onClick={() => {
                            setSelectedGuests("6-8");
                            localStorage.setItem("guests", "6-8");
                          }}
                          className={
                            selectedGuests === "6-8"
                              ? `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer bg-[#d3cbc0]`
                              : `border-[2px] border-[#d3cbc0] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedGuests === "6-8"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#d3cbc0] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="6-8"
                          className={`font-Geometrica ${
                            selectedGuests === "6-8" ? "text-[#d3cbc0]" : ""
                          }`}
                        >
                          6-8
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
                
                <div className="flex flex-row justify-center gap-4 col-span-2">
                  <div className="flex flex-col ">

                  <div className="flex flex-col items-center lg:flex-row font-Geometrica gap-4 mb-4">
                  <h3 className="text-[#d3cbc0] font-Geometrica uppercase tracking-[2px]">
                  {json.Booking.experiences}
                      </h3>
                    
                    
      <label className="">
        <input
          type="checkbox"
          value="cena"
          checked={experiences.includes("cena")}
          onChange={handleExperienceChange}
          className=""
        />
        {json.Experiences.Experiences1}
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="recorrido"
          checked={experiences.includes("recorrido")}
          onChange={handleExperienceChange}
          className="uppercase"
        />
        {json.Experiences.Experiences2}
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="spa"
          checked={experiences.includes("spa")}
          onChange={handleExperienceChange}
          className="uppercase"
        />
        {json.Experiences.Experiences3}
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="comidas"
          checked={experiences.includes("comidas")}
          onChange={handleExperienceChange}
          className="uppercase"
        />
        {json.Experiences.Experiences4}
      </label>
     
      
      </div>
      </div>
    </div>
                <p className="font-Geometrica">TOTAL:</p>
                <p className="font-Geometrica text-right">${total}mxn</p>
                {error ? (
                  <div className="col-span-2 w-full flex flex-row justify-center text-red-500 font-Geometrica uppercase">
                    <p>Completa todos los campos</p>
                  </div>
                ) : null}
                <button
                  className="col-span-2  bg-black text-white text-2xl tracking-[4px] font-Geometrica py-3 mt-2"
                  onClick={handleSubmit}
                >
                  {/*  <Link href="/Carrito"> BOOK NOW </Link> */}
                  {json.Booking.bookbutton}
                </button>

                <p className="w-full col-span-2 font-PlayfairDisplay text-sm text-justify">
                  {json.Booking.consent}
                  <span className="w-full text-[#d3cbc0] ml-2">
                    {json.Booking.privacy}
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
