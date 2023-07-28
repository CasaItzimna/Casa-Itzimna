import TimeLine from '../components/Confirmacion/TimeLine'
import Order from '@/components/Confirmacion/Order'
import { AppContext } from '@/context/StateContext';
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import React from 'react'

function Confirmacion() {
  const {idioma } = AppContext();

  const json = idioma === 'espanol' ? esJson : enJson;
  return (
    <div>
      <div className='w-full h-[100px] md:h-[200px] lg:h-[250px] bg-[#31302c]'/>

      <TimeLine json={json}/>
      <Order json={json}/>
    </div>
  )
}

export default Confirmacion