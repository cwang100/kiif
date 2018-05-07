import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import '../../css/Button.css';
import '../../css/Footer.css';
import Container from './Container.js';
import Textbox from './Textbox.js';

class Introduction extends Component {  
  render() {
    return (
      <div className="introduction">
      <Container>
      	<Row>
        <Column width='12'>
        	<Textbox size="medium" text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum."/>
          <Textbox size="large" text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum."/>
        </Column>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Introduction;
