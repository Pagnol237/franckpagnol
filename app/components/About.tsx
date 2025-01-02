'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Styles from '../styles/about.module.scss';
import { Roboto,Poppins } from 'next/font/google'
import Pic from './images/about.png'
import Image from 'next/image';
import { motion,easeIn } from "framer-motion";
import '../globals.css';

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
function About() {
      const [isClient, setIsClient] = useState(false);
  
      useEffect(() => {
        setIsClient(true); // Assure que le code s'exécute côté client
      }, []);
  return (
    <div id="section2">
      <div className={`${Styles.main} ${roboto.variable}   ${poppinsTini.variable}`}>
        <div className={Styles.left}>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:easeIn,duration:0.7}}>
              <Image 
                  src={Pic}  
                  alt='Nounjo djomini franck pagnol' 
                  className={Styles.picture}
              />
            </motion.div>
        </div>

        <div className={Styles.right}>
            <motion.h2
              initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn, duration:0.4}} 
              className={Styles.title}>
              À propos de moi
            </motion.h2>
            <motion.p
            initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn, duration:0.4,delay:0.2}}  
            className={Styles.texte}
            >
            Passionné par la création numérique, je suis développeur web, mobile et designer graphique avec une approche axée sur l'innovation et l'esthétique.<br/> Grâce à mes compétences en développement front-end et back-end, je connais des applications performantes et intuitives qui répondent aux besoins des utilisateurs. Mon expertise en design graphique me permet de donner vie à des visuels captivants qui convertise.<br/>
            Chaque projet que je réalise est guidé par la recherche de solutions créatives, l'attention aux détails et le souci de l'expérience utilisateur.  Mon objectif est de transformer des idées en produits fonctionnels, définis et impactants.
            </motion.p>
        
        </div>
      </div>
    </div>
  )
}

export default About
