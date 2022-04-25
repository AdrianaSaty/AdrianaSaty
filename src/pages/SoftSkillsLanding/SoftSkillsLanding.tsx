import React from 'react';
import './SoftSkillsLanding.scss';
import checkIcon from '../../img/svgs/check.svg';
import stepChangerGreen from '../../img/logos/stepChanger.png'
import stepChangerWhite from '../../img/logos/stepChanger-white.png'
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import MailchimpForm from '../../components/MailchimpForm/MailchimpForm';


function SoftSkillsLanding() {
    const postUrl = `https://adrianasaty.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="softskills-landing">
            <header>
                <div className='row container'>
                    <div className="col-md-6">
                        <img src={stepChangerGreen} alt="step changer logo green" className="logo-step-changer" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <p>Saty Mentoria - Inscrições 27/abril</p>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-5 animate-left">
                                <div className="text-align-left">
                                    <h2 className='heading'>Prepare-se para uma das profissões mais promissoras do mercado</h2>
                                    <p id='softskills-form'>Eu vou te orientar e acompanhar de perto para você conseguir uma vaga ou conquistar uma promoção em Tecnologia.<br></br></p>
                                    <p className="display-none-mobile">Dê o primeiro passo se cadastrando abaixo!</p>
                                </div>
                                <MailchimpSubscribe
                                    url={postUrl}
                                    render={({ subscribe, status }) => (
                                        <>
                                            {
                                                <>
                                                    <MailchimpForm
                                                        onValidated={(formData: EmailFormFields) => subscribe(formData)}
                                                        status={status}
                                                        nextPage={'/softskills-landing-success'}
                                                    />
                                                    {status === "error" && <p className='subscribe-message error'>E-mail já cadastrado!</p>}
                                                    {status === "sending" && <p className='subscribe-message'>Loading...</p>}
                                                </>
                                            }
                                        </>
                                    )}
                                />
                            </div>
                            <div className="col-md-7"></div>
                            <div className="col-md-6"></div>
                            <div className="col-md-6 animate-right">
                                <h2 className='reach-your-goals'>
                                    Você se sente sem rumo na hora de planejar a sua carreira? <br /><br />
                                    Está sem foco ou não consegue tempo para pôr em prática os estudos
                                    e dedicação necessários para fazer acontecer?
                                </h2>
                                <h4 className='mt-3'>Comigo você vai:</h4>
                                <div className="text-align-left">
                                    <div className='d-flex'>
                                        <img className='check-icon' alt='check-icon' src={checkIcon} />
                                        <p> Ter direcionamento de por onde começar e como.</p>
                                    </div>
                                    <div className='d-flex'>
                                        <img className='check-icon' alt='check-icon' src={checkIcon} />
                                        <p> Aprender métodos e hacks para atingir seus objetivos.</p>
                                    </div>
                                    <div className='d-flex'>
                                        <img className='check-icon' alt='check-icon' src={checkIcon} />
                                        <p> Acessar de forma prática e rápida conteúdos que demorei anos para descobrir - testados na prática</p>
                                    </div>
                                    <div className='d-flex'>
                                        <img className='check-icon' alt='check-icon' src={checkIcon} />
                                        <p> Desafios semanais: para colocar a mão na massa!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row mt-3'>
                            <div className="col-md-6 animate-left">
                                <img src={stepChangerWhite} alt='step changer logo white' className="logo-step-changer" />
                                <div className="text-align-left">
                                    <p>
                                        Eu vou revelar o formato - inédito - dessa mentoria para quem estiver inscrito(a) na minha lista e no grupo de WhatsApp.
                                        Te convido a se cadastrar para receber as novidades e garantir as melhores condições
                                    </p>
                                </div>
                            </div>

                            <div className='col-md-6 mb-3 d-flex align-items-center'>
                                <div className='w-100'>
                                    <div className='d-flex align-items-center'>
                                        <CountdownTimer />
                                    </div>
                                    <a href='#softskills-form'>
                                        <button type="submit" className="button">QUERO ENTRAR NA LISTA</button>
                                    </a>
                                </div>
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
                                    <p>O que talvez você não saiba é que eu já trabalhei nas maiores empresas de tecnologia do Brasil, como Itaú, Santander e Accenture!</p>
                                    <p>E agora eu quero ensinar a você a conseguir atingir seus objetivos de forma rápida, organizada e tranquila.</p>
                                    <p>A missão é: dividir o meu conhecimento para que você também consiga transformar suas metas em realidade.</p>
                                    <p>Vamos evoluir juntos e aproveitar o networking que esse grupo vai proporcionar!</p>
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
