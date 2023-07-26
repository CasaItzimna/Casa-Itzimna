import React from 'react';
import Masonry from 'react-masonry-css';

import garden1 from './img/GARDEN/Garden-1.jpg'
import garden2 from './img/GARDEN/Garden-2.jpg'
import garden3 from './img/GARDEN/Garden-3.jpg'
import garden4 from './img/GARDEN/Garden-4.jpg'
import garden5 from './img/GARDEN/Garden-5.jpg'
import garden6 from './img/GARDEN/Garden-6.jpg'
import garden7 from './img/GARDEN/Garden-7.jpg'
import garden8 from './img/GARDEN/Garden-8.jpg'
import garden9 from './img/GARDEN/Garden-9.jpg'

import room1 from './img/ROOMS/Rooms-1.jpg'
import room2 from './img/ROOMS/Rooms-2.jpg'
import room3 from './img/ROOMS/Rooms-3.jpg'
import room4 from './img/ROOMS/Rooms-4.jpg'
import room5 from './img/ROOMS/Rooms-5.jpg'
import room6 from './img/ROOMS/Rooms-6.jpg'
import room7 from './img/ROOMS/Rooms-7.jpg'
import room8 from './img/ROOMS/Rooms-8.jpg'
import room9 from './img/ROOMS/Rooms-9.jpg'
import room10 from './img/ROOMS/Rooms-10.jpg'
import room11 from './img/ROOMS/Rooms-11.jpg'
import room12 from './img/ROOMS/Rooms-12.jpg'
import room13 from './img/ROOMS/Rooms-13.jpg'
import room14 from './img/ROOMS/Rooms-14.jpg'
import room15 from './img/ROOMS/Rooms-15.jpg'
import room16 from './img/ROOMS/Rooms-16.jpg'


import terrace1 from './img/Terrace/Terrace-1.jpg'
import terrace2 from './img/Terrace/Terrace-2.jpg'
import terrace3 from './img/Terrace/Terrace-3.jpg'
import terrace4 from './img/Terrace/Terrace-4.jpg'
import terrace5 from './img/Terrace/Terrace-5.jpg'
import terrace6 from './img/Terrace/Terrace-6.jpg'
import terrace7 from './img/Terrace/Terrace-7.jpg'
import terrace8 from './img/Terrace/Terrace-8.jpg'
import terrace9 from './img/Terrace/Terrace-9.jpg'
import terrace10 from './img/Terrace/Terrace-10.jpg'

import Kitchen1 from './img/Kitchen/Kitchen-1.jpg'
import Kitchen2 from './img/Kitchen/Kitchen-2.jpg'
import Kitchen3 from './img/Kitchen/Kitchen-3.jpg'
import Kitchen4 from './img/Kitchen/Kitchen-4.jpg'
import Kitchen5 from './img/Kitchen/Kitchen-5.jpg'
import Kitchen6 from './img/Kitchen/Kitchen-6.jpg'
import Kitchen7 from './img/Kitchen/Kitchen-7.jpg'
import Kitchen8 from './img/Kitchen/Kitchen-8.jpg'
import Kitchen9 from './img/Kitchen/Kitchen-9.jpg'
import Kitchen10 from './img/Kitchen/Kitchen-10.jpg'
import Kitchen11 from './img/Kitchen/Kitchen-11.jpg'
import Kitchen12 from './img/Kitchen/Kitchen-12.jpg'


import Lounges1 from './img/Lounges/Lounges-1.jpg'
import Lounges2 from './img/Lounges/Lounges-2.jpg'
import Lounges3 from './img/Lounges/Lounges-3.jpg'
import Lounges4 from './img/Lounges/Lounges-4.jpg'
import Lounges5 from './img/Lounges/Lounges-5.jpg'
import Lounges6 from './img/Lounges/Lounges-6.jpg'
import Lounges7 from './img/Lounges/Lounges-7.jpg'
import Lounges8 from './img/Lounges/Lounges-8.jpg'
import Lounges9 from './img/Lounges/Lounges-9.jpg'

import Experience1 from './img/Experience/Experience-1.jpg'
import Experience2 from './img/Experience/Experience-2.jpg'
import Experience3 from './img/Experience/Experience-3.jpg'
import Experience4 from './img/Experience/Experience-4.jpg'
import Experience5 from './img/Experience/Experience-5.jpg'
import Experience6 from './img/Experience/Experience-6.jpg'
import Experience7 from './img/Experience/Experience-7.jpg'
import Experience8 from './img/Experience/Experience-8.jpg'
import Experience9 from './img/Experience/Experience-9.jpg'
import Experience10 from './img/Experience/Experience-10.jpg'
import Experience11 from './img/Experience/Experience-11.jpg'
import Experience12 from './img/Experience/Experience-12.jpg'
import Experience13 from './img/Experience/Experience-13.jpg'
import Experience14 from './img/Experience/Experience-14.jpg'
import Experience15 from './img/Experience/Experience-15.jpg'
import Experience16 from './img/Experience/Experience-16.jpg'
import Experience17 from './img/Experience/Experience-17.jpg'
import Experience18 from './img/Experience/Experience-18.jpg'
import Experience19 from './img/Experience/Experience-19.jpg'
import Experience20 from './img/Experience/Experience-20.jpg'
import Experience21 from './img/Experience/Experience-21.jpg'
import Experience22 from './img/Experience/Experience-22.jpg'
import Experience23 from './img/Experience/Experience-23.jpg'
import Experience24 from './img/Experience/Experience-24.jpg'
import Experience25 from './img/Experience/Experience-25.jpg'
import Experience26 from './img/Experience/Experience-26.jpg'
import Experience27 from './img/Experience/Experience-27.jpg'
import Experience28 from './img/Experience/Experience-28.jpg'


import Image from 'next/image';
import Img from './Img';


const GalleryMasonry = ({opcion}) => {

  const garden = [garden9,garden2,garden8,garden4,garden5,garden6,garden7,garden3,garden1]
  const rooms = [room9,room2,room8,room4,room5,room6,room7,room3,room1,room10,room11,room12,room13,room14,room15,room16]
  const kitchen = [Kitchen9,Kitchen2,Kitchen8,Kitchen4,Kitchen5,Kitchen6,Kitchen7,Kitchen3,Kitchen1,Kitchen10,Kitchen11,Kitchen12]
  const terrace = [terrace9,terrace2,terrace8,terrace4,terrace5,terrace6,terrace7,terrace3,terrace1,terrace10]
  const lounges = [Lounges1,Lounges2,Lounges3,Lounges4,Lounges5,Lounges6,Lounges7,Lounges8,Lounges9]
  const experience = [

     Experience1,
     Experience2,
     Experience3,
     Experience4,
     Experience5,
     Experience6,
     Experience7,
     Experience8,
     Experience9,
     Experience10,
     Experience11,
     Experience12,
     Experience13,
     Experience14,
     Experience15,
     Experience16,
     Experience17,
     Experience18,
     Experience19,
     Experience20,
     Experience21,
     Experience22,
     Experience23,
     Experience24,
     Experience25,
     Experience26,
     Experience27,
     Experience28,

  ]

  const breakpointColumnsObj = {
    default: 4,
  3000: 3,
  2000: 3,
  1200: 3,
  1000: 2,
  500: 1, // número de columnas en pantallas más grandes o iguales a 700px
    // Puedes agregar más tamaños de pantalla aquí si es necesario
  };
  return (
    <div className='w-full h-full'>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid flex mb-8"
  columnClassName="my-masonry-grid_column">
      {
        opcion == "garden"?
        garden.map((foto, index) => (
          
          <div key={index}>
            <Img key={index} foto={foto}/>
          </div>
            

        ))
        :null
      }
      {
        opcion == "rooms"?
        rooms.map((foto, index) => (
          
          <div key={index}>
            <Img key={index} foto={foto}/>
          </div>
            

        ))
        :null
      }
      {
        opcion == "terrace"?
        terrace.map((foto, index) => (
          
          <div key={index}>
            <Img key={index} foto={foto}/>
          </div>
            

        ))
        :null
      }
      {
        opcion == "kitchen"?
        kitchen.map((foto, index) => (
          
          <div key={index}>
            <Img key={index} foto={foto}/>
          </div>
            

        ))
        :null
      }
      {
        opcion == "lounges"?
        lounges.map((foto, index) => (
          
          <div key={index}>
            <Img key={index} foto={foto}/>
          </div>
            

        ))
        :null
      }
      {
        opcion == "experience"?
        experience.map((foto, index) => (
          
          <div key={index}>
            <Img key={index} foto={foto}/>
          </div>
            

        ))
        :null
      }
    </Masonry>
    </div>
   
  );
};

export default GalleryMasonry;
