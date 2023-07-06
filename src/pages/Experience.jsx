
import Hero from '../Experience/Hero/Hero'
import Experiences from '../Experience/Experiences/Experiences'

import React from 'react'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import { AppContext } from '@/context/StateContext';

function Experience() {

  const {idioma } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;
  console.log(json)

  return (
    <div>
    <Hero />
    <Experiences json={json}/>

    
  </div>
  )
}

export default Experience