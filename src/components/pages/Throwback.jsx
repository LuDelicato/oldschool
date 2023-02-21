import React, { useState } from 'react';
import { throwback } from '../data/gallery';
import YouTube from 'react-youtube';

function Throwback() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [videoId, setVideoId] = useState('pV9GkEnG8kw');

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
        <h1>Throwback</h1>
      </div>
      <div className='video-container'>
        <div className='gallery-video'>
          <YouTube videoId={videoId} />
          <p>Rapper Mundo Segundo, que realizou parte do seu video-clip na Oldschool!</p>
        </div>
      </div>
      <div className='gallery-container'>
        {throwback.map((item) => (
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

export default Throwback;
