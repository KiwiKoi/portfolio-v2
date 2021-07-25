import React from 'react'
import styles from '../styles/SkillCard.module.scss'



function SkillCardComponent(props: any) {

    return (
        <div>
            <div className={styles.skillCard}>
                <div ><i className=''></i>
                    <h3>{props.skillName}</h3>
                </div>
            </div>
        </div>
    )
}

export default SkillCardComponent
