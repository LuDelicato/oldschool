import { BiSearch } from 'react-icons/bi';

export const Hero = () => {
  return (
    <>
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
            <input type='text' placeholder='Pesquisa de Produtos...' />
            <button>
              <BiSearch className='searchIcon heIcon' />
            </button>
          </div>
          <p>Exemplos: Hardcore, 94, Caps, Mute, Poscas...</p>
        </div>
      </section>
    </>
  );
};
