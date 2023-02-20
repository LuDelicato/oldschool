import React, { useState } from 'react';
import { services } from '../data/services';
import { AiFillInstagram } from 'react-icons/ai';

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleImageClick = (image) => {
    setModalContent(image);
    setShowModal(true);
  };

  const handleCaptionClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className='h1'>
        <h1>Serviços</h1>
      </div>
      <div className='services-container'>
        {services.map((item) => (
          <div key={item.id} className='services-item' onClick={() => handleImageClick(item)}>
            <img src={item.cover} alt={item.name} className='services-image' />
            <div className='services-caption' onClick={(event) => handleCaptionClick(event)}>
              <p className='services-name'>{item.name}</p>
              <p className='services-desc'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className='services-modal' onClick={() => setShowModal(false)}>
          <div className='services-modal-content' onClick={(event) => event.stopPropagation()}>
            <img src={modalContent.cover} alt={modalContent.name} />
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
