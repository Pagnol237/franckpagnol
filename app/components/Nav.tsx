'use client'
import React,{useState} from 'react'
import Styles from '../styles/main.module.scss';
import Link from 'next/link';
import { HiOutlineBars3 } from "react-icons/hi2";
import '../globals.css';


function Nav() {
  const [isopen,setIsopen]=useState(false);
  const togglemenu =()=>{
      setIsopen(!isopen)
  }
  return (
    <div className={Styles.navContainer}>
      <div className={Styles.toggleBar} onClick={togglemenu}><HiOutlineBars3 /></div>

        <div className={`${isopen?Styles.on:Styles.off}`}>
          <div className={Styles.menu}>
              <Link onClick={togglemenu} className={Styles.lien} href="#section1">Home</Link>
              <Link onClick={togglemenu} className={Styles.lien} href="#section2">A propos</Link>
              <Link onClick={togglemenu} className={Styles.lien} href="#section3">Services</Link>
              <Link onClick={togglemenu} className={Styles.lien} href="#section4">Competences</Link>
              <Link onClick={togglemenu} className={Styles.lien} href="#section5">Réalisation</Link>
          </div>
        </div>
    </div>
  )
}

export default Nav
