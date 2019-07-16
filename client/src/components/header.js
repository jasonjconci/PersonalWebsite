import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


/**
 * This file defines our website header. Pretty simple.
 * One thing I'll note is that we're using reactstrap's NavLink, rather than react-router's
 * Link component. I personally find NavLink easier to work with, since it functions as a
 * component itself, and I don't need any of the other prop-passing or sublinking associated
 * with router's Link component.
 */
class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <Navbar className = "navbar" color="dark" dark expand="md">
                    <NavbarBrand href='/'>
                        <span>Jason Conci</span>
                    </NavbarBrand>

                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/work/">Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/education/">Education</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog/">Blog</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        );
    }
}

export default Header;