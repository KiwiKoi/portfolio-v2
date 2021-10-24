import React from 'react'
import styles from '../styles/Header.module.scss'

function HeaderComponent() {
    return (
        <section className={styles.headerSection}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerTitle} lang="en">Hi, I&apos;m Daniel</h1>
                <h3 className={styles.jobTitle} lang="en">Web developer</h3>
                <a lang="en" className={styles.projectsBtn} href="#portfolio">See My Projects</a>
            </div>

        </section>
    )
}

export default HeaderComponent
