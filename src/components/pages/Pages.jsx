import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../common/NavBar';
import Heading from './Heading';
import { Hero } from './Hero';

import Home from './Home';
import ItemCards from './ItemCards';
import Products from './Products';

export function Pages() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <ItemCards />
      <Heading />
      <Products />
      <Routes>
        <Route exact path='/' component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
