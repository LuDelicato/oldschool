import React from 'react';
import Heading from './Heading';
import { Hero } from './Hero';
import ItemCards from './ItemCards';
import Products from './Products';

export default function Home() {
  return (
    <div>
      <Hero />
      <ItemCards />
      <Heading />
      <Products />
    </div>
  );
}
