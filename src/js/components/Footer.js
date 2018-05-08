import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import { Link } from 'react-router-dom'
import '../../css/Button.css';
import '../../css/Footer.css';
import Container from './Container.js';

class Footer extends Component {  
  render() {
    return (
      <div className="footer">
      <Container>
      	<Row>
      	<Column width='12'>
			<div className="footer_logo_container">
				<Link to="intro" className="footer_logo">
					<img src="holder.js/124x66" alt="" />
				</Link>
	        </div>
        </Column>
        
        <Column width='12'>
	        <div className="footer_link_container">
				<span className="footer_link">
					<Link to="intro">Introduction</Link>
		        </span>
		        <span className="footer_link">
					<Link to="intro">Introduction</Link>
		        </span>
		        <span className="footer_link">
					<Link to="intro">Introduction</Link>
		        </span>
		        <span className="footer_link">
					<Link to="intro">Introduction</Link>
		        </span>
		        <span className="footer_link">
					<Link to="intro">Introduction</Link>
		        </span>
	        </div>
        </Column>

        <Column width='12'>
        	<p>Copyright ©2018Kiif All rights reserved</p>
        </Column>

        <Column width='12'>
        	<p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
        </Column>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
