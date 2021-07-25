import React from 'react'
import styles from '../styles/SkillCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function SkillCardComponent(props: any) {

    return (
        <div>
            <div className={styles.skillCard}>
                <div>
                    <img className={styles.skillIcon} src={props.skillIcon} />
                    <h3>{props.skillName}</h3>
                </div>
            </div>
        </div>
    )
}

export default SkillCardComponent
