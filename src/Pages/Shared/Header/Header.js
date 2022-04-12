import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import './Header.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Header = () => {
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState('');
    const { pathname } = useLocation();
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
            <img className='h-12 w-36 md:w-48' src={logo} alt="" />
            <button onClick={() => setShow(!show)} className='md:hidden text-3xl text-white absolute right-4 top-3'>{show ? <MdClose /> : <HiOutlineMenuAlt3 />}</button>
            <nav className={`flex flex-col md:flex-row gap-4 md:gap-8 md:text-xl text-sky-300 items-center md:flex ${show ? 'block' : 'hidden'}`}>
                <NavLink to='/'>Home</NavLink>
                <div className={display}>
                    <a className='mr-6' href="#services">Services</a>
                    <a href="#experts">Experts</a>
                </div>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/login'>LogIn</NavLink>
            </nav>
        </div>
    );
};

export default Header;