import React from 'react'
import Styles from '../styles/footer.module.scss'
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { TfiGithub } from "react-icons/tfi";
import { BiLogoGmail } from "react-icons/bi";
import Link from 'next/link';

function Footer() {
  return (
    <div className={Styles.main} >
        <Link href='https://www.linkedin.com/in/franck-pagnol-0a736a150/' target="_blank" rel="noopener noreferrer">
            <div className={Styles.box}>
                <ImLinkedin2 />
            </div>
        </Link>

        <Link href='/'>
            <div className={Styles.box}>
                <BsTwitterX />
            </div>
        </Link>

        <Link href='https://github.com/Pagnol237' target="_blank" rel="noopener noreferrer">
        <div className={Styles.box}>
            <TfiGithub />
        </div>
        </Link>

        <Link href='mailto:pnounjo@gmail.com'>
        <div className={Styles.box}>
            <BiLogoGmail />
        </div>
        </Link>
     
    </div>
  )
}

export default Footer
