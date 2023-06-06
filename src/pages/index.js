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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

    <div className=' w-full flex flex-col relative '
    
    style={{ height: 'calc(70vh * 2)' }}>
     

    <Hero/>
    <AboutUs/>
      </div>
      <Experience/>
      <Accomodation/>
      <Testimonials/>
      </div>
    
  )
}
