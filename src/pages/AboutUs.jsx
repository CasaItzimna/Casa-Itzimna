import Hero from '@/components/AboutUs/Hero/Hero';
import { AppContext } from '@/context/StateContext';
import React from 'react'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import OurStory from '@/components/AboutUs/OurStory/OurStory';
import History from '@/components/AboutUs/History/History';
import Why from '@/components/AboutUs/Why/Why';

function AboutUs() {
  const{idioma} = AppContext()


  const json = idioma === 'espanol' ? esJson : enJson;

  return (
    <div>

    <div className=' w-full flex flex-col relative '
    
    style={{ height: 'calc(60vh * 2)' }}>
     

    <Hero json = {json}/>
    <OurStory json = {json}/>
      </div>
       <History json = {json}/>
      <Why json = {json}/>
      </div>
    
  )
}

export default AboutUs