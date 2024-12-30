'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Styles from '../styles/services.module.scss';
import ServicesBox from './ServicesBox';
import { Roboto,Poppins } from 'next/font/google'
import data from '../data/infos';
import {easeIn, motion, spring} from 'framer-motion'


const roboto = Roboto({
    subsets:['latin'],
    weight:'500',
    variable: '--font-roboto',
})

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})

function Services() {
  const [infos, setInfos] = useState([
    {
      id: 1,
      title: 'Développement logiciel',
      description: 'Création de sites web, applications mobiles et interfaces web responsive.',
      src:'./images/icone1.png',
    },
    {
      id: 2,
      title: 'Développement Web',
      description: 'Création de sites web, applications mobiles et interfaces web responsive.',
      src:'./images/icone2.png',
    },
    {
      id: 3,
      title: 'Développement mobile',
      description: 'Création de sites web, applications mobiles et interfaces web responsive.',
      src:'./images/icone3.png',
    },
    {
      id: 4,
      title: 'Design graphique',
      description: 'Création de sites web, applications mobiles et interfaces web responsive.',
      src:'./images/icone4.png',
    }
  ])

  
      const [isClient, setIsClient] = useState(false);
  
      useEffect(() => {
        setIsClient(true); // Assure que le code s'exécute côté client
      }, []);


      const variants = {
        view:(index:any)=>({
          y:0,
          opacity:1,
          transition:{
            delay:index*0.2,
            type: spring,
            stiffness:300,
            easeIn:easeIn,
            duration:0.3
          }
        }),
        hidden:{
          y:40,
          opacity:0,
        }
      
      }

  return (
    <div className={`${Styles.main} ${roboto.variable} ${poppinsTini.variable}`}>
      <motion.h2 
        className={Styles.title}
        initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.5,delay:0}}
      >
          Mes Services
      </motion.h2>
      <div className={Styles.boxMain}>
        {data.map((item,index)=>(
          <motion.div custom={index} variants={variants} initial="hidden" whileInView="view" key={index}>
              <ServicesBox
              id={item.id}
              title={item.title}
              description={item.description}
              src={item.src}
              />
          </motion.div>
        ))}
      </div>
       
    </div>
  )
}

export default Services
