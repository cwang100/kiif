import React, { Component } from 'react';

class Header extends Component {  
	background_style = {
		'background-image': 'url(../images/'+this.props.img+'.jpg)'
	}
	render() {
		return (
			<header className="header" style={this.background_style}>
				{ this.props.children }
			</header>
		);
	}
}

export default Header;
