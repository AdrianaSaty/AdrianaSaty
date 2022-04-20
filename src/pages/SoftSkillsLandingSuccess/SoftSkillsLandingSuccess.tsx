import React from 'react';
import './SoftSkillsLandingSuccess.scss';
import avatarGifSuccess from '../../img/avatarGifSuccess.gif';
import { Link } from 'react-router-dom';

function SoftSkillsLandingSuccess() {

    return (
        <div className="softskills-landing-success">
            <div className='container'>
                <div>
                    <h1>Uhuuul!</h1>
                </div>
            </div>
            <div className='center background-dark'>
                <img className="img-avatar-gif" src={avatarGifSuccess} alt="Gif de Adriana Saty sorrindo e apontando para baixo" />
            </div>
            <div className='container'>
                <div className='header-txt-success'>
                    <h3 className='center'>Agora só entrar no grupo!</h3>
                    <p className='center'>Não se preocupe, não vou mandar um monte de mensagens! ;)</p>
                    <Link to={{ pathname: "https://chat.whatsapp.com/BdgMVyVkDH00QyPArkIEfz" }} target="_blank" >
                        <button>Sou Homem</button>
                    </Link>
                    <Link to={{ pathname: "https://chat.whatsapp.com/G4EmOEK6qVWLyVc3y0tgal" }} target="_blank" >
                        <button >Sou mulher / Não Binário</button>
                    </Link>
                </div>
            </div >
        </div >
    )
}

export default SoftSkillsLandingSuccess;
