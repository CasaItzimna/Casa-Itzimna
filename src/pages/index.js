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

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const{idioma} = AppContext()


  const json = idioma === 'espanol' ? esJson : enJson;

  return (
    <div>

    <div className=' w-full flex flex-col relative h-screen '>
     

    <Hero json = {json}/>
    <AboutUs json = {json}/>
      </div>
      <Experience json = {json}/>
      <Accomodation json = {json}/>
      <Testimonials json = {json}/>
      </div>
    
  )
}
