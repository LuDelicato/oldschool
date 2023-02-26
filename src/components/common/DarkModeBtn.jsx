import React, { useEffect, useState } from 'react';
import { VscColorMode } from 'react-icons/vsc';
import './DarkMode.css';

function DarkModeBtn(props) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    const image = document.getElementById('logo');
    if (darkMode) {
      image.src = '/images/oldschool_white.png';
    } else {
      image.src = '/images/oldschool_black.png';
    }

    const srcImage = document.getElementById('about');
    if (!srcImage) {
      return;
    }
    if (darkMode) {
      srcImage.src = '/images/about_us_whiteMode.png';
    } else {
      srcImage.src = '/images/about_us_darkMode.png';
    }
  }

  return (
    <button className='button' type='button' onClick={toggleDarkMode}>
      <VscColorMode className='userIcon heIcon' />
    </button>
  );
}

export default DarkModeBtn;
