import React from 'react'
import { useEffect, useState } from "react";
import data from '../data/website'
import Styles from '../styles/projects.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/app.css'
import { BsChevronRight,BsChevronLeft } from "react-icons/bs"
import DevBox from './DevBox';
import {easeIn, motion, spring} from 'framer-motion'
import UseScreenWidth from './UseScreenWidth';

function DevRealisation() {

  const screenWidth = UseScreenWidth();// recuperer la lageur du l'écran du navigateur
  const [isClient, setIsClient] = useState(false);
    
        useEffect(() => {
          setIsClient(true); // Assure que le code s'exécute côté client
        }, []);
  
  
        const variants = {
          view:(index:any)=>({
            y:0,
            opacity:1,
            transition:{
              delay:index*0.2,
              type: spring,
              stiffness:300,
              easeIn:easeIn,
              duration:0.3
            }
          }),
          hidden:{
            y:40,
            opacity:0,
          }
        
        }
  
  return (
    <div className={Styles.DesvRealisationMain}>
            <Swiper
              spaceBetween={4}
              slidesPerView={screenWidth<=991?2:5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={true} modules={[Navigation]}

            >

                {data.map((items,index)=>(
                  <SwiperSlide key={index}>
                      <motion.div custom={index} variants={variants} initial="hidden" whileInView="view" key={index}>
                        <DevBox
                        image={items.image}
                        url={items.url}
                        git={items.git}
                        />
                      </motion.div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <button className='swiper-button-prev'><BsChevronLeft /></button>
            <button className='swiper-button-next'><BsChevronRight /></button>


    </div>
  )
}

export default DevRealisation
