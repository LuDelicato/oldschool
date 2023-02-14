import React from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

export const ProductItems = ({ items }) => {
  return (
    <>
      <div className='product_items'>
        {items.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <img src={items.cover} alt='' />
              <div className='overlay'>
                <button className='button'>
                  <FiShoppingBag />
                </button>
                <button className='button'>
                  <AiOutlineHeart />
                </button>
                <button className='button'>
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className='details'>
              <h3>Nome: {items.title}</h3>
              <p>Marca: {items.author}</p>
              <h4>Preço: €{items.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
