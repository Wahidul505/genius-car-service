import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className='shadow-lg rounded-lg p-4 text-center mb-4'>
            <img className='mx-auto rounded-3xl' src={img} alt="" />
            <h2 className='text-xl text-cyan-700 mt-4'>{name}</h2>
        </div>
    );
};

export default Expert;