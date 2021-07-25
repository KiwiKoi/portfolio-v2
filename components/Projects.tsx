import React from 'react'

function ProjectsComponent() {
    return (
        <div>
            <section id="portfolio" className="portfolio">
                <div className="section-title">
                    <h2 lang="en">Portfolio</h2>
                    <h2 lang="fr">Portfolio</h2>
                </div>
                <div className="projects">
                    <div className="project card" >
                        <img className="card-img-top card-body" src="images/chatter-preview.png" alt="Card image cap" />
                        <div className="card-body">
                            <h2 lang="en" className="card-title" >Chatter App (work in progess)</h2>
                            <h2 lang="fr" className="card-title" >Chatter App (en cours)</h2>
                            <p lang="en" className="card-text">Group project worked on for my course at Wild Code School, fullstack app with React and Nextjs.</p>
                            <p lang="fr" className="card-text">Projet de groupe fullstack avec React et Nextjs.</p>
                            <a lang="en" href="https://chatter.wns.wilders.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live link</a>
                            <a lang="fr" href="https://chatter.wns.wilders.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lien</a>
                            <a href="hub.com/WildCodeSchool/2020-11-wns-remote2-groupe1-projet" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
                        </div>
                    </div>
                    <div className="project card"  >
                        <img className="card-img-top card-body" src="images/prismoio-preview.png" alt="Card image cap" />
                        <div className="card-body">
                            <h2 lang="en" className="card-title" >Prismo.io</h2>
                            <h2 lang="fr" className="card-title" >Prismo.io</h2>
                            <p lang="en" className="card-text">Prismo.io is the website I worked on for a startup that specializes in HR profiling tech.</p>
                            <p lang="fr" className="card-text">Prismo.io est le site vitrine de PRISMO, un startup spécialisant dans les technologies de profiling RH</p>
                            <a lang="en" href="https://prismo.io/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live link</a>
                            <a lang="fr" href="https://prismo.io/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lien</a>
                        </div>
                    </div>
                    <div className="project card"  >
                        <img className="card-img-top card-body" src="images/argonauts-preview.png" alt="Card image cap" />
                        <div className="card-body">
                            <h2 lang="en" className="card-title" >Argonauts App</h2>
                            <h2 lang="fr" className="card-title" >Appli Argonautes</h2>
                            <p lang="en" className="card-text">A fullstack React app with MongoDB database. Function : store names on database and render them in a row.</p>
                            <p lang="fr" className="card-text">Une application React full stack avec une base de données MongoDB. La fonctionnalité : ajouter des noms à une liste.</p>
                            <a lang="en" href="https://argonauts-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live link</a>
                            <a lang="fr" href="https://argonauts-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lien</a>
                        </div>
                    </div>
                    <div className="project card"  >
                        <img className="card-img-top card-body" src="images/pokedex-preview.png" alt="Card image cap" />
                        <div className="card-body">
                            <h2 lang="en" className="card-title" >Pokédex</h2>
                            <h2 lang="fr" className="card-title" >Pokédex</h2>
                            <p lang="en" className="card-text">A pokedex made in Reactjs with the PokeAPI.</p>
                            <p lang="fr" className="card-text">Une Pokédex fait avec Reactjs et le PokéAPI.</p>
                            <a lang="en" href="https://pokedex-practice-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live link</a>
                            <a lang="fr" href="https://pokedex-practice-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lien</a>
                        </div>
                    </div>
                    <div className="project card"  >
                        <img className="card-img-top card-body" src="images/BB-preview.png" alt="Card image cap" />
                        <div className="card-body">
                            <h2 lang="en" className="card-title" >Breaking Bad App</h2>
                            <h2 lang="fr" className="card-title" >Breaking Bad App</h2>
                            <p lang="en" className="card-text">An info app that pulls character data from the Breaking Bad API.</p>
                            <p lang="fr" className="card-text">Une appli qui rend des données sur les personages de Breaking Bad grâce à son API.</p>
                            <a lang="en" href="https://breakingbad-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live link</a>
                            <a lang="fr" href="https://breakingbad-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lien</a>
                        </div>
                    </div>
                    <div className="project card"  >
                        <img className="card-img-top card-body" src="images/hangman-preview.png" alt="Card image cap" />
                        <div className="card-body">
                            <h2 lang="en" className="card-title" >Hangman  </h2>
                            <h2 lang="fr" className="card-title" >Pendu</h2>
                            <p lang="en" className="card-text">A hangman app created with javascript.</p>
                            <p lang="fr" className="card-text">Une appli Pendu créée avec javascript.</p>
                            <a lang="en" href="https://hangman-practice-app.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live link</a>
                            <a lang="fr" href="https://hangman-practice-app.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lien</a>
                        </div>
                    </div>
                    <div className="project card"  >
                        <img className="card-img-top card-body" src="images/portfolio-preview.png" alt="Card image cap" />
                        <div className="card-body">
                            <h2 className="card-title" lang="en">Portfolio Site</h2>
                            <h2 className="card-title" lang="fr">Mon portfolio</h2>
                            <p lang="en" className="card-text">My portfolio site made in HTML/CSS/Javascript and Bootstrap.</p>
                            <p lang="fr" className="card-text">Mon site personnel créé avec HTML/CSS/Javascript et Bootstrap.</p>
                            <a lang="en" href="https://www.danielvisage.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live link</a>
                            <a lang="fr" href="https://www.danielvisage.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lien</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectsComponent
