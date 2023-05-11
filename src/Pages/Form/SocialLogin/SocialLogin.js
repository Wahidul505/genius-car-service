import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, userGl, loadingGl, errorGl] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGh, loadingGh, errorGh] = useSignInWithGithub(auth);
    const [token] = useToken(userGl || userGh);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '';
    let errorMessage;
    if (errorGl) {
        errorMessage = <div>
            <p className='text-red-600'>{errorGl?.message}</p>
        </div>
    }
    else if (errorGh) {
        errorMessage = <div>
            <p className='text-red-600'>{errorGh?.message}</p>
        </div>
    }
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token]);
    return (
        <div>
            <div className='my-3'>
                <div className='flex items-center gap-3'>
                    <div style={{ height: '0.5px' }} className='bg-gray-500 w-1/2 rounded-full'></div>
                    <p>OR</p>
                    <div style={{ height: '0.5px' }} className='bg-gray-500 w-1/2 rounded-full'></div>
                </div>
                {loadingGl || loadingGh ? <p>Loading...</p> : ''}
                {errorMessage}
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className='flex items-center gap-3 text-xl bg-white rounded-lg w-full justify-center py-2 font-semibold text-gray-700 mb-4'><FcGoogle className='text-3xl' />Google Sign In</button>
            <button className='flex items-center gap-3 text-xl bg-blue-500 rounded-lg w-full justify-center py-2 font-semibold text-white mb-4'><FaFacebookSquare className='text-3xl' />Facebook Log In</button>
            <button
                onClick={() => signInWithGithub()}
                className='flex items-center gap-3 text-xl bg-gray-800 rounded-lg w-full justify-center py-2 font-semibold text-white mb-4'><BsGithub className='text-3xl' />GitHub Sign In</button>
        </div>
    );
};

export default SocialLogin;