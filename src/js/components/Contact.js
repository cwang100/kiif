import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import Wrapper from './Wrapper.js';
import Header from './Header.js';

import Container from './Container.js';

class Contact extends Component {  
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Column width='12'>
							<Wrapper>
							</Wrapper>
						</Column>
					</Row>
				</Container>
				<Header img="1.jpg">
					<Container>
						<Row>
							<Column width='12'>
								<Wrapper>

									<h1 className="text-center">联系我们</h1>
									<p className="text-center">
										地址：上海市徐汇区宜山路700号C4栋5层
									</p>
									<p className="text-center">
										电话：86-021-60331122
									</p>
									<p className="text-center">
										邮件：86-021-60331122
									</p>

								</Wrapper>
							</Column>
						</Row>
					</Container>
				</Header>
			</div>
		);
	}
}

export default Contact;
