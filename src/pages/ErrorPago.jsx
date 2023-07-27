import React from 'react'
import { AppContext } from '@/context/StateContext';
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import TimeLine from '@/components/ErrorPago/TimeLine';
import Error from '@/components/ErrorPago/Error';

function ErrorPago() {
  const {idioma } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;

  return (
    <div className=''>
       <div className='w-full h-[100px] lg:h-[250px] bg-[#d3cbc0] '></div>
      <TimeLine/>
      <Error json={json}/>
    </div>
  )
}

export default ErrorPago