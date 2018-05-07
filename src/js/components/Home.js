import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import Wrapper from './Wrapper.js';
import DetailLeft from './DetailLeft.js';
import DetailRight from './DetailRight.js';
import ImgSlider from './ImgSlider.js';
import Holderjs from 'holderjs';


class Home extends Component {  
  render() {
    return (
      <div>
        <Row>
          <Column width='12'>
            <ImgSlider />
          </Column>
        </Row>

        <Row>
          <Column width='12'>
            <Wrapper>
              <DetailLeft image="holder.js/700x700" 
              title="title1" 
              text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
              
              <DetailRight image="images/5.png" 
              title="title2" 
              text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
              
              <DetailLeft image="holder.js/700x700" 
              title="title3" 
              text="Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum." />
            </Wrapper>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Home;
