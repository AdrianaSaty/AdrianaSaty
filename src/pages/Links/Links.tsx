import React from 'react';
import './Links.scss';
import avatar from '../../img/avatar.png';
import youtube from '../../img/logos/youtube.svg'
import twitch from '../../img/logos/twitch.svg'

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
                    <a className='highlight' href="https://www.sympla.com.br/transformando-um-produto-em-uma-empresa-de-mais-de-r100m__1740326?afid=72014" target="_blank">Transforme seu produto/idéia em um negócio valioso!
                        <small>Para devs que querem empreender! <span role="img" aria-label="blink">🤑</span></small>
                    </a>
                </li>
                <li>
                    <a className='' href="/subscription">Vem novidade aí!
                        <small>Increva-se na lista de espera <span role="img" aria-label="blink">🔥</span></small>
                    </a>
                </li>
                <li>
                    <a className='' href="https://bit.ly/3CpTJWz" target="_blank">Quer trabalhar como freelancer?
                        <small>Confere o site da BossaBox!</small>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCPhVBS-1Uy-wIzj4hmjkcmA" target="_blank" rel="noopener noreferrer">
                        <img alt='youtube logo' className='img-logo' src={youtube} />
                        YOUTUBE
                        <small>Conteúdo gratuito!</small>
                    </a>
                </li>
                <li>
                    <a href="mailto:info@adrianasaty.com" target="_blank" rel="noopener noreferrer">
                        <span role="img" aria-label="blink">📩</span> Me envie um E-mail!
                        <small>Parcerias ou mentoria individual</small>
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
                    <a href="https://www.adrianasaty.com/">Meu site
                        <small>Navegue em outras línguas também!</small>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitch.tv/adrianasaty" target="_blank" rel="noopener noreferrer">
                        <img alt='twitch logo' className='img-logo-twitch' src={twitch} />
                        Twitch
                        <small>Live Coding e Game Coding</small>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Links;