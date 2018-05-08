import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import Wrapper from './Wrapper.js';
import DetailLeft from './DetailLeft.js';
import DetailRight from './DetailRight.js';
import Textbox from './Textbox.js';
import Container from './Container.js';
import Header from './Header.js';
import Video from './Video.js'


class Home extends Component {  
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Column width='12'>
              <Textbox size="large" text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum."/>
            </Column>
          </Row>
          <Row>
            <Column width='12'>
              <Video />
            </Column>
          </Row>
          <Row>
            <Column width='12'>
              <Wrapper>
                <DetailLeft image="images/7.png" 
                title="title1" 
                text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
                
                <DetailRight image="images/8.png" 
                title="title2" 
                text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
                
                <DetailLeft image="images/9.png" 
                title="title3" 
                text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
              </Wrapper>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
