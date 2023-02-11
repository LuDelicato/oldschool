import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { products } from '../data/data';
import { ProductItems } from './ProductsItems';

export const Hero = () => {
  const [searchProducts, setSearchProducts] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = products.filter((item) => item.title.toLowerCase().includes(keyword));
    setFilteredProducts(filtered);
    setSearchProducts(keyword);
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
          <input type='text' placeholder='Pesquisa de Produtos...' value={searchProducts} onChange={handleSearch} />
          <button>
            <BiSearch className='searchIcon heIcon' />
          </button>
        </div>
        <p>Exemplos: Hardcore, 94, Caps, Mute, Marcadores...</p>
      </div>
      {searchProducts && <ProductItems items={filteredProducts} />}
    </section>
  );
};
