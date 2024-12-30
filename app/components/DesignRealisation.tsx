

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

function DesignRealisation() {
  const [isClient, setIsClient] = useState(false);
      
          useEffect(() => {
            setIsClient(true); // Assure que le code s'exécute côté client
          }, []);
    
    
          const variants = {
            view:(index:any)=>({
              opacity:1,
              transition:{
                delay:index*0.1,
                easeIn:easeIn,
                duration:0.5
              }
            }),
            hidden:{
              opacity:0,
            }
          
          }
  return (
    <div className={Styles.DesvRealisationMain}>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
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

