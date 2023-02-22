import React from 'react';
import Chatbot from '../common/Chatbot';
import { social } from '../data/socialmedia';

function Footer() {
  return (
    <footer className='footer'>
      <ul>
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url} className='links ' target='_blank' rel='noopener noreferrer'>
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
      <Chatbot />
    </footer>
  );
}

export default Footer;
