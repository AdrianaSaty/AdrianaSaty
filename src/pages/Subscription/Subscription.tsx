import React from 'react';
import './Subscription.scss';
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import avatarGifSmall from '../../img/avatarGifSmall.gif';
import MailchimpForm from '../../components/MailchimpForm/MailchimpForm';


function Subscription() {
    const postUrl = `https://adrianasaty.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
console.log(process.env.REACT_APP_MAILCHIMP_U)
    return (
        <div className="subscription">
            <div className="container">
                <MailchimpSubscribe
                    url={postUrl}
                    render={({ subscribe, status }) => (
                        <div>
                            {
                                <>
                                    <div className='center'>
                                        <h1>Cadastro</h1>
                                        <img className="img-avatar" src={avatarGifSmall} alt="Foto de Adriana Saty sorrindo com fundo preto" />
                                    </div>
                                    <div className='header-txt'>
                                        <h3>Complete seu cadastro para receber novidades em primeira mão! :)</h3>
                                    </div>
                                    <MailchimpForm
                                        onValidated={(formData: EmailFormFields) => subscribe(formData)}
                                        status={status}
                                        nextPage={'/subscriptionSuccess'}
                                    />
                                    {status === "error" && <p className='subscribe-message error'>E-mail já cadastrado!</p>}
                                    {status === "sending" && <p className='subscribe-message'>Loading...</p>}
                                </>
                            }
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export default Subscription;