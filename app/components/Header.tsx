import React from 'react'
import Styles from '../styles/header.module.scss';
import Image from 'next/image';
import Pic from './images/tof-porfolio1.png';
import { Roboto,Poppins } from 'next/font/google'
import Link from 'next/link';
import { motion } from "motion/react";






const roboto = Roboto({
    subsets:['latin'],
    weight:'500',
    variable: '--font-poppins'
})

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})

function Header() {
  return (
    <div  className={`${Styles.headerContainer} ${roboto.variable}   ${poppinsTini.variable}`} >
        <div className={Styles.left}>
            <div  className={Styles.text1}>Salut, je suis <span className={Styles.nom}>Franck Pagnol</span></div>
            <div className={Styles.titre}>Développeur fullstack & designer graphique</div>
            <div className={Styles.textDescript}>Je suis développeur fullstack avec plusieurs années d'expérience. Mes compétences couvrent la création de sites web, le développement d'applications web et le design graphique</div>
            
                <Link href='/'><div className={Styles.btn}>Contactez moi </div></Link>
           
        </div>


        <div className={Styles.right}>
            <div className={Styles.cercle}></div>
            <Image 
                src={Pic}  
                alt='Nounjo djomini franck pagnol' 
                className={Styles.photoProfile}
            />
        </div>
    </div>
  )
}

export default Header
