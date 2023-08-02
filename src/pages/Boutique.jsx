import Hero from "@/components/Boutique/Hero/Hero";
import { AppContext } from "@/context/StateContext";
import React, { useEffect, useState } from "react";
import Grid from "../components/Boutique/Grid/Grid";
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';

function Boutique() {
  const {idioma, } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;

 

  return (
    <div>
      <Hero />

      <Grid 
      json={json}
      />
    </div>
  );
}

export default Boutique;
 