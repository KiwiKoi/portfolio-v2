import React from 'react'
import styles from '../styles/ProjectCard.module.scss'

function ProjectCardComponent(props: any) {
    return (
        <div>
            <div className={styles.projectCard} >
                <img className="card-img-top card-body" src={props.projectImg} alt="Card image cap" />
                <div className="card-body">
                    <h2 lang="en" className="card-title" >{props.projectName}</h2>
                    <p lang="en" className="card-text">{props.projectDescription}</p>
                    {props.projectLink && <a
                        href={props.projectLink}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary">Live link</a>}
                    {props.projectGithub && <a
                        href={props.projectGithub}
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary">Github</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCardComponent
