'use client'
import React from 'react'
import Styles from '../styles/services.module.scss';
import Image from 'next/image';

type infosType ={
    id:number,
    title:string,
    description:string,
    src:any,
}

function ServicesBox(props:infosType) {
  return (
    <div className={Styles.mainBox}>
        <div className={Styles.seconMain}>
            <div className={Styles.idNum}>{props.id}</div>
            <div className={Styles.iconContainer}>
            <Image
                    src={props.src}
                    alt='activité cades'
                    className={Styles.icon}
            />
            </div>
            <div className={Styles.serviceTitle}>{props.title}</div>
            <div className={Styles.serviceText}>{props.description}</div>
        </div>
    </div>
  )
}

export default ServicesBox
