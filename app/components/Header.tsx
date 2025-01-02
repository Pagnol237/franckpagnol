'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Styles from '../styles/header.module.scss';
import Image from 'next/image';
import Pic from './images/tof-porfolio1.png';
import { Roboto,Poppins } from 'next/font/google'
import Link from 'next/link';
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

function Header() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // Assure que le code s'exécute côté client
    }, []);
  return (
    <div id="#section1">
        <div  className={`${Styles.headerContainer} ${roboto.variable}   ${poppinsTini.variable}`} >
            <div className={Styles.left}>
                <motion.div 
                    initial={{opacity:0,x:"-5vw"}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.5,delay:0}}
                    className={Styles.text1}
                >
                        Salut, je suis <span className={Styles.nom}>Franck Pagnol</span>
                </motion.div>
                <motion.div 
                    initial={{opacity:0,x:"-5vw"}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.5,delay:0.3}}
                    className={Styles.titre}
                >
                    Développeur fullstack & designer graphique
                </motion.div>
                <motion.div 
                    initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.5,delay:0.5}}
                    className={Styles.textDescript}>
                    Je suis développeur fullstack avec plusieurs années d'expérience. Mes compétences couvrent la création de sites web, le développement de logiciel, d'applications web,mobile et le design graphique
                </motion.div>
                
                    <Link href='mailto:pnounjo@gmail.com'>
                        <motion.div 
                            initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{ease:easeIn,duration:0.5, delay:0.6}}
                            className={Styles.btn}
                        >
                            Contactez moi 
                        </motion.div>
                    </Link>
            
            </div>


            <div className={Styles.right}>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:easeIn,duration:0.7}}>
                <motion.div 
                    className={Styles.cercle}
                    initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{ease:easeIn,duration:1.5,delay:0.5}}
                >
                </motion.div>
                    <Image 
                        src={Pic}  
                        alt='Nounjo djomini franck pagnol' 
                        className={Styles.photoProfile}
                    />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Header
