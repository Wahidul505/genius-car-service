import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState('');
    useEffect(()=>{
        const today = new Date();
        const currentYear =  today.getFullYear() + '';
        setYear(currentYear);
    },[])
    return (
        <footer className='text-center text-gray-600 mb-6 mt-20'>
            <small>Copyright collected © {year}</small>
        </footer>
    );
};

export default Footer;