import React, { Component } from 'react';

class Textbox extends Component {  
	render() {
    return (
      <div className={`textbox_${ this.props.size }`}>
      	<p>{ this.props.text }</p>
      </div>
    );
  }
}

export default Textbox;
