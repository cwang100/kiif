import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import '../../css/Button.css';
import '../../css/Footer.css';
import Holderjs from 'holderjs';
import Container from './Container.js';

class Footer extends Component {  
  render() {
    return (
      <div className="footer">
      <Container>
      	<Row>
      	<Column width='12'>
			<div className="footer_logo_container">
				<a href="#" className="footer_logo">
					<img src="holder.js/124x66" alt="" />
				</a>
	        </div>
        </Column>
        
        <Column width='12'>
	        <div className="footer_link_container">
				<span className="footer_link">
					<a href="">游戏中心</a>
		        </span>
		        <span className="footer_link">
					<a href="">用户安全</a>
		        </span>
		        <span className="footer_link">
					<a href="">找回密码</a>
		        </span>
		        <span className="footer_link">
					<a href="">家长监控</a>
		        </span>
		        <span className="footer_link">
					<a href="">法律条款</a>
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
