import React, { Component } from 'react';
import '../../css/Detail.css';

class DetailLeft extends Component {  
  render() {
    return (
      <div className="detail_wrapper flex flex-wrap">
    	<figure className="featured-image">
            <img src={ this.props.image } alt="" />
        </figure>
        <div className="detail-description">
            <div className="detail-description-container">
                <div className="entry-title">
                    { this.props.title }
                </div>

                <div className="entry-content">
                    <p>{ this.props.text }</p>
                </div>

                <div className="box-link">
                    <a href=""><img src="images/box.jpg" alt="" /></a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default DetailLeft;
