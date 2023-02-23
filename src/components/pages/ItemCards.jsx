import React from 'react';
import { hero } from '../data/data';

function ItemCards({ setSelectedCategoryID }) {
  return (
    <section className='itemCards'>
      {hero.map((item) => (
        <div className='card' key={item.id} onClick={() => setSelectedCategoryID(item.categoryID)}>
          <div className='left'>
            <img src={item.cover} alt='' />
          </div>
          <div className='right'>
            <h1>{item.name}</h1>
            <p>{item.items} items</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ItemCards;
