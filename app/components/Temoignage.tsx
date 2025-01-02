'use client'
import React,{useState,useEffect} from 'react'
import Styles from '../styles/temoignage.module.scss'
import data from '../data/temoignage'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import {easeIn, motion, spring} from 'framer-motion'

function Temoignage() {
      const [isClient, setIsClient] = useState(false);
          
              useEffect(() => {
                setIsClient(true); // Assure que le code s'exécute côté client
              }, []);

              const variants = {
                          view:(index:any)=>({
                            opacity:1,
                            x:0,
                            transition:{
                              delay:index*0.1,
                              easeIn:easeIn,
                              duration:0.5
                            }
                          }),
                          hidden:{
                            opacity:0,
                            x:-50,
                          }
                        
                        }
  return (
    <div className={Styles.main} >
        <motion.h2 className={Styles.title} initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.5,delay:0}}>Partenaires satisfaits</motion.h2>
        <div className={Styles.boxContainer}>
            {data.map((item, index) => (
                <motion.div key={index} className={Styles.box} custom={index} variants={variants} initial="hidden" whileInView="view" >
                    <div className={Styles.text}>
                        <div className={Styles.quoteContainer}>
                            <FaQuoteLeft className={Styles.quote1} />
                        </div>
                        <p className={Styles.texte}>{item.description}</p>
                        <div className={Styles.name}>{item.name}</div>
                        <h5 className={Styles.poste}>{item.title}</h5>
                    </div>
                </motion.div>
            ))}

        </div>
    </div>
  )
}

export default Temoignage
