import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navbar } from '../data/data';
import DarkModeBtn from './DarkModeBtn';
import { social } from '../data/socialmedia';

export const NavBar = ({ darkMode }) => {
  const [mobile, setMobile] = useState(false);
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setHeaderClass('active');
      } else {
        setHeaderClass('');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleDarkModeToggle() {}

  return (
    <header className={`header ${headerClass}`}>
      <div className='container'>
        <nav className='navbar'>
          <div className='toggle'>
            <button onClick={() => setMobile(!mobile)}>
              {mobile ? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu className='open heIcon' />}
            </button>
          </div>
          <div className='left'>
            <a href='/' target={'_self'} rel='noreferrer'>
              <img id='logo' src={darkMode ? '/images/oldschool_black.png' : '/images/oldschool_white.png'} alt='' />
            </a>
          </div>
          <div className='center'>
            <ul className={mobile ? 'mobile-nav' : 'menu'}>
              {navbar.map((nav) => (
                <li key={nav.id}>
                  <NavLink to={nav.path} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {nav.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className='right'>
          <div className='right_user'>
            <DarkModeBtn onToggle={handleDarkModeToggle} />
            {social.map((item) => (
              <a href={item.url} key={item.id} className='links' target='_blank' rel='noopener noreferrer'>
                <button>
                  <item.icon />
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
