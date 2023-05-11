import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const CheckOut = () => {
    const { id } = useParams();
    const [service] = useServiceDetail(id);
    const [user] = useAuthState(auth);
    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            service: service.name,
            serviceId: id,
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value
        };
        axios.post('https://car-fixer.onrender.com/order', order)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Your Order is Placed');
                    e.target.reset();
                }
            });
    }
    return (
        <div>
            <h1 className='text-5xl text-center mt-12 text-gray-600 mb-8'>Checkout For: {service.name}</h1>
            <form onSubmit={handlePlaceOrder} className='flex flex-col gap-4 w-1/2 mx-auto'>
                <input className='p-2 text-xl rounded border border-gray-400 focus:outline-none' type="text" name="service" placeholder='Service' defaultValue={service.name} readOnly disabled />
                <input className='p-2 text-xl rounded border border-gray-400 focus:outline-none' type="text" name="name" placeholder='Your Name' defaultValue={user.displayName} readOnly disabled />
                <input className='p-2 text-xl rounded border border-gray-400 focus:outline-none' type="email" name="email" placeholder='Your Email' defaultValue={user.email} readOnly disabled />
                <input className='p-2 text-xl rounded border border-gray-400 focus:outline-none' type="text" name="phone" placeholder='Phone' required />
                <input className='p-2 text-xl rounded border border-gray-400 focus:outline-none' type="text" name="address" placeholder='Address' required autoComplete='off' />
                <input className='bg-sky-700 rounded-lg p-2 text-white text-xl cursor-pointer' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;