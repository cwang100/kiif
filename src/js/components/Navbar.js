import React, { Component } from 'react';
import '../../css/Navbar.css';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav} from 'react-bootstrap';


class NavbarMain extends Component {  
  render() {
    return (
      <Navbar bsStyle="default" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Kiif</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
         <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="/">Home</NavItem>
          <NavItem href="intro">Introduction</NavItem>
          <NavItem href="about">About</NavItem>
          <NavItem href="intro">Contact</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMain;
