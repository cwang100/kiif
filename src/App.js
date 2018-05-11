import React, { Component } from 'react';
import NavbarMain from './js/components/Navbar.js';
import Content from './js/components/Content.js';
import Home from './js/components/Home.js';
import Footer from './js/components/Footer.js';
import Introduction from './js/components/Introduction.js';
import About from './js/components/About.js';
import Laws from './js/components/Laws.js';
import Hire from './js/components/Hire.js';
import Contact from './js/components/Contact.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
        <NavbarMain />
        <Content>
          <Route exact path="/" component={Home}/>
          <Route path="/intro" component={Introduction}/>
          <Route path="/about" component={About}/>
          <Route path="/hire" component={Hire}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/laws" component={Laws}/>
          <Footer />
        </Content>

      </div>
      </Router>
    );
  }
}

export default App;
