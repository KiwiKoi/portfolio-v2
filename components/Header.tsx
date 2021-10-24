import React from 'react'
import styles from '../styles/Header.module.scss'

function HeaderComponent() {
    return (
        <section className={styles.headerSection}>
            <h1 className={styles.headerTitle} lang="en">Hi, I'm Daniel</h1>
            <h3 className={styles.jobTitle} lang="en">Web developer</h3>
            <a lang="en" className={styles.projectsBtn} href="#portfolio">See My Projects</a>
        </section>
    )
}

export default HeaderComponent
