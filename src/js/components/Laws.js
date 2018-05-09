import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';
import Wrapper from './Wrapper.js';

import Container from './Container.js';
import {Panel} from 'react-bootstrap';

class Laws extends Component {  
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Column width='12'>
              <Wrapper>
                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">法律声明</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <p>
                      一、知识产权
                    </p>
                    <p>
                      本网站包含之所有内容，包括但不限于文本、图片、动画、音效、插图、版面设计及软件等（简称“内容”），均属米哈游及/或相关权利人所有。
                      本网站内之所有组成要素，包括但不限于整体设计及“内容”均受《中华人民共和国商标法》、《中华人民共和国著作权法》、《中华人民共和国专利法》、
                      《计算机软件保护条例》等所有相关知识产权的法律、法规和中华人民共和国加入的所有知识产权方面的国际条约、国际公约的保护。未经本公司书面许可，
                      任何单位及个人不得以任何方式或理由对本网站的任何部分进行使用、发行、复制、修改、改动、传播、表演、展示或与其他产品或服务捆绑使用、销售。
                      凡侵犯本公司商标权、著作权、专利权的，必依法追究其法律责任。
                    </p>
                    <p>
                      二、第三方链接
                    </p>
                    <p>
                      如果本网站或本网站的内容提供了与第三方网站的链接，由于米哈游无法控制第三方网站，所以米哈游对第三方网站上的任何内容的准确性和完整性不承担责任。
                      任何机构或者个人通过本网站与其他网站的链接而获得其他网站内容，其风险责任自负，米哈游对此不承担任何法律责任。
                    </p>
                    <p>
                      三、免责条款　
                    </p>
                    <p>
                      本网站如因系统维护或升级而需暂停服务、或因线路及非米哈游控制范围外的软硬件故障或其它不可抗力而导致暂停服务时，
                      于暂停服务期间造成的一切不便与损失，本网站对此不承担任何法律责任。
                    </p>
                    <p>
                      四、解释　
                    </p>
                    <p>
                      米哈游会根据实际情况修改、解释本网站所有内容（包括本声明）。米哈游保留一切未在此明示的权利。
                      本网站郑重提示：任何单位或者个人进入本网站，即被视为已完全知悉、理解并接受本声明的全部内容。
                    </p>
                  </Panel.Body>
                </Panel>
              </Wrapper>
            </Column>
          </Row>
          <Row>
            <Column width='12'>

            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Laws;
