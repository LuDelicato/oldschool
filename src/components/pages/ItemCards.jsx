import React from 'react';
import { hero } from '../data/data';

function ItemCards({ setSelectedCategoryID }) {
  return (
    <section className='itemCards'>
      {hero.map((item) => (
        <div className='card' key={item.id}>
          <div className='left'>
            <img src={item.cover} alt='' />
          </div>
          <div className='right'>
            <button className='button' type='button' onClick={() => setSelectedCategoryID(item.categoryID)}>
              <h4>{item.name}</h4>
              <p>{item.items} items</p>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ItemCards;
