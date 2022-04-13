import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='text-center mt-12'>
            <h1 className='mb-6'>this is service detail: {serviceId}</h1>
            <Link className='bg-sky-600 text-white p-2 rounded-lg' to='/checkout'>CheckOut</Link>
        </div>
    );
};

export default ServiceDetail;