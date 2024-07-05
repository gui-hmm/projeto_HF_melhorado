import React from "react";
import './trailer.css'
import Video from '../../assets/trailer.mp4'

function Trailer() {
    return (
        <>
            <div id='banner'></div>
            <div id="trailer-container"> 
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} />
                        seu navegador não possui suporte para vídeos
                    </video>
                    <div id="sinopse">
                        <p className="description">
                            Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.
                        </p>
                        <button className="button">Comprar ingresso</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trailer;