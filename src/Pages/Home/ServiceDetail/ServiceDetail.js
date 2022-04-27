import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service] = useServiceDetail(id);
    return (
        <div className='text-center mt-12'>
            <h1 className='mb-6 text-3xl'>You are about to Book</h1>
            <div className='w-1/2 mx-auto mb-6'>
                <img className='w-full rounded' src={service.img} alt="" />
                <h1 className='text-2xl my-2 text-sky-700'>{service.name}</h1>
                <p className='text-xl text-gray-600'>${service.price}</p>
            </div>
            <Link className='bg-sky-600 text-white p-2 rounded-lg text-xl' to={`/checkout/${id}`}>Proceed CheckOut</Link>
        </div>
    );
};

export default ServiceDetail;