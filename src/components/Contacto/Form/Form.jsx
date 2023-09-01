import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AppContext } from '@/context/StateContext';
import { useEffect } from 'react';

function Form({json}) {

  const [formData, setFormData] = useState({
    name:"",
    lastName:"",
    tel:"",
    email: "",
    message:""

  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const {idioma} = AppContext()

  const handleSubmit = (e) => {
    console.log("entre")
    e.preventDefault();
    
    if(
      formData.name &&
      formData.lastName &&
      formData.tel &&
      formData.email&&
      formData.message
    ){
      console.log(formData)
      setError(false)
    // Configura tus credenciales de EmailJS
    emailjs.init("F9ctTSenSvQgRvd69");

    // Parámetros para enviar el correo electrónico
    const params = {
      texto1CONTACTO:"CONTACTO",
      texto2CONTACTO:"FAVOR DE RESPONDER LA SOLICITUD DE CONTACTO",
      from_name_contacto: formData.name,
      from_lastName_contacto: formData.lastName,
      phone_contacto: formData.tel,
      email_contacto: formData.email,
      message_contacto: formData.message,
      idioma_contacto: idioma,
      from_email: "boutiquecasaitzimna@gmail.com",
      email_cc: "",
      subject: "QUIERE HACER CONTACTO"
    };

    // Envía el correo electrónico
    emailjs
      .send("service_d5x4xeq", "template_15qv37j", params)
      .then((response) => {
        console.log("Correo electrónico enviado exitosamente:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });

      setSuccess(true)

    // Reinicia el formulario después de enviar
    setFormData({
      name:"",
      lastName:"",
      tel:"",
      email: "",
      message:""
    }); 
  }
  else{
    setError(true)
  }
  };

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

  return (
    <div className='w-full h-full flex flex-row justify-center relative mb-4 lg:mb-0'>
                      <div className="hidden h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>

        <div className='flex flex-col justify-start items-center z-10'>
        <h3 className="w-[90%]  lg:w-full text-4xl md:text-5xl font-apollo text-center tracking-[4px] mb-4">
                {json.Contact.Touch}
              </h3>
              <form className="w-[90%] lg:w-full grid grid-cols-2 gap-4"
              onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id='name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={json.Contact.Input1}
                  className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#d3cbc0]"
                />
                <input
                  type="text"
                  id='lastName'
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={json.Contact.Input2}
                  className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#d3cbc0]"
                />
                <input
                  type="email"
                  name="email"
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={json.Contact.Input3}
                  className="placeholder:text-center placeholder:font-Geometrica border-[1px] py-1 border-[#d3cbc0]"
                />
                <input
                  type="tel"
                  name="tel"
                  id='tel'
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder={json.Contact.Input4}
                  className="placeholder:text-center placeholder:font-Geometrica border-[1px] py-1 border-[#d3cbc0]"
                />
                <textarea
                  type="text"
                  name="message"
                  id='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={json.Contact.Input5}
                  className="h-full flex items-center text-center placeholder:font-Geometrica  border-[1px] py-4 col-span-2 border-[#d3cbc0]"
                />

              </form>
                <p className="w-[90%] lg:w-full col-span-2 font-PlayfairDisplay text-sm mt-2">
                {json.Contact.consent}<span className="text-[#d3cbc0] ml-2">{json.Contact.privacy}</span>
              </p>
              <div className='wfull flex flex-row justify-center'>
                <div className='flex flex-col items-center'>

                
              {error ? (
                  <div className="col-span-2 w-full flex flex-row justify-center mt-4 text-red-500 font-Geometrica uppercase">
                    <p>Completa todos los campos</p>
                  </div>
                ) : null}
              {success && (
        <div className="col-span-2 w-full flex flex-row justify-center mt-4 text-black tracking-[2px] font-Geometrica uppercase">
          <p>En breve nos comunicaremos contigo...</p>
        </div>
      )}
              <button className=" w-[250px] bg-black hover:bg-[#a59f98] text-white text-2xl tracking-[4px] font-Geometrica py-2 mt-4"
              onClick={handleSubmit}>
                {json.Contact.button}
                </button>
                </div>
              </div>
              
        </div>

    </div>
  )
}

export default Form