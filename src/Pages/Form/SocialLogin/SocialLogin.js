import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div>
            <div className='flex items-center gap-3 my-3'>
                <div style={{height:'0.5px'}} className='bg-gray-500 w-1/2 rounded-full'></div>
                <p>OR</p> 
                <div style={{height:'0.5px'}} className='bg-gray-500 w-1/2 rounded-full'></div>
            </div>
            <button className='flex items-center gap-3 text-xl bg-white rounded-lg w-full justify-center py-2 font-semibold text-gray-700 mb-4'><FcGoogle className='text-3xl'/>Google Sign In</button>
            <button className='flex items-center gap-3 text-xl bg-blue-500 rounded-lg w-full justify-center py-2 font-semibold text-white mb-4'><FaFacebookSquare className='text-3xl'/>Facebook Log In</button>
            <button className='flex items-center gap-3 text-xl bg-gray-800 rounded-lg w-full justify-center py-2 font-semibold text-white mb-4'><BsGithub className='text-3xl'/>GitHub Sign In</button>
        </div>
    );
};

export default SocialLogin;