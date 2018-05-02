import React, { Component } from 'react';
import logo from './logo.svg';
import $ from "jquery";
import Header from './js/components/Header.js';
import Navbar from './js/components/Navbar.js';
import ImgSlider from './js/components/ImgSlider.js';
import Container from './js/components/Container.js';
import Content from './js/components/Content.js';
import Row from './js/components/Row.js';
import Column from './js/components/Column.js';
import Wrapper from './js/components/Wrapper.js';
import Detail from './js/components/Detail.js';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Container>
            <Row>
              <Column width='12'>
                <ImgSlider />
              </Column>
            </Row>

            <Row>
              <Column width='12'>
                <Wrapper>
                  <Detail image="http://static.event.mihoyo.com/new_mihoyo_homepage/images/guide/chara/kiana/kiana.png" 
                  title="title1" 
                  text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
                  <Detail image="http://static.event.mihoyo.com/new_mihoyo_homepage/images/guide/chara/mei/mei.png" 
                  title="title2" 
                  text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
                </Wrapper>
              </Column>
            </Row>

          </Container>
        </Content>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
