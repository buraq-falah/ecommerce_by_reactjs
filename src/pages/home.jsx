import React from 'react';
import PopularProducts from '../components/popular_products';
import { Helmet } from 'react-helmet-async';
import TheMain from '../components/the_main';
const Home = () => {
    return (
        <div>
            <Helmet>
                  <title>Home Page </title>
                </Helmet>

            <TheMain title="Popular Products" link="/Products" showButton={true}/>
            <PopularProducts />
        </div>
    );
};

export default Home;