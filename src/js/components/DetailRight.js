import React, { Component } from 'react';
import '../../css/Detail.css';
import { Link } from 'react-router-dom'

class DetailRight extends Component {  
  render() {
    return (
      <div className="detail_wrapper flex flex-wrap">
    	<figure className="featured-image image_block_1">
            <img src={ this.props.image } alt="" />
        </figure>

        <div className="detail-description">
            <div className="detail-description-container">
                <div className="entry-title">
                    { this.props.title }
                </div>

                <div className="entry-content">
                    { this.props.children }
                </div>

                <div className="box-link">
                    <Link to={ this.props.link || "/" }><img src="images/box.jpg" alt="" /></Link>
                </div>
            </div>
        </div>

        <figure className="featured-image image_block_2">
            <img src={ this.props.image } alt="" />
        </figure>
      </div>
    );
  }
}

export default DetailRight;
