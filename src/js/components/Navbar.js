import React, { Component } from 'react';
import '../../css/Navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends Component {  
  render() {
    return (
        <nav className="navbar navbar">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <Link to="/" className="navbar-brand">Kiif</Link>
    </div>
      
    <div className="collapse navbar-collapse" id="myNavbar">

      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="intro">Introduction</Link></li>
        <li><Link to="intro">About</Link></li>
        <li><Link to="intro">Contact</Link></li>
      </ul>
    </div>
          
  </div>
</nav>
    );
  }
}

export default Navbar;
