import React, { Component } from 'react';
import '../../css/Textbox.css';

class Textbox extends Component {  
	
	render() {
    return (
    	<div className="intro_wrapper">
      		<div className={`textbox_${ this.props.size }`}>
      			{ this.props.children }
      		</div>
      	</div>
    );
  }
}

export default Textbox;
