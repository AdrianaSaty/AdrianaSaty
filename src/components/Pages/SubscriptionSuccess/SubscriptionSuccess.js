import React from 'react';
import './SubscriptionSuccess.scss';
import avatarGif from '../../../img/avatarGif.gif';
import { Link } from 'react-router-dom';


function SubscriptionSuccess() {
    return (
        <div className="subscription-success">
            <div className='container'>
                <header className='header-success'>
                    <center>
                        <h1>Uhuuul!</h1>
                        <img className="img-avatar-gif" src={avatarGif} alt="Gif de Adriana Saty sorrindo e apontando para baixo" />
                        <div className='header-txt-success'>
                            <h3>Entrar no grupo do whasapp!</h3>
                            {/* <Link
                            role="button"
                            target="_blank"
                            // to="https://chat.whatsapp.com/BdgMVyVkDH00QyPArkIEfz"
                        >
                            Button1
                        </Link> */}
                            <Link to={{ pathname: "https://chat.whatsapp.com/BdgMVyVkDH00QyPArkIEfz" }} target="_blank" >
                                <button >Entrar</button>
                            </Link>
                        </div>
                    </center>
                </header>
            </div>

        </div>
    )
}

export default SubscriptionSuccess;