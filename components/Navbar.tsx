import React from 'react'
import styles from '../styles/Navbar.module.scss'


function NavbarComponent() {

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <img src='images/code-solid.svg' /><a href="#">Daniel Visage</a>
                </div>
                <div className={styles.navLinks}>
                    <a className={styles.navLink} href="#skills">Skillset</a>
                    <a className={styles.navLink} href="#portfolio">Portfolio</a>
                    <a className={styles.navLink} href="#contact">Contact</a>
                </div>

            </nav>
        </div>
    )
}

export default NavbarComponent
