import { async } from '@firebase/util';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [displayError, setDisplayError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '';
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast.success('Mail Sent');
    }
    useEffect(() => {
        if (error) {
            if (error.message.includes('wrong-password')) {
                setDisplayError('Wrong Password');
            }
            else if (error.message.includes('user-not-found')) {
                setDisplayError('Invalid User');
            }
        };
        if (user) {
            setDisplayError('');
            toast.success('Logged In', { id: 'success' });
            navigate(from, { replace: true });
        };
    }, [from, navigate, user, error]);
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='w-2/3 md:w-1/2 mx-auto mt-12 bg-gray-300 p-6 rounded-lg'>
                <h1 className='text-3xl text-center mb-6 text-sky-700 font-semibold'>LOG IN</h1>
                <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                    <input ref={emailRef} className='p-2 text-xl rounded' type="email" name="email" placeholder='Your Email' />
                    <input ref={passwordRef} className='p-2 text-xl rounded' type="password" name="password" placeholder='Password' />
                    <p className='text-red-500'>{displayError}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='bg-sky-700 rounded-lg p-2 text-white text-xl cursor-pointer' type="submit" value="Login" />
                </form>
                <p className='mt-2'>Forgot Password? | <button onClick={resetPassword} className='text-blue-700'>Reset</button></p>
                <p className='mt-2'>New to Genius Car Service? | <button onClick={() => navigate('/register')} className='text-blue-700'>Register</button></p>
                <SocialLogin />
            </div>
        </>
    );
};

export default Login;