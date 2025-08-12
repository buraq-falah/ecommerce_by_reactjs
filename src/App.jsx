import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/home';
import NotFound from './pages/notfound';

const App = () => {
  return (
    <div className="text-red-600 text-2xl font-bold p-4 text-center">
      {/* Your content goes here */}
      Hello from the eCommerce App!
      <p>Welcome to our online store.</p>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;