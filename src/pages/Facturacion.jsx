import Head from 'next/head';
import React from 'react'
import Formulario from '../components/Facturacion/Formulario'
import { AppContext } from '@/context/StateContext';

import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';

function Facturacion() {
  
  const{idioma} = AppContext()


  const json = idioma === 'espanol' ? esJson : enJson;
  return (
    <div className='bg-[#d3cbc0]'>
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>

      <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'>

      </div>
      <Formulario json={json}/>
    </div>
  )
}

export default Facturacion