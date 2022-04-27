import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const [displayError, setDisplayError] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;
        if (password !== confirmPassword) {
            setDisplayError('Password did not matched');
            return;
        }
        setDisplayError('');
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    useEffect(() => {
        if (token) {
            navigate('/home');
        }
        if (error) {
            if (error.message.includes('email-already-in-use')) {
                setDisplayError('Email already in use');
            }
        }
    }, [navigate, token, error]);

    if (loading || updating) {
        return <Loading />
    }
    return (
        <>
            <PageTitle title={'Signup'} />
            <div className='w-2/3 md:w-1/2 mx-auto mt-12 bg-gray-300 font-semibold p-6 rounded-lg'>
                <h1 className='text-3xl text-center mb-6 text-sky-700'>REGISTER</h1>
                <form onSubmit={handleRegister} className='flex flex-col gap-4'>
                    <input className='p-2 text-xl rounded' type="text" name="name" placeholder='Your Name' />
                    <input className='p-2 text-xl rounded' type="email" name="email" placeholder='Your Email' />
                    <input className='p-2 text-xl rounded' type="password" name="password" placeholder='Password' />
                    <input className='p-2 text-xl rounded' type="password" name="confirm_password" placeholder='Confirm Password' />
                    <div>
                        <input onClick={() => setAgree(!agree)} className='mr-3' type="checkbox" name="terms" id="terms" />
                        <label className={agree ? 'text-blue-600' : 'text-red-500'} htmlFor="terms">Accept Our Terms and Conditions</label>
                    </div>
                    <p className='text-red-500'>{displayError}</p>
                    <input disabled={!agree} className={`bg-sky-700 rounded-lg p-2 text-white text-xl cursor-pointer ${!agree ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`} type="submit" value="Register" />
                </form>
                <p className='mt-2'>Already have an Account? | <button onClick={() => navigate('/login')} className='text-blue-700'>Login</button></p>
                <SocialLogin />
            </div>
        </>
    );
};

export default Register;