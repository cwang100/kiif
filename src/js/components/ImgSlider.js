import React, { Component } from 'react';
import Slider from "react-slick";
import '../../css/ImgSlider.css';


class ImgSlider extends Component {  
    render() {
    var settings = {
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      infinite: true,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            settings: 'unslick',
          }
        }
      ]
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src="images/4.png" className="sliderImgs"/>
          </div>
          <div>
            <img src="images/5.png" className="sliderImgs"/>
          </div>
          <div>
            <img src="images/6.png" className="sliderImgs"/>
          </div>
          <div>
            <img src="images/12.png" className="sliderImgs"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ImgSlider;
