import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Orders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    useEffect(() => {
        const url = `https://sheltered-savannah-99198.herokuapp.com/order?email=${email}`;
        const getOrders = async () => {
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    toast.error("You don't have access in order", {id: 'unauthorized'});
                    navigate('/login')
                }
            }
        };
        getOrders();
    }, [email, navigate])
    return (
        <div>
            <h1>Your Order: {orders.length}</h1>
        </div>
    );
};

export default Orders;