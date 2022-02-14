import React from 'react';
import './Links.scss';
import avatar from '../../../img/avatar.png';


function Links() {
    return (
        <div className="Links">
            <div className="stars-small"></div>
            <div className="stars-big"></div>
            <div className='center'>
                <header>
                    <figure className='txt-center'>
                        <img className="img-avatar" src={avatar} alt="Foto de Adriana Saty sorrindo com fundo preto" />
                    </figure>
                    <h1>@Adriana.Saty</h1>
                    <h2>Desenvolvedora de Software</h2>
                </header>
            </div>
            <ul>
                <li>
                    <a className='highlight' href="/subscription">Cursos e eventos!
                        <small>Increva-se na lista de espera <span role="img" aria-label="blink">😉</span></small>
                    </a>
                </li>
                <li>
                    <a href="https://bit.ly/3J5127Z">Plataforma Devmedia
                        <small>Use meu cupom de RS108 de desconto: SATY</small>
                    </a>
                </li>
                <li className='two-links'>
                    <h3>Palestra Web 3.0</h3>
                    <div>
                        <a href="https://youtu.be/FATBfklFUto?t=755">Vídeo
                        </a>
                        <a href="/files/Web3.0-Adriana_Saty.pdf">Slides
                        </a>
                    </div>

                </li>
                <li>
                    <a href="https://bit.ly/AdrianaResilia">Inscrição Curso Dev Web - Resilia
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