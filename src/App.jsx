import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MainWrapper from './layout/main_wrapper';
import {MainRoutes} from './routes/main_routes';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainWrapper />}>
            {MainRoutes.map(route => {
              return  <Route key={route.id} path={route.path} element={route.element} />
            })}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;