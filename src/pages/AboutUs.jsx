import Hero from '@/components/AboutUs/Hero/Hero';
import { AppContext } from '@/context/StateContext';
import React from 'react'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import OurStory from '@/components/AboutUs/OurStory/OurStory';
import History from '@/components/AboutUs/History/History';
import Why from '@/components/AboutUs/Why/Why';
import Head from 'next/head';

function AboutUs() {
  const{idioma} = AppContext()


  const json = idioma === 'espanol' ? esJson : enJson;

  return (
    <div>
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>

    <Hero json = {json}/>
    <OurStory json = {json}/>
      
       <History json = {json}/>
      <Why json = {json}/>
      </div>
    
  )
}

export default AboutUs