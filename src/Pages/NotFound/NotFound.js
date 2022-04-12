import React from 'react';
import sleeping from '../../images/not-found/sleeping.jpg';

const NotFound = () => {
    return (
        <div className='text-center my-12 relative'>
            <h1 className='text-4xl absolute right-0 left-0 text-rose-500 font-semibold top-8'>The Developer is Sleeping</h1>
            <img className='w-full' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;