import React from 'react';
import Slider from 'react-slick/lib/slider';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
              <img src={banner1} alt="" />
          </div>
          <div>
              <img src={banner2} alt="" />
          </div>
          <div>
              <img src={banner3} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Carousel;