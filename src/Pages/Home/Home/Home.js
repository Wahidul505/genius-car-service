import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Carousel from '../Carousel/Carousel';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
        <PageTitle title={'Home'}/>
            <Carousel></Carousel>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;