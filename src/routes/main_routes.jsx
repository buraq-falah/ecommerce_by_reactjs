import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from '../pages/home';
import Products from '../pages/products';
// import Dashboard from '../pages/Dashboard';
// import Login from '../pages/Login';
// import SignOut from '../pages/SignOut';
import NotFound from '../pages/not_found';

const MainRoutes = [
    { id: 1, path: '/', element: <Home /> },
    { id: 2, path: '/Products', element: <Products /> },
    // { id: 3, path: '/dashboard', element: <Dashboard /> },
    // { id: 4, path: '/login', element: <Login /> },
    // { id: 5, path: '/signout', element: <SignOut /> },
    { id: 6, path: '*', element: <NotFound /> },
];

export { MainRoutes };