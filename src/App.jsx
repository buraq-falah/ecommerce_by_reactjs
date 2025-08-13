import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/home';
import NotFound from './pages/not_found';
import MainWrapper from './layout/main_wrapper';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainWrapper />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;