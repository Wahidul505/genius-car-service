import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const [displayError, setDisplayError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '';
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const handleLogin = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Mail Sent');
        }
        else {
            toast.error('Please, Give an Email');
        }
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
        if (token) {
            setDisplayError('');
            toast.success('Logged In', { id: 'success' });
            navigate(from, { replace: true });
        };
    }, [from, navigate, token, error]);
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <PageTitle title={'Login'} />
            <div className='w-2/3 md:w-1/2 mx-auto mt-12 bg-gray-300 p-6 rounded-lg'>
                <h1 className='text-3xl text-center mb-6 text-sky-700 font-semibold'>LOG IN</h1>
                <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                    <input ref={emailRef} className='p-2 text-xl rounded' type="email" name="email" placeholder='Your Email' />
                    <div className='text-xl rounded bg-white flex items-center justify-between'>
                        <input className='w-5/6 p-2 rounded' ref={passwordRef} type={showPassword ? "text" : "password"} name="password" placeholder='Password' /><span onClick={() => setShowPassword(!showPassword)} className='mr-2 cursor-pointer'>{
                            showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                        }</span>
                    </div>
                    <p className='text-red-500'>{displayError}</p>
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