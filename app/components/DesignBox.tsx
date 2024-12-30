

import React from 'react'
import Image from 'next/image'
import Styles from '../styles/projects.module.scss'
import Link from 'next/link';
import { IoEyeSharp,IoLogoGithub } from "react-icons/io5";



type devType={
    image:any;
}

function DesignBox(props:devType) {
  return (
    <div  className={Styles.box}>
        <Image src={props.image} alt={'realisation'} className={Styles.imagesBox} />
       
    </div>
  )
}

export default DesignBox

