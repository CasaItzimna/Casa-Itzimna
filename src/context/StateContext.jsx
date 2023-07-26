import React, { createContext, useContext, useState, useEffect } from "react";
import { differenceInDays, isValid, formatISO } from "date-fns";
import { client } from "../lib/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [facturas, setFacturas] = useState([]);
  const [reservaciones, setReservaciones] = useState([]);
  const [product, setProduct] = useState(null);
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idioma, setIdioma] = useState('ingles')
  const [inicio, setInicio] = useState(null);
  const [fin, setFin] = useState(null);
  const [showModalCalendar, setShowModalCalendar] = useState(false)
  const [carrito, setCarrito] = useState([])
  const [carritoReservaciones, setCarritoReservaciones] = useState([])
  const [carritoProductos, setCarritoProductos] = useState([])
  const [reservacion, setReservacion] = useState(null)

  //Facturas

  function postFactura(formData) {
    console.log(formData);
    client.create({
      _type: "facturas",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      rfc: formData.rfc,
      total: parseInt(formData.total),
      state: true,
      registerDate: new Date(),
    });
  }

  //getFacturas
  const getFacturas = async () => {
    setIsLoading(true);
  
    try {
      const response = await fetch('/api/facturas/factura', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setFacturas(data); // Actualiza la lista de facturas con los datos obtenidos de la API
        console.log('getFacturas respuesta', data);
      } else {
        console.error('Error al obtener facturas:', response.statusText);
      }
  
      setIsLoading(false);
    } catch (error) {
      console.error('Error al obtener facturas:', error);
      setIsLoading(false);
    }
  };

  //updateFactura
  const updateFactura = async (facturaId, formData) => {
    console.log('entre' ,formData)
    try {
      const response = await fetch('/api/facturas/factura', {
        method: 'PUT',
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _id: facturaId,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Error actualizando factura:', response.statusText);
      }
    } catch (error) {
      console.error('Error actualizando factura:', error);
    }
  };

  //deleteFactura
  const deleteFactura = async (facturaId) => {
    try {
      const response = await fetch(`/api/facturas/factura`, {
        method: 'DELETE',
        headers: {
          
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: facturaId }),
      });
      if(response){
        
        const index = facturas.findIndex((factura) => factura._id === facturaId);
        if (index !== -1) {
          facturas.splice(index, 1);
        }

      }

      return response
  
      if (response.ok) {
        
        console.log('Factura eliminada con éxito');
       
      } else {
        console.error('Error eliminando factura:', response.statusText);
      }
    } catch (error) {
      console.error('Error eliminando factura:', error);
    }
  };

 
  //Reservaciones
  function isLongDate(dateString) {
    console.log(dateString)
    console.log(dateString.toString() )
    return dateString.toString().length > 10; // Verifica si la fecha es más larga que 'yyyy-mm-dd'
  }
  
  async function postReservacion(formData) {
    try {
      const checkin = isLongDate(formData.checkin) ? formatISO(formData.checkin).substring(0, 10) : formData.checkin;
      const checkout = isLongDate(formData.checkout) ? formatISO(formData.checkout).substring(0, 10) : formData.checkout;
  
      const createdReservacion = await client.create({
        _type: "reservaciones",
        name: formData.name,
        tel: formData.tel,
        email: formData.email,
        guests: formData.guests,
        checkin: checkin,
        checkout: checkout,
        comments: formData.comments,
        plan: formData.plan,
        experience: formData.experience,
        total: formData.total.toString(),
        status: "pendiente",
        idioma: idioma,
        registerDate: new Date(),
      });
  
      // Obtenemos el ID generado por Sanity para la nueva reservación
      const reservacionId = createdReservacion._id;
       // Retornamos el reservacionId
        return reservacionId;
       } catch (error) {
        console.error("Error al crear la reservación:", error);
        throw error; // Lanzamos el error para que pueda ser capturado en el catch del componente
     }
  }

  //TODO: getReservaciones
  async function getReservaciones() {
    const query = '*[_type == "reservaciones"]';
    const resultado = await client.fetch(query);
    setReservaciones(resultado);
    setIsLoading(false)
  }

  async function getReservacion(id) {
    try {
      const query = `*[_type == "reservaciones" && _id == "${id}"]`;
      const resultado = await client.fetch(query);
      if (resultado.length > 0) {
        return resultado[0];
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error al obtener la reservación:", error);
      throw error; 
    }
  }

  //TODO: updateReservacion
  function updateReservacion(reservacionId, formData) {
    console.log(formData);
    client
      .patch(reservacionId)
      .set({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        people: parseInt(formData.people),
        //begin: formatISO(formData.begin).substring(0, 10),
        //end: formatISO(formData.end).substring(0, 10),
        begin: formData.begin,
        end: formData.end,
        plan: formData.plan,
        experience: formData.experience,
        comments: formData.comments,
        total: formData.total.toString(),
        status: formData.status,
        registerDate: new Date(),
      })
      
      .commit()
      .then((updatedReservacion) => {
        console.log("Reservación actualizada:", updatedReservacion);
        getReservaciones()
      })
      .catch((error) => {
        console.error("Error al actualizar la reservación:", error);
      });
  }

  //TODO: deleteReservacion
  function deleteReservacion(id) {
    client
      .delete(id)
      .then((deletedReservacion) => {
        console.log("Reservación eliminada:", deletedReservacion);
        getReservaciones()
      })
      .catch((error) => {
        console.error("Error al eliminar la reservación:", error);
      });
  }

  //Productos
  async function getProductos() {
    const query = '*[_type == "productos"]';
    const resultado = await client.fetch(query);
    setProductos(resultado);
  }

  async function getProduct(productSlug) {
    console.log(productSlug)
    const query  = `*[_type == "productos" && slug.current == $productSlug]`
    const params = {productSlug}
    const product = await client.fetch(query, params)
    console.log(product)
    setProduct(product)
  }

   //TODO: updateReservacion
   function updateProducto(productoId, formData) {
    console.log(formData);
    client
      .patch(productoId)
      .set({
        name: formData.name,
        artist: formData.artist,
        slug: formData.slug,
        details: formData.details,
        description: formData.description,
        category: formData.category,
        price: formData.price,
        cantidad: formData.cantidad,
        // Si el formData incluye un objeto 'file', se actualiza el campo 'file'.
        // Si no, se omite el campo y no se modifica.
        ...(formData.file ? { file: formData.file } : {})
      })
      
      .commit()
      .then((updatedProducto) => {
        console.log("Reservación actualizada:", updatedProdcuto);
        getProductos()
      })
      .catch((error) => {
        console.error("Error al actualizar la reservación:", error);
      });
  }

  //checkPassword
  async function checkPassword(plaintext, hash) {
    return await bcrypt.compare(plaintext, hash);
  }

  //loginUser
  async function loginUser(email, password) {
    console.log("loginuser", email, password);
    const query = `*[_type == "usuarios" && email == $email] `;

    const params = { email };
    const users = await client.fetch(query, params);

    if (users.length === 0) {
      throw new Error("El correo electrónico no existe");
    }

    const user = users[0];

    // Aquí debes verificar la contraseña usando la librería de tu elección
    // Por ejemplo, bcrypt
    const isPasswordCorrect = await checkPassword(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Contraseña incorrecta");
    }

    // Genera un token JWT
    const tokenPayload = {
      id: user._id,
      email: user.email,
    };

    console.log(process.env.NEXT_PUBLIC_JWT_SECRET);
    const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET;

    try {
      const token = await new Promise((resolve, reject) => {
        jwt.sign(tokenPayload, jwtSecret, { expiresIn: "1h" }, (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        });
      });

      // Devuelve el usuario y el token JWT
      return { user, token };
    } catch (error) {
      console.error("Error al firmar el token JWT:", error);
      throw new Error("Error al firmar el token JWT");
    }
  }
  //postUser

  async function postUser(name, email, password) {
    console.log(name, email, password);
    client.create({
      _type: "usuarios",
      name: name,
      email: email,
      password: password,
      registerDate: new Date(),
    });
  }

  

  return (
    <StateContext.Provider
      value={{
        postFactura,
        getFacturas,
        setIsLoading,
        updateFactura,
        deleteFactura,
        postReservacion,
        getReservaciones,
        getReservacion,
        updateReservacion,
        deleteReservacion,
        getProductos,
        getProduct,
        updateProducto,
        loginUser,
        postUser,
        setIdioma,
        setInicio,
        setFin,
        setShowModalCalendar,
        setCarrito,
        setReservacion,
        setCarritoProductos,
        setCarritoReservaciones,
        carritoProductos,
        carritoReservaciones,
        reservacion,
        carrito,
        showModalCalendar,
        inicio,
        fin,
        idioma,
        facturas,
        reservaciones,
        productos,
        product,
        isLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function AppContext() {
  return useContext(StateContext);
}
