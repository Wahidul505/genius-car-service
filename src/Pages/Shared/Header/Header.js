import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';

const Header = () => {
    return (
        <div className='flex bg-sky-600 py-2 px-6 justify-between items-center'>
            <img className='h-12 w-36 md:w-48' src={logo} alt="" />
            <nav className='flex gap-4 md:gap-8 md:text-xl text-white'>
                <Link to='/'>Home</Link>
                <Link to='/'>Shop</Link>
                <Link to='/'>About</Link>
                <Link to='/'>SignUp</Link>
            </nav>
        </div>
    );
};

export default Header;