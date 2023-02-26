import React, { useState, useEffect } from 'react';

function About() {
  const [isDarkMode] = useState(() => {
    const keepTheme = localStorage.getItem('darkMode');
    return keepTheme === 'true' ? true : false;
  });

  useEffect(() => {
    const img = isDarkMode ? '/images/about_us_darkMode.png' : '/images/about_us_whiteMode.png';
    const imgElement = document.getElementById('about');
    if (imgElement) {
      imgElement.src = img;
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <section className='about'>
      <div className='image'>
        <img id='about' src={isDarkMode ? '/images/about_us_darkMode.png' : '/images/about_us_whiteMode.png'} alt='' />
      </div>
      <p>
        Bem-vindo à Oldschool, a loja de graffiti inaugurada há sete anos. Desde então, a loja tem sido um ponto de
        encontro para artistas e entusiastas de arte urbana. O espaço oferece produtos de alta qualidade, como sprays de
        marcas como a Montana, e também nos dedica-se a projetos e trabalhos para um público variado.
      </p>
      <p>
        O projeto Oldschool acredita que a arte tem o poder de transformar e unir comunidades. Neste sentido, participa
        ativamente em projetos educativos e artísticos, e iniciativas como Campeonatos de Beat Box, PARQ, e Projeto MAR.
        Também desenvolve projetos para o setor público e privado, levando a nossa paixão pela arte urbana a todos os
        cantos de Portugal.
      </p>
      <p>
        Na Oldschool, trabalhamos para que todos se sintam em casa. A loja é um espaço jovem e descontraído, onde a
        arte, as cores e a boa disposição são o nosso lema. Encontrarás um ambiente acolhedor e inspirador, onde podes
        explorar a tua criatividade e partilhar as tuas ideias com outros artistas.
      </p>
      <p>
        Se és um artista à procura de materiais de qualidade, um estudante à procura de inspiração ou apenas um curioso
        à procura de um lugar interessante para visitar, venha conhecer a Oldschool. Estamos ansiosos para conhecer-te e
        partilhar a nossa paixão pela arte urbana.
      </p>
    </section>
  );
}

export default About;
