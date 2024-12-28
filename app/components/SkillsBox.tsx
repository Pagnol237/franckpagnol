import React from 'react'
import Styles from '../styles/skills.module.scss';
import Image from 'next/image';


type skillType ={
    id:number,
    name:string,
    color:string,
    taille:string,
    pic:any,
 
}

function SkillsBox(props:skillType) {
  return (
    <div className={Styles.skillsBoxMain}>
        <div>
        <Image
                    src={props.pic}
                    alt='activité cades'
                    className={Styles.icon}
            />
        </div>
        <div className={Styles.skillName}>{props.name}</div>
       
    </div>
  )
}

export default SkillsBox
