import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../common/NavBar';
import { Hero } from './Hero';

import Home from './Home';
import ItemCards from './ItemCards';

export function Pages() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <ItemCards />
      <Routes>
        <Route exact path='/' component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
