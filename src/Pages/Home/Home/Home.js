import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;