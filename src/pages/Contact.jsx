import { AppContext } from '@/context/StateContext';
import React from 'react'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import Hero from '@/components/Contacto/Hero/Hero';
import Form from '@/components/Contacto/Form/Form';
import Find from '@/components/Contacto/Find/Find';
import Address from '@/components/Contacto/Address/Address';

function Contact() {
  const{idioma} = AppContext() 


  const json = idioma === 'espanol' ? esJson : enJson;
  return (
    <div>
    <Hero json = {json}/>
    <Form json={json}/>
    <Find json={json}/>
    <Address json={json}/>
    </div>
  )
}

export default Contact