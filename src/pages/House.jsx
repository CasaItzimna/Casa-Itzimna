import Hero from '@/components/House/Hero/Hero';
import { AppContext } from '@/context/StateContext';
import React from 'react'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import Facilities from '@/components/House/Facilities/Facilities';
import Rates from '@/components/House/Rates/Rates';
import Booking from '@/components/House/Booking/Booking';

function House() {
  const{idioma} = AppContext()


  const json = idioma === 'espanol' ? esJson : enJson;

  return (
    <div>

    <div className={`w-full flex flex-col relative  h-[calc(170vh*2)]  md:h-[calc(80vh*2)] lg:h-[calc(80vh*2)] xl:h-[calc(65vh*2)] `}>
     

    <Hero json = {json}/>
    <Facilities json = {json}/>
      </div>
      <Rates json={json} />
      <Booking json={json} />
      
      </div>
    
  )
}

export default House