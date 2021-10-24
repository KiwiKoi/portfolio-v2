import React, { useState } from 'react'
import Image from 'next/image'
import { faBars, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Navbar.module.scss'


function NavbarComponent() {

    const [expandNavbar, setExpandNavbar] = useState<string | null>(null);


    const navbarToggler = () => {
        expandNavbar === null ? setExpandNavbar(styles.expandNavbar) : setExpandNavbar(null);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <div className={styles.navbarBrand}>
                        <FontAwesomeIcon icon={faCode} />
                        <a>Daniel Visage</a></div>
                    <button type="button" onClick={() => navbarToggler()} className={styles.navbarToggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {!expandNavbar &&
                        <div className={styles.navLinks}>
                            <a className={styles.navLink} href="#skills">Skillset</a>
                            <a className={styles.navLink} href="#portfolio">Portfolio</a>
                            <a className={styles.navLink} href="#contact">Contact</a>
                        </div>}

                </div>


            </nav>
            <div className={`${styles.mobileMenu} ${expandNavbar}`}>
                <div className={styles.mobileNavLinks}>
                    <a className={styles.navLink} href="#skills">Skillset</a>
                    <a className={styles.navLink} href="#portfolio">Portfolio</a>
                    <a className={styles.navLink} href="#contact">Contact</a>
                </div>

            </div>

        </>

    )
}

export default NavbarComponent
