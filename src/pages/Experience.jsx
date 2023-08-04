
import Hero from '../Experience/Hero/Hero'
import Experiences from '../Experience/Experiences/Experiences'

import React from 'react'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import { AppContext } from '@/context/StateContext';
import Head from 'next/head';

function Experience() {

  const {idioma } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;
  console.log(json)

  return (
    <div>
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>

    <Hero />
    <Experiences json={json}/>

    
  </div>
  )
}

export default Experience