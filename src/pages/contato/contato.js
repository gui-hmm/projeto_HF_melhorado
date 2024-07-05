import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contato() {
  return (
    <div className='pag_contato'>
      <Header />
        <div className="social-media">
            <a href="https://wa.me/qr/VJO3MR273QFHI1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} /> whatsapp
            </a>
            <a href="https://www.instagram.com/gui.hmoura?igsh=a3ZwZ3ptaGpqdm9q" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> instagram
            </a>
            <a href="https://github.com/gui-hmm" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> github
            </a>
            <a href="https://www.linkedin.com/in/guilherme-henrique-a654a2205" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} /> linkedin
            </a>
        </div>
      <Footer/>
    </div>
  );
}

export default Contato;
