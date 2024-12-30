'use client'
import React,{useState} from 'react'
import Styles from '../styles/projects.module.scss'
import { MdOutlineDevices,MdOutlineDesignServices } from "react-icons/md";
import { SiMaterialdesignicons, } from "react-icons/si";
import DevRealisation from './DevRealisation';
import DesignRealisation from './DesignRealisation';
import Uxrealisation from './Uxrealisation';
import { MdSwipe } from "react-icons/md";

function Projects() {

    const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={Styles.main}>
        <h2 className={Styles.title}>Réalisations</h2>
        <div className={Styles.textIntro}>Je vous invite à découvrir dans cette section les projets sur lesquels j'ai travaillé avec passion et créativité. Chaque projet témoigne de mon engagement à fournir des solutions innovantes, qu'il s'agisse de développement web, mobile ou de design graphique. Ces réalisations reflètent mes compétences techniques, mon sens du détail et mon désir constant d'apporter une réelle valeur ajoutée à travers mes créations. </div>
        
        <div className={Styles.tabHeaderMain}>
            <div onClick={()=>setActiveTab(1)} className={activeTab==1?`${Styles.headerBoxTitleContainer} ${Styles.tabActive}`:`${Styles.headerBoxTitleContainer}`}><MdOutlineDevices /> <span>Dev</span></div>
            <div onClick={()=>setActiveTab(2)} className={activeTab==2? `${Styles.headerBoxTitleContainer} ${Styles.tabActive}`:`${Styles.headerBoxTitleContainer}`}><MdOutlineDesignServices /> <span>Design</span></div>
            <div onClick={()=>setActiveTab(3)} className={activeTab==3?`${Styles.headerBoxTitleContainer} ${Styles.tabActive}`:`${Styles.headerBoxTitleContainer}`}><SiMaterialdesignicons /> <span>Ux/Ui</span></div>
        </div>
        <div className={Styles.swiper}><MdSwipe/></div>
        {activeTab==1 && <DevRealisation/>}
        {activeTab==2 && <DesignRealisation/>}
        {activeTab==3 && <Uxrealisation/>}
 
    </div>
  )
}

export default Projects
