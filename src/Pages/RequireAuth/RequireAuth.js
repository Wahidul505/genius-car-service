import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const handleSendEmailVerification = async () => {
        await sendEmailVerification();
        toast.success('Email Verification Send');
    }
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return (
            <div className='text-center'>
                <h1 className='text-3xl mb-2 text-red-500 mt-20'>Please Verify Your Email Address</h1>
                <button onClick={handleSendEmailVerification} className='bg-sky-800 text-white px-2 py-1 rounded text-lg'>Send Email Verification</button>
            </div>
        )
    }
    return children;
};

export default RequireAuth;