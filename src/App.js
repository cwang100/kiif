import React, { Component } from 'react';
import logo from './logo.svg';
import $ from "jquery";
import Header from './js/components/Header.js';
import Navbar from './js/components/Navbar.js';
import ImgSlider from './js/components/ImgSlider.js';
import Container from './js/components/Container.js';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Container>
          <ImgSlider />
        </Container>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
