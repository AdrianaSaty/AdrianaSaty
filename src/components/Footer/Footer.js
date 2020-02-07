import React from 'react';
import fb from '../../img/facebook.png';
import ln from '../../img/linkedin.png';
import insta from '../../img/instagram.png';
import email from '../../img/email.png';
import github from '../../img/github.png'
import brasil from '../../img/brasil.png'
import eua from '../../img/eua.png'
import espanha from '../../img/espanha.png'
import alemanha from '../../img/alemanha.png'
import('./Footer.css');

function Footer() {

    return (
        <div className="footer">
            <div className="links">
                <div className="d-flex justify-content-center align-items-center teste">
                    <a href="mailto:adri-saty@hotmail.com" class="email-lnk">
                        <img src={email} alt="email" className="email"></img>
                        <p className="icon-name email">E-mail</p>
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={ln} alt="ln" className="linkedin"></img>
                    <p className="icon-name linkedin">Linkedin</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={github} alt="github" className="github"></img>
                    <p className="icon-name github">Github</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={insta} alt="insta" className="instagram"></img>
                    <p className="icon-name instagram">Instagram</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={fb} alt="fb" className="facebook"></img>
                    <p className="icon-name facebook">Facebook</p>
                </div>
            </div>
            <div className="name-countries">
                <div className="countries">
                    <img src={brasil} alt="brasil"></img>
                    <img src={eua} alt="eua"></img>
                    <img src={espanha} alt="espanha"></img>
                    <img src={alemanha} alt="alemanha"></img>
                </div>
                <p className="txt-center powered-by">
                    Powered by AdrianaSaty
                </p>
            </div>
        </div>
    )
}

export default Footer;
