import React, { Component } from 'react';
import '../../css/Textbox.css';

class Textbox extends Component {  
	render() {
    return (
    	<div className="intro_wrapper">
      		<div className={`textbox_${ this.props.size }`}>
      			<p>{ this.props.text }</p>
      		</div>
      	</div>
    );
  }
}

export default Textbox;
