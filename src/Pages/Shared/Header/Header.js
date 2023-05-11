import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState('');
    const { pathname } = useLocation();
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    useEffect(() => {
        if (pathname === '/') {
            setDisplay('flex')
        }
        else if (pathname === '/home') {
            setDisplay('flex')
        }
        else {
            setDisplay('hidden');
        }
    }, [pathname])
    return (
        <div className='md:flex bg-sky-600 py-2 px-6 justify-between items-center sticky top-0'>
            <Link to='/' className='text-4xl font-semibold'><span className='text-yellow-300 font-sans'>Car</span> <span className='text-sky-900 font-sans'>Fixer</span></Link>
            <button onClick={() => setShow(!show)} className='md:hidden text-3xl text-white absolute right-4 top-3'>{show ? <MdClose /> : <HiOutlineMenuAlt3 />}</button>
            <nav className={`flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-6 md:text-lg lg:text-xl text-sky-300 items-center md:flex ${show ? 'block' : 'hidden'}`}>
                <NavLink to='/'>Home</NavLink>
                <div className={display}>
                    <a className='mr-6' href="#services">Services</a>
                    <a href="#experts">Experts</a>
                </div>
                {
                    user && <>
                        <NavLink to='/addService'>Add</NavLink>
                        <NavLink to='/manageService'>Manage</NavLink>
                        <NavLink to='/orders'>Orders</NavLink>
                    </>
                }
                {
                    user ?
                        <button onClick={handleLogOut}>LogOut</button>
                        :
                        <NavLink to='/login'>LogIn</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;