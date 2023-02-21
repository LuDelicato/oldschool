import React, { useState } from 'react';
import { projects } from '../data/projects';

function Projects() {
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
        <h1>Projetos</h1>
      </div>
      <div className='gallery-container'>
        {projects.map((item) => (
          <div key={item.id} className='gallery-item' onClick={() => handleImageClick(item)}>
            <img src={item.cover} alt={item.name} className='gallery-image' />
            <div className='gallery-caption' onClick={(event) => handleCaptionClick(event)}>
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

export default Projects;
