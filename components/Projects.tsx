import React from 'react'
import ProjectCardComponent from './ProjectCard';
import styles from "../styles/Projects.module.scss"
import { projectData } from '../data/data'


function ProjectsComponent() {
    const projectList = (projectData.map((item) => {
        return <ProjectCardComponent
            key={item.id}
            projectName={item.projectName}
            projectDescription={item.projectDescription}
            projectLink={item.projectLink}
            projectGithub={item.projectGithub}
            projectImg={item.projectImg}
        />
    }))

    return (
        <div>
            <section id="portfolio" className={styles.projectList}>
                <div className="section-title">
                    <h2 lang="en">Portfolio</h2>
                </div>
                <div className={styles.projectListContainer}>
                    <div className={styles.projectList}>
                        {projectList}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ProjectsComponent
