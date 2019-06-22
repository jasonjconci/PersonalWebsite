import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <Navbar bg = "light" expand="lg">
                <Navbar.Brand href="#home">Jason Conci!</Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;