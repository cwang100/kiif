import React, { Component } from 'react';
import logo from './logo.svg';
import $ from "jquery";
import Header from './js/components/Header.js';
import Navbar from './js/components/Navbar.js';
import ImgSlider from './js/components/ImgSlider.js';
import Container from './js/components/Container.js';
import Content from './js/components/Content.js';
import Home from './js/components/Home.js';
import Footer from './js/components/Footer.js';
import Introduction from './js/components/Introduction.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Content>
          <Route exact path="/" component={Home}/>
          <Route path="/intro" component={Introduction}/>
          <Route path="/about" component={Introduction}/>
          <Route path="/contact" component={Introduction}/>
          <Footer />
        </Content>

      </div>
      </Router>
    );
  }
}

export default App;
