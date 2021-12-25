import React from 'react';
// import { useTranslation } from 'react-i18next';
import './Linktree.scss';
import avatar from '../../img/avatar.png';


function Linktree() {
    // const { t } = useTranslation();

    return (
        <div className="linktree">
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
                    <a href="https://www.adrianasaty.com/">Quero começar a programar!
                        <small>Se increva na lista de espera :)</small>
                    </a>
                </li>
                <li>
                    <a href="https://www.adrianasaty.com/">Meu site!
                        <small>Navegue em outras línguas também!</small>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCPhVBS-1Uy-wIzj4hmjkcmA" target="_blank">
                        YOUTUBE
                        <small>Vídeos em breve!</small>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=XTDP6kxMtoc&amp;t=3207s" target="_blank">
                        PARCERIAS
                        <small>Me mande um e-mail</small>
                    </a>
                </li>
            </ul>


            {/* <div className="container">
                <div>
                    <div>
                        <div className="session">
                            <center>
                                <img className="img-avatar" src={avatar} alt="avatar"></img>

                                <h1>
                                    Adriana Saty | Desenvolvedora de Software
                                </h1>
                                <img src={alemanha} alt="alemanha"></img>
                                <img className="logo" src={instagram} alt="alemanha"></img>
                                <div>

                                </div>
                            </center>
                        </div>

                    </div>
                </div>

            </div> */}

        </div>
    )
}

export default Linktree;