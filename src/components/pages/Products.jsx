import React, { useState } from 'react';
import Heading from './Heading';
import { products } from '../data/data';
import { ProductItems } from './ProductsItems';

function Products() {
  const [items] = useState(products);
  return (
    <section className='product'>
      <div className='container'>
        <Heading title='Todos os Produtos' desc='É preciso ter lata!' />
        <ProductItems items={items} />
      </div>
    </section>
  );
}

export default Products;
