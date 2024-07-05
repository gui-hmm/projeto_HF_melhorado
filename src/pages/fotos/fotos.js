import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ContainerFotos from '../../components/containerFotos/containerFotos';

function Fotos() {
  return (
    <div className='fotos'>
      <Header />
      <ContainerFotos/>
      <Footer/>
    </div>
  );
}

export default Fotos;
