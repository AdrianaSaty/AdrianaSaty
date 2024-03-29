import React from 'react';
import './SubscriptionSuccess.scss';
import avatarGifSuccess from '../../img/avatarGifSuccess.gif';
import { Link } from 'react-router-dom';


function SubscriptionSuccess() {
    return (
        <div className="subscription-success">
            <div className='container'>
                <header className='header-success'>
                    <div>
                        <h1>Uhuuul!</h1>
                        <div className='center'>
                            <img className="img-avatar-gif" src={avatarGifSuccess} alt="Gif de Adriana Saty sorrindo e apontando para baixo" />
                            <div className='header-txt-success'>
                            <h3>Entrar no grupo do Whatsapp!</h3>
                            <Link to={{ pathname: "https://chat.whatsapp.com/JUK6iBCd27R4uhN5xNQMeL" }} target="_blank" >
                                <button >Entrar</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default SubscriptionSuccess;