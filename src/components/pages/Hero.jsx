import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export const Hero = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) => {
    setValue(key);
  };

  return (
    <section className='hero'>
      <div className='container'>
        <h1>
          <label>
            Oldschool <span>a tua</span> Loja
          </label>
          <br />
          <label>
            A tua <span>ARTE</span> !
          </label>
        </h1>
        <p>Produtos de qualidade, variedade de cores e marcas. Venha conferir, e sinta-se em casa!</p>
        <div className='search'>
          <span>Todas as Categorias</span>
          <hr />
          <input type='text' placeholder='Pesquisa de Produtos...' onChange={onChange} value={value} />
          <button onClick={() => onSearch(value)}>
            <BiSearch className='searchIcon heIcon' />
          </button>
        </div>
        <p>Exemplos: Hardcore, 94, Caps, Mute, Poscas...</p>
      </div>
    </section>
  );
};
