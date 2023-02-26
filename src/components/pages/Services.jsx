import React, { useState } from 'react';
import { services } from '../data/gallery';

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
        <p>Temos vários disponível para ti, desde:</p>
        <p>
          Restauros, Workshops, Entregas, Multimedia, Murais, Peças institucionais, e Quartos/paredes personalizadas.
        </p>
      </div>
      <div className='gallery-container'>
        {services.map((item) => (
          <div key={item.id} className='gallery-item' onClick={() => handleImageClick(item)}>
            <img src={item.cover} alt={item.name} className='gallery-image' />
            <div className='gallery-caption' onClick={(event) => handleCaptionClick(event)}>
              <p className='gallery-name'>{item.name}</p>
              <p className='gallery-desc'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className='gallery-modal' onClick={() => setShowModal(false)}>
          <div className='gallery-modal-content' onClick={(event) => event.stopPropagation()}>
            <img src={modalContent.cover} alt={modalContent.name} />
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
