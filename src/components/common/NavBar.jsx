import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import { navbar } from '../data/data';
import DarkModeBtn from './DarkModeBtn';

export const NavBar = ({ darkMode }) => {
  const [mobile, setMobile] = useState(false);
  const [headerClass, setHeaderClass] = useState('');
  const [logoSrc, setLogoSrc] = useState('oldschool_white.png');

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
        <nav>
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
            <AiOutlineHeart className='userIcon heIcon' />
          </div>
          <div className='right_user'>
            <button className='button' type='button'>
              <BsBagCheck className='shop heIcon' />
              Carrinho (0)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
