import React from "react";
import './footer.css'
import Logo from '../../assets/image-removebg-preview (6).png'
import { Link,} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className="esquerda">        
                <img id='logo' src={Logo} alt='Logo'/>
                <span>Todos os direitos reservados ©</span>
                <span>Desenvolvido por: Guilherme Henrique</span>
            </div>
            <div className='direita'>
                <nav className='footer-navigation'>
                    <ul className='footer-list'>
                        <Link style={{textDecoration: 'none'}} to='/'>
                            <li>Home</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to='/fotos'>
                            <li>Fotos</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to='/contato'>
                            <li>Contato</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to='/comentarios'>
                            <li>Comentários</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer;