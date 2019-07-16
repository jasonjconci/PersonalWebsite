import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';
import { Jumbotron } from 'reactstrap';
import avatar from './avatar.jpg';
import profile from '../profile.json';



class HomeTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: profile.data.projects
        };
    }
    render() {
        return (
            <div className="homepage">
                <div className = 'homepage-one'>
                    <img className = "avatar" src={avatar}
                        alt="Me out hiking!"/>
                </div>

                <div className="homepage-two">
                    <Jumbotron className="jumbotron">
                        <span>Hello! My name is </span>
                        <h1 className="jumbotron-head">Jason Conci.</h1>
                        <hr className="hr"/>
                        <p>
                            I'm a 22 year old software engineer, based in San Francisco, CA.
                        </p>
                    </Jumbotron>
                </div>
                

                <div className = "section">
                    <div className = "sect-heading">
                        <span className="sect-num" id="home">01.</span>
                        <h4 className="sect-heading">About Me</h4>
                    </div>
                    <hr id="about-hr" />
                    <span className="sect-p">
                        Ever since I was a little kid with a bucket of LEGOs & a pet rat to build houses for, I've loved making things for people & pets alike. 
                        Whether it's programming, music, photography, cars, or IKEA furniture, you can hand me the pieces, and I'll gleefully hand you the product - 
                        Now, with my degree from Gonzaga University, only-slightly-bridled lust for life, and freshly loaded Starbucks card, I'm ready to be your newest go-to dev.
                    </span>
                </div>


                <div className = "section">
                    <div className sec="sect-heading">
                        <span className="sect-num">02.</span>
                        <h4 className="sect-heading">Programming</h4>
                    </div>
                    <hr id="projects-hr" />
                    <span className="sect-p">
                        I recently graduated from Gonzaga University with a Bachelor of Science in Computer Science, 
                        achieving an upper division cumulative GPA of 3.87.
                    </span>
                    <p className="sect-p">I usually work with these tools:</p>
                    <div className="lists">
                        <ul>
                            <h6>Languages: </h6>
                            <li>Python</li>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>React (Redux)</li>
                            <li>Haskell</li>
                        </ul>
                        <ul>
                            <h6>Tools:</h6>
                            <li>UML</li>
                            <li>Docker</li>
                            <li>Git/GitHub</li>
                            <li>AWS</li>
                            <li>Linux</li>
                            <li>Agile</li>

                        </ul>
                    </div>
                    <p className="sect-p">And here are some projects I've worked on:</p>
                    <div className="projects">
                            { profile.data.projects.map(function (project, i) {
                                return (
                                        <ProjectCard className="card__inner [ js-expander ]"
                                        title={project.title}
                                        description = {project.description}
                                        icon={project.icon}
                                        tech ={project.tech}
                                        text_link = {
                                            project.hasOwnProperty("text_link") ? 
                                                project.text_link : null
                                        }
                                        github_link = {
                                            project.hasOwnProperty("github_link") ?
                                                project.github_link : null
                                        }
                                        />
                                );
                            })}
                    </div>
                </div>

                <div className = "section">
                    <div className = "sect-heading">
                        <span className="sect-num" id="home">03.</span>
                        <h4 className="sect-heading">Contact</h4>
                    </div>
                    <hr id="contact-hr" />
                    <span className="sect-p">
                        The best way to get in touch with me is through email, jasonjconci@gmail.com.
                        Feel free to reach out to me there, or via any other platform listed at the top!
                    </span>
                </div>
            </div>
        );
    }
}

export default HomeTwo;