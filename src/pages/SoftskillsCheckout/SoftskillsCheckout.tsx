import React from 'react';
import './SoftskillsCheckout.scss';
import '../../components/Accordion/Accordion'
import checkIcon from '../../img/svgs/check.svg';
import Accordion from '../../components/Accordion/Accordion';
import stepChangerGreen from '../../img/logos/stepChanger.png';
import stepChangerWhite from '../../img/logos/stepChanger-white.png';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';

interface Question {
    title: string,
    description: string
}

interface Questions extends Array<Question>{}

const questions: Questions = [
    {
        title: "Teste",
        description:
            "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
        title: "Teste",
        description:
            "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
        title: "Teste",
        description:
            "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
];

function SoftskillsCheckout() {
    return (
         <div className="softskills-checkout">
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
                            </div>
                            <div className="col-md-7"></div>
                            <div className="col-md-6"></div>
                            <div className="col-md-6 animate-right">
                                <h2 className='reach-your-goals'>
                                    Você se sente sem rumo na hora de planejar a sua carreira? <br /><br />
                                    Está sem foco ou não consegue tempo para pôr em prática os estudos
                                    e dedicação necessários para fazer acontecer?
                                </h2>
                                <h4 className='padding'>Comigo você vai:</h4>
                                <div className="text-align-left">
                                    <div className='d-flex'>
                                        {/*<img className='check-icon' alt='check-icon' src={checkIcon} />*/}
                                        <p> Ter direcionamento de por onde começar e como.</p>
                                    </div>
                                    <div className='d-flex'>
                                        {/*<img className='check-icon' alt='check-icon' src={checkIcon} />*/}
                                        <p> Aprender métodos e hacks para atingir seus objetivos.</p>
                                    </div>
                                    <div className='d-flex'>
                                        {/*<img className='check-icon' alt='check-icon' src={checkIcon} />*/}
                                        <p> Acessar de forma prática e rápida conteúdos que demorei anos para descobrir - testados na prática</p>
                                    </div>
                                    <div className='d-flex'>
                                        {/*<img className='check-icon' alt='check-icon' src={checkIcon} />*/}
                                        <p> Desafios semanais: para colocar a mão na massa!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row justify-content-center mt-3'>
                            <div className="col-md-6 animate-left">
                                <img src={stepChangerWhite} alt='step changer logo white' className="logo-step-changer" />
                                <div className="text-align-left">
                                    <p>
                                        Eu vou revelar o formato - inédito - dessa mentoria para quem estiver inscrito(a) na minha lista e no grupo de WhatsApp.
                                        Te convido a se cadastrar para receber as novidades e garantir as melhores condições
                                    </p>
                                </div>
                            </div>
                            <div className='mt-3 mb-3'>
                                {questions.map((item: Question, i: number) => (
                                    <Accordion title={item.title} description={item.description} key={i} />
                                ))}
                            </div>
                            <div className='col-md-6 mb-3 d-flex align-items-center'>
                                <div className='w-100'>
                                    <div className='d-flex align-items-center'>
                                        <CountdownTimer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row justify-content-center mb-3 mt-3'>
                            <h4 className='bg-title'>E QUANTO VAI CUSTAR?</h4>
                        </div>
                        <div className="double-div">
                            <div id="one">
                                <h4 className='price'>
                                    DE:<span className='price cross'>R$ 599,99</span>
                                    <br></br>
                                    POR:</h4>
                                <div>
                                    <h2 className='price container'>
                                        R$ 123,00
                                    </h2>
                                </div>
                            </div>
                            <div id="two">
                                <h4 className='bg-title mt-3'>BENEFÍCIOS EXCLUSIVOS</h4>
                                <ul className='mt-3'>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.</li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.</li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.</li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.</li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.</li>
                                </ul>
                            </div>
                            <a>
                                <button type="submit" className="button">QUERO COMPRAR !</button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <div className='end-line'></div>
        </div>
    )
}

export default SoftskillsCheckout;