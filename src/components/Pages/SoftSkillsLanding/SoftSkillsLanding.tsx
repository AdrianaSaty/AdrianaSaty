import React from 'react';
import './SoftSkillsLanding.scss';
import checkIcon from '../../../img/svgs/check.svg';
import pauloPic from '../../../img/paulo.png';
function SoftSkillsLanding () {

    return (
        <div className="softskills-landing">
            <main>
                {/* <Contador /> */}
                <div className="container">
                    <h1 className="title">stepChanger</h1>
                    <div className="row">
                        <div className="columns">
                            <section className="text-align-left">
                                <h2>O que você precisa para se sentir pronto!</h2>
                                <p>Dê o primeiro passo para conseguir a vaga desejada! É só se cadastrar abaixo</p>
                            </section>
                            <form className="box">
                                <input type="text" className="info-input" name="nome" placeholder="Nome" required />
                                <input type="email" className="info-input" name="email" placeholder="E-mail" required />
                                <button type="submit" className="button">QUERO ENTRAR NA LISTA</button>
                                <p>Você está a <span>um clique</span> de conhecer se superar de uma forma que você nunca viu!<br></br></p>
                            </form>
                        </div>
                        <div className="columns">
                            <img src={pauloPic} alt="random img" className="img-fluid"></img>
                        </div>
                    </div>
                    <h1 className="title">Planejar Conteúdo</h1>
                    <div className="row">
                        <div className="columns">
                            <img src={pauloPic} alt="random img" className="img-fluid"></img>
                        </div>
                        <div className="columns">
                            <section className="text-align-right">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                            </section>
                        </div>
                    </div>
                    <div className="box">
                        <button type="button" className="button">Quero fazer parte disso</button>
                    </div>
                    <div className="row">
                        <div className="columns">
                            <h1 className="title">O <strong>Portal</strong> é para você que:</h1>
                            <section className="text-align-left">
                                <p><img src={checkIcon}></img> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor eveniet ducimus iure deleniti minus, consequuntur quas!</p>
                                <p><img src={checkIcon}></img> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </section>
                        </div>
                        <div className="columns">
                            <img src="https://picsum.photos/200" alt="random img" className="img-fluid"></img>
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
