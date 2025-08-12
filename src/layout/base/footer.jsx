import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '1rem', textAlign: 'center', background: '#f5f5f5' }}>
            <p>&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
        </footer>
    );
};

export default Footer;