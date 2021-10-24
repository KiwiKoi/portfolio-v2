import React from 'react'
import styles from '../styles/ProjectCard.module.scss'
import Image from 'next/image'

function ProjectCardComponent(props: any) {
    return (
        <div className={styles.projectCard} >
            <div className={styles.imageContainer}>
                <Image layout='fill' className={styles.projectImg} src={props.projectImg} alt="Card image cap" />
            </div>
            <div className={styles.cardText}>
                <h2 lang="en" className={styles.cardTitle}>{props.projectName}</h2>
                <p lang="en" className={styles.cardDesc}>{props.projectDescription}</p>
            </div>
            <div className={styles.buttons}>
                {props.projectLink && <a
                    href={props.projectLink}
                    target="_blank" rel="noopener noreferrer"
                    className={styles.buttonPrimary}>Live link</a>}
                {props.projectGithub && <a
                    href={props.projectGithub}
                    target="_blank" rel="noopener noreferrer"
                    className={styles.buttonPrimary}>Github</a>
                }
            </div>
        </div>
    )
}

export default ProjectCardComponent
