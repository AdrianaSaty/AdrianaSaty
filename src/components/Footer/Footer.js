import React from 'react';
import fb from '../../img/facebook.png';
import ln from '../../img/linkedin.png';
import insta from '../../img/instagram.png';
import email from '../../img/email.png';
import github from '../../img/github.png';
import brasil from '../../img/brasil.png';
import eua from '../../img/eua.png';
import espanha from '../../img/espanha.png';
import alemanha from '../../img/alemanha.png';
import i18next from 'i18next';
import './Footer.css';
// #959596
function Footer() {

    function handleClick(lang) {
        i18next.changeLanguage(lang);
        window.scrollTo( 0, 1000 );
    }
    return (
        <div className="footer">
            <div className="links">
                <div className="d-flex justify-content-center align-items-center teste">
                    <a href="mailto:adri-saty@hotmail.com" className="email-lnk">
                        <img src={email} alt="email" className="email"></img>
                        <p className="icon-name email">E-mail</p>
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://www.linkedin.com/in/adriana-saty-bertelli/" target="_blank" rel="noopener noreferrer">
                    <img src={ln} alt="ln" className="linkedin"></img>
                    <p className="icon-name linkedin">Linkedin</p>
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://github.com/AdrianaSaty" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="github"></img>
                        <p className="icon-name github">Github</p>
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://instagram.com/adrisaty" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="insta" className="instagram"></img>
                        <p className="icon-name instagram">Instagram</p>
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://instagram.com/adrisaty" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="fb" className="facebook"></img>
                        <p className="icon-name facebook">Facebook</p>
                    </a>
                </div>
            </div>
            <div className="name-countries">
                <div className="countries">
                    <button onClick={() => handleClick('en')}><img src={eua} alt="eua"></img> </button>
                    <button onClick={() => handleClick('pt')}><img src={brasil} alt="brasil"></img></button>
                    <button onClick={() => handleClick('deu')}><img src={alemanha} alt="alemanha"></img></button>
                    <button onClick={() => handleClick('es')}><img src={espanha} alt="espanha"></img></button>
                </div>
                <p className="text-center powered-by">
                    Powered by AdrianaSaty
                </p>
            </div>
        </div>
    )
}

export default Footer;
