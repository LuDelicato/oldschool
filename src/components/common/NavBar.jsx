import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navbar } from '../data/data';
import DarkModeBtn from './DarkModeBtn';
import { social } from '../data/socialmedia';
import { dropdown } from '../data/dropdown';

export const NavBar = ({ darkMode }) => {
  const [mobile, setMobile] = useState(false);
  const [headerClass, setHeaderClass] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const useRefHook = useRef(null);

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

  function handleDropdown(nav) {
    if (nav.hasDropdown) {
      setDropdownVisible((prev) => (prev === nav.id ? null : nav.id));
    } else {
      setMobile(false);
      setDropdownVisible(false);
    }
  }

  function outsideClick(event) {
    if (useRefHook.current && !useRefHook.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', outsideClick);
    return () => document.removeEventListener('mousedown', outsideClick);
  }, []);

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
                  <div>
                    <NavLink to={nav.path} onClick={() => handleDropdown(nav)}>
                      {nav.text}
                    </NavLink>
                    {nav.hasDropdown && nav.id === dropdownVisible && (
                      <ul ref={useRefHook} className='dropdown show'>
                        {dropdown.map((item) => (
                          <li key={item.id}>
                            <NavLink
                              to={item.path}
                              onClick={() => {
                                setMobile(false);
                                setDropdownVisible(false);
                              }}
                            >
                              {item.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className='right'>
          <div className='right_user'>
            <DarkModeBtn className='dark-mode-btn' onToggle={handleDarkModeToggle} />
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
