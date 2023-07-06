import Hero from "@/components/Boutique/Hero/Hero";
import { AppContext } from "@/context/StateContext";
import React, { useEffect, useState } from "react";
import Grid from "../components/Boutique/Grid/Grid";
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';

function Boutique() {
  const {idioma, productos, getProductos } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;

  useEffect(() => {
    getProductos();
  }, []);

  console.log(productos);

  return (
    <div>
      <Hero />

      <Grid productos = {productos} />
    </div>
  );
}

export default Boutique;
 