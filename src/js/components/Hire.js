import React, { Component } from 'react';
import Row from './Row.js';
import Column from './Column.js';

import Container from './Container.js';
import Header from './Header.js';
import {Media, Table} from 'react-bootstrap';

import Job from './Job.js';
import '../../css/Hire.css';

class Hire extends Component {  
  render() {
    return (
      <div>
        <Header img="2.jpg"/>
        <Container>
          <div className="hire-frame">

            
            <Row>
              <Column width='12'>
                <Job title="3D Model Artist">         
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Job>
                <Job title="WEB Developer">
                  <Media>
                    <Media.Left align="top">
                      <img width={64} height={64} src="images/Icon2.png" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>
                        Middle aligned media
                      </Media.Heading>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                      </p>

                      <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                      </p>
                    </Media.Body>
                  </Media>
                </Job>
                <Job title="QA">
                  <Media>
                    <Media.Left align="top">
                      <img width={64} height={64} src="images/Icon3.png" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>Bottom aligned media</Media.Heading>
                      <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                      fringilla. Donec lacinia congue felis in faucibus.
                      </p>

                      <p>
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                      </p>
                    </Media.Body>
                  </Media>
                </Job>
              </Column>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Hire;
