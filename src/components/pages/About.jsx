import React from 'react';

function About() {
  return (
    <section className='about'>
      <div className='image'>
        <img src='images/oldschool_about_us.png' alt='' />
      </div>
      <p>
        Bem-vindo à Oldschool, a loja de graffiti fundada por{' '}
        <a href='https://www.instagram.com/monicadelicato/' target='_blank' rel='noreferrer'>
          Mônica Delicato
        </a>{' '}
        há seis anos. Desde então, a nossa loja tem sido um ponto de encontro para artistas e entusiastas de arte
        urbana. Aqui, não só vendemos produtos de alta qualidade, como as latas de spray da marca Montana, mas também
        nos dedicamos a projetos e trabalhos para pessoas de todas as idades e origens.
      </p>
      <p>
        Acreditamos que a arte tem o poder de transformar e unir comunidades. Por isso, participamos ativamente em
        projetos educativos e artísticos, e iniciativas como Campeonatos de Beat Box, assim como o Projeto Mar em Vila
        Nova de Gaia. Também colaboramos com escolas e projetos particulares, levando a nossa paixão pela arte urbana a
        todos os cantos da cidade.
      </p>
      <p>
        Na Oldschool, queremos que todos se sintam em casa. A nossa loja é um espaço jovem e descontraído, onde a arte,
        as cores e a boa disposição são o nosso lema. Aqui, encontrarás um ambiente acolhedor e inspirador, onde podes
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
