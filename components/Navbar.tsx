import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../styles/Navbar.module.scss'


function NavbarComponent() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <div className={styles.navbarIcon}>
                    <FontAwesomeIcon className={styles.navbarToggle} icon={faBars} />
                    <div className={styles.navbarBrand}><img src='images/code-solid.svg' /><a >Daniel Visage</a></div>
                </div>
                <div className={styles.navLinks}>
                    <a className={styles.navLink} href="#skills">Skillset</a>
                    <a className={styles.navLink} href="#portfolio">Portfolio</a>
                    <a className={styles.navLink} href="#contact">Contact</a>
                </div>
            </div>


        </nav>
    )
}

export default NavbarComponent
