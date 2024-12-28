'use client'
import React,{useState} from 'react'
import Styles from '../styles/services.module.scss';
import ServicesBox from './ServicesBox';
import { Roboto,Poppins } from 'next/font/google'
import data from '../data/infos';


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
  return (
    <div className={`${Styles.main} ${roboto.variable} ${poppinsTini.variable}`}>
      <h2 className={Styles.title}>Mes Services</h2>
      <div className={Styles.boxMain}>
        {data.map((item,index)=>(
          <div key={index}>
              <ServicesBox
              id={item.id}
              title={item.title}
              description={item.description}
              src={item.src}
              />
          </div>
        ))}
      </div>
       
    </div>
  )
}

export default Services
