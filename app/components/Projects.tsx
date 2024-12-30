'use client'
import React,{useState,useEffect} from 'react'
import Styles from '../styles/projects.module.scss'
import { MdOutlineDevices,MdOutlineDesignServices } from "react-icons/md";
import { SiMaterialdesignicons, } from "react-icons/si";
import DevRealisation from './DevRealisation';
import DesignRealisation from './DesignRealisation';
import Uxrealisation from './Uxrealisation';
import { MdSwipe } from "react-icons/md";
import {easeIn, motion, spring} from 'framer-motion'

function Projects() {

    const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={Styles.main}>
        <motion.h2 className={Styles.title} initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.5,delay:0}}>
          Réalisations
        </motion.h2>
        <motion.div className={Styles.textIntro} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.5,delay:0}}>
          Je vous invite à découvrir dans cette section les projets sur lesquels j'ai travaillé avec passion et créativité. Chaque projet témoigne de mon engagement à fournir des solutions innovantes, qu'il s'agisse de développement web, mobile ou de design graphique. Ces réalisations reflètent mes compétences techniques, mon sens du détail et mon désir constant d'apporter une réelle valeur ajoutée à travers mes créations. 
        </motion.div>
        
        <div className={Styles.tabHeaderMain}>
            <motion.div 
              onClick={()=>setActiveTab(1)} 
              className={activeTab==1?`${Styles.headerBoxTitleContainer} ${Styles.tabActive}`:`${Styles.headerBoxTitleContainer}`}
              initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.3,delay:0}}
            >
                <MdOutlineDevices /> 
                <span>Dev</span>
            </motion.div>

            <motion.div 
              onClick={()=>setActiveTab(2)} 
              className={activeTab==2? `${Styles.headerBoxTitleContainer} ${Styles.tabActive}`:`${Styles.headerBoxTitleContainer}`}
              initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.3,delay:0.2}}
            >
              <MdOutlineDesignServices /> <span>Design</span>
            </motion.div>

            <motion.div 
              onClick={()=>setActiveTab(3)} 
              className={activeTab==3?`${Styles.headerBoxTitleContainer} ${Styles.tabActive}`:`${Styles.headerBoxTitleContainer}`}
              initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.3,delay:0.4}}
            >
                <SiMaterialdesignicons /> 
                <span>Ux/Ui</span>
            </motion.div>
        </div>
        <div className={Styles.swiper}><MdSwipe/></div>
        {activeTab==1 && <DevRealisation/>}
        {activeTab==2 && <DesignRealisation/>}
        {activeTab==3 && <Uxrealisation/>}
 
    </div>
  )
}

export default Projects
