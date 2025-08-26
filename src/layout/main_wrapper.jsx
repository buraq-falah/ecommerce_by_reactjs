import React from 'react';
import Header from './base/header';
import Footer from './base/footer';
import { Outlet } from 'react-router';

const MainWrapper = () => {
    return (
        <> 
        <Header/>
        <main className='container'>
            <Outlet />
        </main>
        <Footer />
        </>
    );
};

export default MainWrapper;