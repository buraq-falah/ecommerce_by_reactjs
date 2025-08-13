import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5 py-3 bg-red-600 text-white text-lg '>
            <p>&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
        </footer>
    );
};

export default Footer;