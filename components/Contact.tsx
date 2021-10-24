import React from 'react'
import styles from '../styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactComponent() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.sectionTitle}>
                <h2 lang="en">Get In Touch</h2>
            </div>
            <div className={styles.contactSocial}>
                <a className={styles.contactLink} href="https://linkedin.com/danielvisage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.contactIcon} icon={faLinkedin} /></a>
                <a className={styles.contactLink} href="https://github.com/KiwiKoi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.contactIcon} icon={faGithub} /></a>
                <a className={styles.contactLink} href="mailto:danielo.visage@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.contactIcon} icon={faEnvelopeSquare} /></a>
            </div>
        </section>
    )
}

export default ContactComponent
