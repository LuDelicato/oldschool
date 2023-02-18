import React from 'react';
import { MdPhoneIphone } from 'react-icons/md';
import { MdSchedule } from 'react-icons/md';

function Iframe() {
  return (
    <div className='iframe'>
      <h1>Encontra-nos aqui!</h1>
      <iframe
        title='iframe'
        class='iframe'
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d751.3648751560942!2d-8.615993!3d41.124494000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa43b7fdd9fa6ca0!2sOldschool!5e0!3m2!1sen!2spt!4v1669194272452!5m2!1sen!2spt'
        width='400'
        height='300'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
      <p>
        <a href='tel:+351915933490'>
          <MdPhoneIphone />
          +351 917 274 301
        </a>
      </p>
      <p>
        <MdSchedule />
        Segunda à Sabado das 13h00 - 18h00
      </p>
    </div>
  );
}

export default Iframe;
