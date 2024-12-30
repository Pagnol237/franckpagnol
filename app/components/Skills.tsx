'use client'
import React from 'react'
import Styles from '../styles/skills.module.scss';
import data from '../data/skil'
import SkillsBox from './SkillsBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/app.css';


import { BsChevronRight,BsChevronLeft } from "react-icons/bs"




function Skills() {

  

  return (
    <div className={Styles.main}>
        <h2 className={Styles.title}>Mes compétences</h2>
        <div className={Styles.boxMain}>

            <Swiper
              spaceBetween={4}
              slidesPerView={5}
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
                  <SkillsBox
                    id={items.id}
                    name={items.name}
                    color={items.color}
                    taille={items.taille}
                    pic={items.pic}
                    />
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
