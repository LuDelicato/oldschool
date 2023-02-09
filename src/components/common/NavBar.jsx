import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs';
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import { navbar } from '../data/data';

export const NavBar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <header className='header'>
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
          <div className='right_search'>
            <input type='text' placeholder='Pesquisa...' />
            <BiSearch className='searchIcon heIcon' />
          </div>
          <div className='right_user'>
            <RiUser3Line className='userIcon heIcon' />
            <AiOutlineHeart className='userIcon heIcon' />
          </div>
          <div className='right_user'>
            <button className='button'>
              <BsBagCheck className='shop heIcon' />
              Carrinho (0)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
