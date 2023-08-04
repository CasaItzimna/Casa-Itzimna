import React from 'react'
import { AppContext } from '@/context/StateContext';
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import TimeLine from '@/components/ErrorPago/TimeLine';
import Error from '@/components/ErrorPago/Error';
import Head from 'next/head';

function ErrorPago() {
  const {idioma } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;

  return (
    <div className=''>
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>

        <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'/>
      <TimeLine/>
      <Error json={json}/>
    </div>
  )
}

export default ErrorPago