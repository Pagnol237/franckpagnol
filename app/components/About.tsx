import React from 'react'
import Styles from '../styles/about.module.scss';
import { Roboto,Poppins } from 'next/font/google'
import Pic from './images/about.png'
import Image from 'next/image';

const roboto = Roboto({
    subsets:['latin'],
    weight:'500',
    variable: '--font-roboto',
})

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})
function About() {
  return (
    <div className={`${Styles.main} ${roboto.variable}   ${poppinsTini.variable}`}>
      <div className={Styles.left}>
      <Image 
                src={Pic}  
                alt='Nounjo djomini franck pagnol' 
                className={Styles.picture}
            />
      </div>

      <div className={Styles.right}>
          <h2 className={Styles.title}>À propos de moi</h2>
          <p className={Styles.texte}>
          Passionné par la création numérique, je suis développeur web, mobile et designer graphique avec une approche axée sur l'innovation et l'esthétique.<br/> Grâce à mes compétences en développement front-end et back-end, je connais des applications performantes et intuitives qui répondent aux besoins des utilisateurs. Mon expertise en design graphique me permet de donner vie à des visuels captivants qui convertise.<br/>

          Chaque projet que je réalise est guidé par la recherche de solutions créatives, l'attention aux détails et le souci de l'expérience utilisateur.  Mon objectif est de transformer des idées en produits fonctionnels, définis et impactants.
          </p>
       
      </div>
    </div>
  )
}

export default About
