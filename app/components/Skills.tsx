'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Styles from '../styles/skills.module.scss';
import data from '../data/skil'
import SkillsBox from './SkillsBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import {easeIn, motion, spring} from 'framer-motion'
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/app.css';
import UseScreenWidth from './UseScreenWidth';


import { BsChevronRight,BsChevronLeft } from "react-icons/bs"




function Skills() {
  const screenWidth = UseScreenWidth();
  const [isClient, setIsClient] = useState(false);
  if (screenWidth === null) return null;
    
    {/* useEffect(() => {
          setIsClient(true); // Assure que le code s'exécute côté client
        }, []);
  */} 
  
        const variants = {
          view:(index:number)=>({
            opacity:1,
            scale:1,
            transition:{
              delay:index*0.1,
              type: spring,
              stiffness:400,
              easeIn:easeIn,
              duration:0.1
            }
          }),
          hidden:{
            opacity:0,
            scale:0,
          }
        
        }


  return (
    <div className={Styles.main}>
        <motion.h2 className={Styles.title} initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{ease:easeIn,duration:0.5,delay:0}}>
          Mes compétences
        </motion.h2>
        <div className={Styles.boxMain}>

            <Swiper
              spaceBetween={4}
              slidesPerView={screenWidth<=991?2:4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {data.map((items,index)=>(
                <SwiperSlide key={index}>
                  <motion.div custom={index} variants={variants} initial="hidden" whileInView="view" key={index}>
                    <SkillsBox
                      id={items.id}
                      name={items.name}
                      color={items.color}
                      taille={items.taille}
                      pic={items.pic}
                      />
                  </motion.div>
                </SwiperSlide>
              ))}


            </Swiper>
          <button className='swiper-button-prev'><BsChevronLeft /></button>
          <button className='swiper-button-next'><BsChevronRight /></button>
        </div>
    </div>
  )
}

export default Skills
