import React, { createContext, useContext, useState, useEffect } from "react";
import { differenceInDays, isValid, formatISO } from "date-fns";
import { client } from "../lib/client";
import jwt from "jsonwebtoken";
import groq from 'groq';

import bcrypt from "bcryptjs";

const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [facturas, setFacturas] = useState([]);
  const [reservaciones, setReservaciones] = useState([]);
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

 
  
  //TODO: getFacturas
  async function getFacturas(onComplete) {
    const query = '*[_type == "facturas"]';
    const resultado = await client.fetch(query);
    if(resultado){
      setIsLoading(false)
    }
    console.log('getFacturas llamado', resultado);
    setFacturas(resultado);
    return resultado;
  }

  //TODO: updateFactura
  async function updateFactura(facturaId, formData) {
    console.log("Updating factura with ID:", facturaId);
    console.log("New data:", formData);

    let updatedFactura; // Declarar la variable aquí
    try {
      updatedFactura = await client
        .patch(facturaId)
        .set({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          date: formData.date,
          rfc: formData.rfc,
          total: parseInt(formData.total),
          state: true,
          registerDate: new Date(),
        })
        .commit();

      console.log("Factura actualizada:", updatedFactura);

      const facturaIndex = facturas.findIndex(
        (factura) => factura._id === facturaId
      );
      if (facturaIndex !== -1) {
        console.log("ando en el index");
        const facturasActualizadas = [...facturas];
        facturasActualizadas[facturaIndex] = updatedFactura;
        setFacturas(facturasActualizadas);
        console.log("llegue hasta aca", facturasActualizadas);
      } else {
        console.log("La factura no se encuentra en el arreglo");
      }
    } catch (error) {
      console.error("Error actualizando factura:", error);
    }
  }

  //TODO: deleteFactura
  async function deleteFactura(facturaId) {
    console.log("Deleting factura with ID:", facturaId);

    try {
      await client.delete(facturaId);
      console.log("Factura eliminada con éxito");
      const updatedFacturas = facturas.filter(
        (factura) => factura._id !== facturaId
      );
      setFacturas(updatedFacturas);
    } catch (error) {
      console.error("Error eliminando factura:", error);
    }
  }

  //Reservaciones

  //TODO: postReservacion
  function postReservacion(formData) {
    console.log(formData);
    client.create({
      _type: "reservaciones",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      people: parseInt(formData.people),
      begin: formatISO(formData.begin).substring(0, 10),
      end: formatISO(formData.end).substring(0, 10),
      comments: formData.comments,
      total: formData.total,
      registerDate: new Date(),
    });
  }

  //TODO: getReservaciones
  async function getReservaciones() {
    const query = '*[_type == "reservaciones"]';
    const resultado = await client.fetch(query);
    setReservaciones(resultado);
  }

  //TODO: updateReservacion
  function updateReservacion() {}

  //TODO: deleteReservacion
  function deleteReservacion() {}

  //Productos
  //TODO: getProductos
  async function getProductos() {
    const query = '*[_type == "productos"]';
    const resultado = await client.fetch(query);
    setProductos(resultado);
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
        updateReservacion,

        deleteReservacion,
        getProductos,
        loginUser,
        postUser,
        facturas,
        reservaciones,
        productos,
        isLoading
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function AppContext() {
  return useContext(StateContext);
}
