import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();
    const handleDeleteService = id => {
        const url = `https://car-fixer.onrender.com/service/${id}`;
        const proceed = window.confirm('Are You Sure to Delete?');
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                });
        }
    }
    return (
        <div className='my-12'>
            <h2 className='text-center text-3xl mb-2'>Manage Your Services</h2>
            <hr className='mb-8' />
            {
                services.map(service => <div className='flex mb-2 justify-between w-1/2 mx-auto' key={service._id}>
                    <h4 className='text-xl'>{service.name}</h4>
                    <button onClick={() => handleDeleteService(service._id)} className='bg-rose-600 text-white rounded px-1'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;