import React from 'react';
import Carousel from '../Carousel/Carousel';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

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