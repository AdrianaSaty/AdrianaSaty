import React from 'react';
import './Links.scss';
import avatar from '../../../img/avatar.png';


function Links() {
    return (
        <div className="Links">
            <div className="stars-small"></div>
            <div className="stars-big"></div>
            <center>
                <header>
                    <figure>
                        <img className="img-avatar" src={avatar} alt="Foto de Adriana Saty sorrindo com fundo preto" />
                    </figure>
                    <h1>@Adriana.Saty</h1>
                    <h2>Desenvolvedora de Software</h2>
                </header>
            </center>
            <ul>
                <li>
                    <a className='highlight' href="/subscription">Cursos e eventos!
                        <small>Increva-se na lista de espera <span role="img" aria-label="blink">😉</span></small>
                    </a>
                </li>
                <li>
                    <a href="https://gen.partners/adriana_saty">Inscrição Curso Dev Web - Resilia
                        <small>se inscreva aqui!</small>
                    </a>
                </li>
                <li>
                    <a href="https://gen.partners/adriana_saty">Inscrição Curso .NET - Bolsa Generation
                        <small>se inscreva aqui!</small>
                    </a>
                </li>
                <li>
                    <a href="https://www.adrianasaty.com/">Meu site
                        <small>Navegue em outras línguas também!</small>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCPhVBS-1Uy-wIzj4hmjkcmA" target="_blank" rel="noopener noreferrer">
                        YOUTUBE
                        <small>Vídeos em breve!</small>
                    </a>
                </li>
                <li>
                    <a href="mailto:info@adrianasaty.com" target="_blank" rel="noopener noreferrer">
                        CONTATO
                        <small>Parcerias ou mentoria individual</small>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Links;