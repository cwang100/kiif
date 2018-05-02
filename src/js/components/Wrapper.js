import React, { Component } from 'react';
import '../../css/Wrapper.css';

class Row extends Component {  
  render() {
    return (
      <div className="wrapper">{ this.props.children }</div>
    );
  }
}

export default Row;
