import React from 'react'
import Styles from '../styles/main.module.scss';
import Link from 'next/link';

function Nav() {
  return (
    <div className={Styles.navContainer}>
        <div className={Styles.menu}>
            <Link className={Styles.lien} href='/'>Home</Link>
            <Link className={Styles.lien} href='/'>A propos</Link>
            <Link className={Styles.lien} href='/'>Services</Link>
            <Link className={Styles.lien} href='/'>Competences</Link>
            <Link className={Styles.lien} href='/'>Réalisation</Link>
        </div>
    </div>
  )
}

export default Nav
