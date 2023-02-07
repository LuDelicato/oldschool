import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../common/Header';

export const Pages = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};
