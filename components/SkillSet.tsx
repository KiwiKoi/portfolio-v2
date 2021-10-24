import React from 'react'
import SkillCard from './SkillCard';
import styles from '../styles/SkillSet.module.scss'
import { skillData } from '../data/data'


function SkillSetComponent() {




    const skillList = (skillData.map((item) => {
        return <SkillCard key={item.id} skillName={item.skillName} skillIcon={item.skillIcon} />
    }))

    return (<div>

        <section id="skills" className={styles.skillList}>
            <div className="section-title">
                <h2 lang="en">Skillset</h2>
            </div>
            <div className={styles.skillListContainer}>
                {skillList}
            </div>
        </section>
    </div>
    )
}

export default SkillSetComponent
