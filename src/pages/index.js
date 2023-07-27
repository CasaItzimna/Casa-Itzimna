import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/Home/Slider/Slider'
import Hero from '@/components/Home/Hero/Hero'
import AboutUs from '@/components/Home/AboutUs/AboutUs'
import Experience from '@/components/Home/Experience/Experience'
import Accomodation from '@/components/Home/Accomodation/Accomodation'
import Testimonials from '@/components/Home/Testimonials/Testimonials'
import { AppContext } from '@/context/StateContext'
import esJson from '../assets/JSON/es.json';
import enJson from '../assets/JSON/en.json';
import Calendario from '@/components/Reservacion/Calendario'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const{idioma} = AppContext()


  const json = idioma === 'espanol' ? esJson : enJson;

  const [show, setShow] = useState(false);
  
  const{inicio, fin, setInicio, setFin} = AppContext();


  return (
    <div>

                
     

    <Hero
    setShow = {setShow}
    json = {json}/>
    <div className={`mt-4 ${!show ? "hidden" : "block"}`}>
          <Calendario
            inicio={inicio}
            fin={fin}
            setInicio={setInicio}
            setFin={setFin}
            setShow={setShow}
          />
        </div>
    <AboutUs json = {json}/>
      
      <Experience json = {json}/>
      <Accomodation json = {json}/>
      <Testimonials json = {json}/>
      </div>
    
  )
}
