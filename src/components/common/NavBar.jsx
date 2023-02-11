import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBagCheck } from 'react-icons/bs';
import { VscColorMode } from 'react-icons/vsc';
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import { navbar } from '../data/data';

export const NavBar = () => {
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
              <img src='/images/logo.png' alt='' />
            </a>
          </div>
          <div className='center'>
            <ul className={mobile ? 'mobile-nav' : 'menu'}>
              {navbar.map((nav) => (
                <li key={nav.id}>
                  <Link to={nav.path}>{nav.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className='right'>
          <div className='right_user'>
            <button className='button' type='button'>
              <VscColorMode className='userIcon heIcon' />
            </button>
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
