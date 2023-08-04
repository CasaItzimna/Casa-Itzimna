import React from 'react'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import { AppContext } from '@/context/StateContext';
import Hero from '@/components/Spaces/Hero/Hero';
import Gallery from '@/components/Spaces/Gallery/Gallery';
import Head from 'next/head';

function Spaces() {
  const {idioma } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;
  console.log(json)

  return (
    <div className='h-full w-full'>
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>

    <Hero />
    <Gallery json = {json}/>

    
  </div>
  )
}

export default Spaces