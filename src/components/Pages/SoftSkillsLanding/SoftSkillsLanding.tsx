import React from 'react';
import './SoftSkillsLanding.scss';
import checkIcon from '../../../img/svgs/check.svg';
import saty from '../../../img/saty-test.jpg';
import stepChanger from '../../../img/logos/stepChanger.png'
import landingBackgroundSection2 from '../../../img/landingBackgroundSection2.png'
import CountdownTimer from '../../CountdownTimer/CountdownTimer';


function SoftSkillsLanding() {

    return (
        <div className="softskills-landing">
                <CountdownTimer />

            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className=" col-md-5 animate-left">
                                {/* <img src={stepChanger} className="step-changer-logo" />
                            <h1 className="title">Softskills</h1> */}
                                <div className="text-align-left">
                                    <h2 className='heading'>O que você precisa <br /> para se sentir pronto!</h2>
                                    <p>Você está a <span>um clique</span> de se superar de uma forma que você nunca viu!<br></br></p>
                                </div>
                                <form className="box">
                                    <p className="display-none-mobile">Dê o primeiro passo para conseguir a vaga desejada! É só se cadastrar abaixo</p>
                                    <input type="text" className="info-input" name="nome" placeholder="Nome" required />
                                    <input type="email" className="info-input" name="email" placeholder="E-mail" required />
                                    <button type="submit" className="button">QUERO ENTRAR NA LISTA</button>
                                </form>
                            </div>
                            <div className="col-md-7"></div>
                            <div className="col-md-6"></div>
                            <div className="col-md-6 animate-right">
                                <h1 className='reach-your-goals'>Atinja <br /> seus objetivos!</h1>
                                <p>Vou te ensinar todos os métodos e hacks que usei para atingir meus objetivos.<br></br></p>
                                <p>Reuni nessa mentoria aprendizagens de anos que demorei para descobrir e testar até dar certo! <br></br></p>
                                <p>Então pensei uma forma prática e rápida e te ajudar - e vou te aprensentar de uma forma inédita. Te convido a entrar comigo numa nova jornada que começa no dia 14 de maio. <br></br></p>
                                <button type="submit" className="button">QUERO ENTRAR NA LISTA</button>
                            </div>
                        </div>

                    </div>

                </section>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-5 animate-left">
                                <h1 className="title">Step <strong>Changer</strong> é para você que:</h1>
                                <section className="text-align-left">
                                    <p><img src={checkIcon}></img> Quer ser mais produtivo (com saúde e tranquilidade).</p>
                                    <p><img src={checkIcon}></img> Busca melhorar rápido, sem perda de tempo, direto ao ponto!</p>
                                    <p><img src={checkIcon}></img> Quer conseguir a vaga de emprego dos sonhos.</p>
                                    <p><img src={checkIcon}></img> Sofre com insegurança/síndrome do impostor.</p>
                                </section>
                            </div>
                            <div className="col-md-7">
                                <img src={landingBackgroundSection2} className="saty-green-shirt" />
                            </div>
                            <div className='col-md-12'>
                                <div className='fixed-counter'>
                                    <div><p>14 / 05 / 2022</p></div>
                                    <div><p>22h</p></div>
                                </div>
                                <img src={stepChanger} className="step-changer-logo" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-5 animate-left">
                                <h1 className="title animate-right">Eu sou a Adriana Saty.</h1>
                                <div className="text-align-left animate-right">
                                    <p>Você pode me conhecer pelos meus tutoriais de programação do Youtube, pelos meus stories do Instagram ou vídeos de humor no Tiktok. Eu mostro o que eu sou e o que eu sei nas minhas redes sociais!</p>
                                    <p>E agora eu quero ensinar a você a conseguir atingir seus objetivos de forma rápida, organizada e tranquila.</p>
                                    <p>A missão é: dividir o meu conhecimento para que você também consiga transformar suas metas em realidade.</p>
                                    <p>Sonhos morrem e frustrações aparecem. O segredo é sempre estar se adaptando e evoluindo</p>
                                    <p>Vamos evoluir juntos e aprovietar o networking que esse grupo vai proporcionar!</p>
                                    <p>Este é só o começo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className='end-line'></div>
        </div>
    )
}

export default SoftSkillsLanding;
