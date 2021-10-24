import React from 'react'
import styles from '../styles/Footer.module.scss'

function FooterComponent() {
    return (
        <footer className={styles.footerSection}>
            <p className={styles.copyright}>Copyright ©<span className={styles.copyrightYear}> 2021</span>, Daniel.</p>
        </footer>
    )
}

export default FooterComponent
