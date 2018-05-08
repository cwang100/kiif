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
        <Header img="1"/>
        <Container>
          <Row>
            <Column width='12'>
              
            </Column>
          </Row>
          <Row>
            <Column width='12'>
              <Wrapper>
                <Video />
              </Wrapper>
            </Column>
          </Row>
          <Row>
            <Column width='12'>
              <Wrapper>
                <DetailLeft 
                  image="images/7.png" 
                  title="title1" 
                >
                  <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                  </p>
                </DetailLeft>
                <DetailRight 
                  image="images/8.png" 
                  title="title2" 
                >
                  <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                  </p>
                </DetailRight>
                <DetailLeft 
                  image="images/9.png" 
                  title="title3" 
                >
                  <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                  </p>
                </DetailLeft>
              </Wrapper>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
