import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import '../../css/Button.css';
import '../../css/Footer.css';
import Container from './Container.js';
import Textbox from './Textbox.js';
import Collapse from './Collapse.js';
import ImgSlider from './ImgSlider.js';

class Introduction extends Component {  
  render() {
    return (
      <div className="introduction">
        <Container>
        	<Row>
            <Column width='6'>
              <Textbox size="">
                <p>
                  Quisque at erat eu libero consequat tempus. 
                  Quisque mole stie convallis tempus. Ut semper purus metus,
                  a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                </p>
              </Textbox>
            </Column>
            <Column width='6'>
              <ImgSlider />
            </Column>
            <Column width='12'>
              <Collapse name="test" title="Collapse Title" 
                content={
                <p>Quisque at erat eu libero consequat tempus. 
                Quisque mole stie convallis tempus. Ut semper purus metus,
                a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                </p>}
              >

            </Collapse>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Introduction;
