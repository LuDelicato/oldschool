import React from 'react';
import { social } from '../data/socialmedia';

function Footer() {
  return (
    <footer className='footer'>
      <ul>
        {social.map((item) => (
          <li key={item.id}>
            <item.icon />
            <a href={item.url} className='links ' target='_blank' rel='noopener noreferrer'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
