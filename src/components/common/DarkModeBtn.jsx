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
  }

  return (
    <button className='button' type='button' onClick={toggleDarkMode}>
      <VscColorMode className='userIcon heIcon' />
    </button>
  );
}

export default DarkModeBtn;
