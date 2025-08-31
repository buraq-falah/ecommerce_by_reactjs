import React from 'react';
import TheMain from '../components/the_main';
import PopularProducts from '../components/popular_products';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                  <title>Home Page </title>
                </Helmet>
            <PopularProducts />
        </div>
    );
};

export default Home;