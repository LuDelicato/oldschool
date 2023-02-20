import React, { useState } from 'react';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { colors } from '../data/colordata';

export const ProductItems = ({ items, brandID }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = brandID ? items.filter((item) => item.brandID === brandID) : items;

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='product_items'>
        {filteredItems.map((item) => (
          <div className='box' key={item.id}>
            <div className='img'>
              <img src={item.cover} alt='' onClick={() => handleItemClick(item.id)} />
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
            <div className='details '>
              <h3>{item.title}</h3>
              <h4>Preço: €{item.price}</h4>
              <p className='hidden'>Descrição: {item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedItemId && isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2>{items.find((item) => item.id === selectedItemId)?.title}</h2>
              <button className='close' onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <div className='img'>
                <img src={items.find((item) => item.id === selectedItemId)?.cover} alt='' />
              </div>
              <br />
              <div className='details'>
                <p>Marca: {items.find((item) => item.id === selectedItemId)?.author}</p>
                <h4>Preço: €{items.find((item) => item.id === selectedItemId)?.price}</h4>
                <p>Descrição: {items.find((item) => item.id === selectedItemId)?.desc}</p>
              </div>
              <div className='color-box'>
                <br />
                <div className='color-container'>
                  {colors
                    .filter((color) => color.brandID === items.find((item) => item.id === selectedItemId)?.brandID)
                    .map((color) => (
                      <div
                        className='color-circle'
                        key={color.id}
                        title={color.name}
                        style={{ backgroundColor: color.hex }}
                      ></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
