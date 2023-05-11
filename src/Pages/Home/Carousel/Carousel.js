import React from 'react';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner3.jpg';
import banner3 from '../../../images/banner/banner2.jpg';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='mb-12'>
            <div>
                <img src={banner1} alt="" />
            </div>
        </div>
    );
};

export default Carousel;