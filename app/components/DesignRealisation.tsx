

import React from 'react'
import data from '../data/design'
import Styles from '../styles/projects.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/app.css'

import { BsChevronRight,BsChevronLeft } from "react-icons/bs"
import DesignBox from './DesignBox';

function DesignRealisation() {
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
                      <div className={Styles.designIm}>
                        <DesignBox
                        image={items.image}
                        />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='swiper-button-prev'><BsChevronLeft /></button>
            <button className='swiper-button-next'><BsChevronRight /></button>


    </div>
  )
}

export default DesignRealisation

