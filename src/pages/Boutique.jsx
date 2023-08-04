import Hero from "@/components/Boutique/Hero/Hero";
import { AppContext } from "@/context/StateContext";
import React, { useEffect, useState } from "react";
import Grid from "../components/Boutique/Grid/Grid";
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import Head from "next/head";

function Boutique() {
  const {idioma, } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;

 

  return (
    <div>
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>
      <Hero />

      <Grid 
      json={json}
      />
    </div>
  );
}

export default Boutique;
 