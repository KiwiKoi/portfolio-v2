import React from 'react'
import styles from '../styles/Navbar.module.scss'


function NavbarComponent() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <div className={styles.navbarBrand}>
                    <img src='images/code-solid.svg' /><a >Daniel Visage</a>
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
