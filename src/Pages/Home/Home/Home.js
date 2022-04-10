import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <>
            <Carousel></Carousel>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;