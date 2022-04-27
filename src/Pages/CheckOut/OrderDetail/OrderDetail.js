import React from 'react';

const OrderDetail = ({order}) => {
    const {email, service} = order;
    return (
        <div className='text-center'>
            <p className='text-2xl text-sky-700'>{service}</p>
            <p className='text-gray-700'>email: {email}</p>
        </div>
    );
};

export default OrderDetail;