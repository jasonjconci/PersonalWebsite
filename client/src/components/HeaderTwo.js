import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faGoogle, faSpotify } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {

    render(){
        return (
                <div className="footer">
                    <div className="container">
                        <span className="footer-icons">
                            Jason Conci
                        </span>
                        <div className="footer-icons">
                            <a className="icon" href = "https://www.linkedin.com/in/jason-conci-82256b161/" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href = "https://www.github.com/jasonjconci" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://open.spotify.com/user/conchshell_?si=Iy_95iJLTyKWjJ4gY_OELQ" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faSpotify} />
                            </a>
                            <a href="https://photos.app.goo.gl/BPHvRkcy8yk661RT9" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Footer;