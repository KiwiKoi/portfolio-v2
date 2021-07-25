import React from 'react'

function ContactComponent() {
    return (
        <section id="contact" className="contact">
            <div className="section-title">
                <h2 lang="en">Get In Touch</h2>
                <h2 lang="fr">Contactez-moi</h2>
            </div>
            <div>
                <a className="footer-link" href="https://linkedin.com/danielvisage" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-linkedin"></i></a>
                <a className="footer-link" href="https://github.com/KiwiKoi" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-github"></i></a>
                <a className="footer-link" href="mailto:danielo.visage@gmail.com" target="_blank" rel="noopener noreferrer"><i className="social-icon fas fa-envelope"></i></a>
            </div>
        </section>
    )
}

export default ContactComponent
