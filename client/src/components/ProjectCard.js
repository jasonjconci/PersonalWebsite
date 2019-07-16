import React, {Component} from 'react';
import { Card } from 'reactstrap';
import {faTerminal, faGlobe, faLock, faMobileAlt, faWifi, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.render = this.render.bind(this);
    }
    render() {
        return (
                <Card>
                    <div className="card-wrapper">
                        <div className="img">
                            {
                                this.props.icon === "wifi" ? <FontAwesomeIcon icon={faWifi} /> : null
                            }
                            {
                                this.props.icon === "terminal" ? <FontAwesomeIcon icon={faTerminal}/> : null
                            }
                            {
                                this.props.icon === "lock" ? <FontAwesomeIcon icon={faLock}/> : null
                            }
                            {
                                this.props.icon === "globe" ? <FontAwesomeIcon icon={faGlobe}/> : null
                            }
                            {
                                this.props.icon === "mobile" ? <FontAwesomeIcon icon={faMobileAlt}/> : null
                            }
                            {
                                this.props.github_link ? <a href={this.props.github_link} target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon={faGithub} /> </a> : null
                            }
                            {
                                this.props.text_link ? <a href={this.props.text_link} target="_blank"  rel="noopener noreferrer" > <FontAwesomeIcon icon={faFileAlt} /> </a>: null
                            }
                        </div>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        {
                            this.props.tech ? 
                                <span>{this.props.tech.join(', ')}</span> : null
                        }
                    </div>
                </Card>
        )
    }
}

export default ProjectCard;