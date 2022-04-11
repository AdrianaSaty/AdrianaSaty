import React from 'react';
import './SoftSkillsLanding.scss';
import checkIcon from '../../../img/svgs/check.svg';

function SoftSkillsLanding () {

    return (
        <div className="softskills-landing">
        <main>
            {/* <Contador /> */}
            <div className="container">
            <h1 className="title">stepChanger</h1>
            <section className="text-align-left">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus.</p>
            </section>
            <form className="box">
                <input type="text" className="info-input" name="nome" placeholder="Nome" required />
                <input type="email" className="info-input" name="email" placeholder="E-mail" required />
                <button type="submit" className="button">QUERO ENTRAR NA LISTA</button>
            </form>
            <h1 className="title">Planejar Conteúdo</h1>
            <section className="text-align-right">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
            </section>
            <div className="box">
                <button type="button" className="button">Quero fazer parte disso</button>
            </div>
            <div className="columns">
                <div className="left-div">
                    <h1 className="title">O <strong>Portal</strong> é para você que:</h1>
                    <section className="text-align-left">
                        <p><img src={checkIcon}></img> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                        <p><img src={checkIcon}></img> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </section>
                </div>
                <div className="right-div">
                    <img src="https://picsum.photos/300" alt="random img" className="img-fluid"></img>
                </div>
                {/* <Contador /> */}
            </div>
            <h1 className="title">Eu sou a Adriana Saty.</h1>
             <img src="https://picsum.photos/300" alt="random img" className="img-fluid"></img>
            <section className="text-align-left">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus.</p>
                </section>
                </div>
            </main>
            </div>
    )
}

export default SoftSkillsLanding;
