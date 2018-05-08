import React, { Component } from 'react';

class Textbox extends Component {  
	render() {
    return (
    	<div>
	    	<div>
	    		<a className="btn btn-primary" data-toggle="collapse" href={ `#${this.props.name}` } role="button" aria-expanded="false" aria-controls={ this.props.name }>
				{ this.props.title }
				</a>
			</div>
			<div className="collapse" id={ this.props.name }>
				{ this.props.content }
			</div>
		</div>
    );
  }
}

export default Textbox;
