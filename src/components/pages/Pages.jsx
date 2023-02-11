import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../common/NavBar';
import { Hero } from './Hero';

import Home from './Home';

export function Pages() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <Routes>
        <Route exact path='/' component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
