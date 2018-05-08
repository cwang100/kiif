import React, { Component } from 'react';
import '../../css/Navbar.css';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav} from 'react-bootstrap';

class NavbarMain extends Component {  
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Kiif</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
         <Navbar.Collapse>
        <Nav pullRight>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="intro">Introduction</Link></NavItem>
          <NavItem><Link to="about">About</Link></NavItem>
          <NavItem><Link to="intro">Contact</Link></NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMain;
