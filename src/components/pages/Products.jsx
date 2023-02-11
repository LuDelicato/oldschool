import React, { useState } from 'react';
import Heading from './Heading';
import { products } from '../data/data';
import { ProductItems } from './ProductsItems';

function Products() {
  const [cartItems, setCartItems] = useState(products);
  return (
    <section className='product'>
      <div className='container'>
        <Heading title='Todos os Produtos' desc='É preciso ter lata!' />
        <ProductItems cartItems={cartItems} />
      </div>
    </section>
  );
}

export default Products;
