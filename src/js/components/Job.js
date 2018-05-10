import React, { Component } from 'react';
import {Collapse} from 'react-bootstrap';
import '../../css/Job.css';

class Job extends Component { 
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="job-frame">
        <div className="job-title" onClick={() => this.setState({ open: !this.state.open })}>
          <h4>{ this.props.title }</h4>
        </div>
          <Collapse in={this.state.open}>
          <div className="job-description">
            { this.props.children }
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Job;
