import React from 'react'
import CarritoInfo from '../components/Carrito/CarritoInfo'
import TimeLine from '@/components/Carrito/TimeLine'
import OurBoutique from '@/components/Carrito/OurBoutique'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import { AppContext } from '@/context/StateContext';
import Head from 'next/head';

function Carrito() {

  const{idioma} = AppContext()


  const json = idioma === 'espanol' ? esJson : enJson;
  return (
    <div className='bg-[#d3cbc0]'>
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>

      <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'>

      </div>
      <TimeLine json={json}/>
      <CarritoInfo json={json}/>
      <OurBoutique json={json}/>
    </div>
  )
}

export default Carrito