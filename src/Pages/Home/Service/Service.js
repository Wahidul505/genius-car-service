import React from 'react';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;