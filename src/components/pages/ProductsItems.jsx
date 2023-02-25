import React, { useState, useRef, useEffect } from 'react';
import { colors } from '../data/colordata';

export const ProductItems = ({ items, brandID }) => {
  const [selectedItemId, setSelectedItemId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const filteredItems = brandID ? items.filter((item) => item.brandID === brandID) : items;

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItemId();
    setIsModalOpen(false);
  };

  const outsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', outsideClick);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  });

  return (
    <>
      <div className='product_items'>
        {filteredItems.map((item) => (
          <div className='box' key={item.id}>
            <div className='img'>
              <img src={item.cover} alt='' onClick={() => handleItemClick(item.id)} />
            </div>
            <div className='details '>
              <h1 className='hidden'>{item.title}</h1>
              <p>Preço: €{item.price}</p>
              <p className='hidden'>Descrição: {item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedItemId && isModalOpen && (
        <div className='modal' ref={modalRef}>
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
