
'use client'
import React from 'react'
import data from '../data/design'
import Styles from '../styles/projects.module.scss'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/app.css'
import { BsChevronRight,BsChevronLeft } from "react-icons/bs"
import DesignBox from './DesignBox';
import {easeIn, motion, spring} from 'framer-motion'
import UseScreenWidth from './UseScreenWidth';

function DesignRealisation() {
  
  const screenWidth = UseScreenWidth();// recuperer la lageur du l'écran du navigateur
  const [isClient, setIsClient] = useState(false);
  if (screenWidth === null) return null;
  
      
       {/*   useEffect(() => {
            setIsClient(true); // Assure que le code s'exécute côté client
          }, []);*/}
    
    
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
    <div className={Styles.DesvRealisationMain}>
            <Swiper
              spaceBetween={4}
              slidesPerView={screenWidth <= 991 ? 2 : 4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={true} modules={[Navigation]}

            >

                {data.map((items,index)=>(
                    <SwiperSlide key={index}>
                      <motion.div custom={index} variants={variants} initial="hidden" whileInView="view" key={index}>
                      <div className={Styles.designIm}>
                        <DesignBox
                        image={items.image}
                        />
                        </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='swiper-button-prev'><BsChevronLeft /></button>
            <button className='swiper-button-next'><BsChevronRight /></button>


    </div>
  )
}

export default DesignRealisation

