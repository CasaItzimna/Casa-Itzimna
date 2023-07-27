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
      <div className='w-full h-[100px] lg:h-[250px] bg-[#d3cbc0] '></div>
      <TimeLine json={json}/>
      <Order json={json}/>
    </div>
  )
}

export default Confirmacion