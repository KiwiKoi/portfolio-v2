import React from 'react'
import SkillCard from './SkillCard';

function SkillSetComponent() {
    return (
        <div>
            <section id="skills" className="skills">
                <div className="section-title">
                    <h2 lang="en">Skillset</h2>
                    <h2 lang="fr">Compétences</h2>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="skill card col-lg-4 col-md-6 col-sm-6">
                            <div ><i className="fab fa-html5"></i>
                                <h3>HTML</h3>
                            </div>
                        </div>
                        <div className="skill card col-lg-4 col-md-6 col-sm-6">
                            <div><i className="fab fa-css3 icon-4x"></i>
                                <h3>CSS</h3>
                            </div>
                        </div>
                        <div className="skill card col-lg-4 col-md-12 col-sm-12">
                            <div>
                                <i className="fab fa-js"></i>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="skill card col-lg-4 col-md-6 col-sm-6">
                            <div>
                                <i className="fab fa-react"></i>
                                <h3>React.js</h3>
                            </div>
                        </div>
                        <div className="skill card col-lg-4 col-md-6 col-sm-6">
                            <div>
                                <i className="fab fa-node-js"></i>
                                <h3>Node.js</h3>
                            </div>
                        </div>
                        <div className="skill card col-lg-4 col-md-12 col-sm-12">
                            <div>
                                <i className="fab fa-bootstrap"></i>
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="skill card col-lg-4 col-md-6 col-sm-6">
                            <div>
                                <i className="fab fa-git-alt"></i>
                                <h3>Git</h3>
                            </div>
                        </div>
                        <div className="skill card col-lg-4 col-md-6 col-sm-6">
                            <div>
                                <i className="fas fa-code"></i>
                                <h3>VCS</h3>
                            </div>
                        </div>
                        <div className="skill card col-lg-4 col-md-12 col-sm-12">
                            <div>
                                <i className="fas fa-terminal"></i>
                                <h3>Command line</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillSetComponent
