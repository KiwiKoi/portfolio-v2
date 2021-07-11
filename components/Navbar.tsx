import React from 'react'
import styles from '../styles/Navbar.module.scss'


function NavbarComponent() {

    return (
        <div>
            <nav className={styles.navbar}>
                <a className={styles.navbarBrand} href="#"><i className="fas fa-code logo"></i>Daniel Visage</a>

                <div className={styles.navLinks}>
                    <div className="">
                        <a className={styles.navLink} href="#skills">Skillset</a>
                        <a className={styles.navLink} href="#portfolio">Portfolio</a>
                        <a className={styles.navLink} href="#contact">Contact</a>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent
