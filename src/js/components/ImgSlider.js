import React, { Component } from 'react';
import Slider from "react-slick";
import '../../css/ImgSlider.css';


class ImgSlider extends Component {  
    render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="sliderImgs">
            <img src="http://static.event.mihoyo.com/new_mihoyo_homepage//images/guide/banner/5.1/1.jpg" />
          </div>
          <div className="sliderImgs">
            <img src="http://static.event.mihoyo.com/new_mihoyo_homepage//images/guide/banner/5.1/2.jpg" />
          </div>
          <div className="sliderImgs">
            <img src="http://static.event.mihoyo.com/new_mihoyo_homepage//images/guide/banner/5.1/3.jpg" />
          </div>
          <div className="sliderImgs">
            <img src="http://static.event.mihoyo.com/new_mihoyo_homepage//images/guide/banner/5.1/4.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ImgSlider;
