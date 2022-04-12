import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const handleLogin = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <>
            <div className='w-2/3 md:w-1/2 mx-auto mt-12 bg-sky-300 p-6 rounded-lg'>
                <h1 className='text-3xl text-center mb-6'>LOG IN</h1>
                <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                    <input ref={emailRef} className='p-2 text-xl rounded' type="email" name="email" placeholder='Your Email' />
                    <input ref={passwordRef} className='p-2 text-xl rounded' type="password" name="password" placeholder='Password' />
                    <input className='bg-sky-700 rounded-lg p-2 text-white text-xl cursor-pointer' type="submit" value="Login" />
                </form>
                <p className='mt-2'>New to Genius Car Service? | <button onClick={()=>navigate('/register')} className='text-red-700'>Register</button></p>
            </div>
        </>
    );
};

export default Login;