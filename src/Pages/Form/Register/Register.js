import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [displayError, setDisplayError] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;
        if (password !== confirmPassword) {
            setDisplayError('Password did not matched');
            return;
        }
        setDisplayError('');
        createUserWithEmailAndPassword(email, password);
    };
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
        if (error) {
            if (error.message.includes('email-already-in-use')) {
                setDisplayError('Email already in use');
            }
        }
    }, [navigate, user, error]);
    return (
        <>
            <div className='w-2/3 md:w-1/2 mx-auto mt-12 bg-gray-300 font-semibold p-6 rounded-lg'>
                <h1 className='text-3xl text-center mb-6 text-sky-700'>REGISTER</h1>
                <form onSubmit={handleRegister} className='flex flex-col gap-4'>
                    <input className='p-2 text-xl rounded' type="text" name="name" placeholder='Your Name' />
                    <input className='p-2 text-xl rounded' type="email" name="email" placeholder='Your Email' />
                    <input className='p-2 text-xl rounded' type="password" name="password" placeholder='Password' />
                    <input className='p-2 text-xl rounded' type="password" name="confirm_password" placeholder='Confirm Password' />
                    <div>
                    <input onClick={()=>setAgree(!agree)} className='mr-3' type="checkbox" name="terms" id="terms" />
                    <label className={agree? 'text-blue-600' : 'text-red-500'} htmlFor="terms">Accept Our Terms and Conditions</label>
                    </div>
                    <p className='text-red-500'>{displayError}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input disabled={!agree} className={`rounded-lg p-2 text-white text-xl cursor-pointer ${!agree? 'bg-gray-500 cursor-not-allowed': 'bg-sky-700'}`} type="submit" value="Register" />
                </form>
                <p className='mt-2'>Already have an Account? | <button onClick={() => navigate('/login')} className='text-blue-700'>Login</button></p>
                <SocialLogin />
            </div>
        </>
    );
};

export default Register;