import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NavBar } from '../common/NavBar';

export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path='/' element={Home} />
      </Routes>
    </BrowserRouter>
  );
};
