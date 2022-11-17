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
                            <h3>Obrigada!</h3>
                            <p>Sua inscrição foi feita com sucesso!</p>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default SubscriptionSuccess;