import React from 'react'
import Image from 'next/image'
import Styles from '../styles/projects.module.scss'
import Link from 'next/link';
import { IoEyeSharp,IoLogoGithub } from "react-icons/io5";



type devType={
    image:any;
    url:string;
    git:string;
}

function DevBox(props:devType) {
  return (
    <div  className={Styles.box}>
        <Image src={props.image} alt={'realisation'} className={Styles.imagesBox} />
        <div className={Styles.redirectionIconBox}>
            <Link href={props.url} target="_blank" rel="noopener noreferrer">
                <div className={Styles.redirectionIconContainer}><IoEyeSharp /></div>
            </Link>
            <Link href={props.git} target="_blank" rel="noopener noreferrer">
                <div className={Styles.redirectionIconContainer}><IoLogoGithub /></div>
            </Link>

        </div>


    </div>
  )
}

export default DevBox
