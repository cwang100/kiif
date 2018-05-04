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


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Container>
            <Home />
          </Container>
          <Footer />
        </Content>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
