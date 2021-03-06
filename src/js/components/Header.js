import React, { Component } from 'react';

class Header extends Component {  
	background_style = {
		'backgroundImage': 'url(../images/'+this.props.img+')'
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
