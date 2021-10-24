import React from 'react'
import Image from 'next/image'
import styles from '../styles/SkillCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function SkillCardComponent(props: any) {

    return (
        <div>
            <div className={styles.skillCard}>
                <div>
                    <Image height='100%' width='100%' className={styles.skillIcon} src={props.skillIcon} />
                    <h3>{props.skillName}</h3>
                </div>
            </div>
        </div>
    )
}

export default SkillCardComponent
