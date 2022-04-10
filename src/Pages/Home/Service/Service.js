import React from 'react';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='border border-gray-500 rounded-lg text-center pb-4'>
            <img className='w-full rounded-t-lg mb-4' src={img} alt="" />
            <h2 className='text-2xl text-teal-600'>{name}</h2>
            <p className='text-xl text-orange-500'>${price}</p>
            <p className='text-gray-600'>{description}</p>
            <button className='bg-sky-600 rounded text-white p-2 mt-4'>BOOK {name}</button>
        </div>
    );
};

export default Service;