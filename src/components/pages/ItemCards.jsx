import React from 'react';
import { hero } from '../data/data';

function ItemCards() {
  return (
    <section className='itemCards'>
      {hero.map((item) => (
        <div className='card' key={item.id}>
          <div className='left'>
            <img src={item.cover} alt='' />
          </div>
          <div className='righ'>
            <h4>{item.name}</h4>
            <p>{item.items} items</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ItemCards;
