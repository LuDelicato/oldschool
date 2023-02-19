import React, { useState } from 'react';
import { images } from '../data/gallery';

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleImageClick = (image) => {
    console.log('Clicked image:', image);
    setModalContent(image);
    console.log('Modal content:', modalContent);
    setShowModal(true);
  };

  return (
    <>
      <div className='h1'>
        <h1>Galeria de Arte</h1>
      </div>
      <div className='gallery-container'>
        {images.map((image) => (
          <div key={image.id} className='gallery-item' onClick={() => handleImageClick(image)}>
            <img src={image.cover} alt={image.name} className='gallery-image' />
            <div className='gallery-caption'>
              <p className='gallery-name'>{image.name}</p>
              <p className='gallery-author'>{image.author}</p>
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

export default Gallery;
