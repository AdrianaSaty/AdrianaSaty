import React from 'react';
import './SoftskillsCheckout.scss';
import '../../components/Accordion/Accordion'
import checkIcon from '../../img/svgs/check.svg';
import itauIcon from '../../img/svgs/itau.svg';
import accentureIcon from '../../img/svgs/accenture.svg';
import santanderIcon from '../../img/svgs/santander.svg';
import mountIcon from '../../img/svgs/mountain.svg';
import archIcon from '../../img/svgs/arch.svg';
import calendarIcon from '../../img/calendar.png';
import Accordion from '../../components/Accordion/Accordion';
import stepChangerGreen from '../../img/logos/stepChanger.png';
import stepChangerWhite from '../../img/logos/stepChanger-white.png';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';

interface Question {
    title: string,
    description: string
}

interface Questions extends Array<Question> { }

const questions: Questions = [
    {
        title: "Como funciona o mercado da tecnologia?",
        description:
            "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
        title: "Como se organizar da melhor forma?",
        description:
            "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
        title: "Tudo sobre Linkedin",
        description:
            "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
        title: "Mandando a ver nas entrevistas",
        description:
            "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
        title: "Bônus sobre mercado de tecnologia com convidados",
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
            <div className='warning text-center'>
                <h5>Vagas Limitadas!</h5>
            </div>
            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-5 animate-left">
                                <div className="text-align-left">
                                    <h2 className='heading'>Prepare-se para uma das profissões mais promissoras do mercado</h2>
                                    <p className='text-1'>Eu vou te orientar e acompanhar de perto para você conseguir uma vaga ou conquistar uma promoção em Tecnologia.<br></br></p>
                                    <a href='https://sun.eduzz.com/1392148'>
                                        <button type='submit' className='button'>QUERO FAZER PARTE !</button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7"></div>
                            <div className="col-md-6"></div>
                            <div className="col-md-6 animate-right">
                                <h2 className='reach-your-goals'>
                                </h2>
                                <h4>
                                    Você já passou por isso?
                                </h4>
                                <div className="text-align-left pb-5 mb-3">
                                    <div className='d-flex'>
                                        <p>“O mercado só busca profissionais com experiência”</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p>"Não passo nas entrevistas"</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p>“Não consigo focar ou ter tempo para me dedicar”</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p>“Não sei que curso fazer”</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p>“O mercado de tecnologia só tem homens”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row justify-content-center mt-3'>
                            <div className="col-md-6 animate-left mb-3">
                                <img src={stepChangerWhite} alt='step changer logo white' className="logo-step-changer" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 arch-mobile justify-content-center mt-3 mt-3'>
                                <img src={archIcon} alt='arch svg' />
                            </div>
                            <div className="col-md-6 animate-left mt-3">
                                <p>
                                    Na mentoria você vai:
                                </p>
                                <ul>
                                    <li>
                                        Direcionar sua carreira para onde você quer chegar. No distraction!
                                    </li>
                                    <li>
                                        Aprender métodos e hacks para atingir seus objetivos;
                                    </li>
                                    <li>
                                        Colocar na prática o que foi aprendido através de desafios;
                                    </li>
                                    <li>
                                        Ter o meu acompanhamento semanal.
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <img src={archIcon} alt='arch icon' className='arch-desktop' />
                            </div>
                            <div className='col-md-6 mt-5 justify-content-center d-flex'>
                                <img src={calendarIcon} alt='calendar icon' className='calendar' />
                            </div>
                            <div className="col-md-6 animate-left mt-3">
                                <p>
                                    O StepChanger é para você que:
                                </p>
                                <ul>
                                    <li>
                                        Se sente perdido e não sabe por onde começar;
                                    </li>
                                    <li>
                                        Tem dificuldade em se organizar para estudar ou buscar novas oportunidades;
                                    </li>
                                    <li>
                                        Quer ter a liberdade de escolher para qual empresa trabalhar;
                                    </li>
                                    <li>
                                        Quer ter controle das próprias decisões;
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-6'></div>
                            <div className='col-md-6 mt-5'>
                                <img src={mountIcon} alt='mountain icon' className='mountain-mobile' />
                            </div>
                            <div className="col-md-6 animate-left mt-3 pr-3">
                                <p>
                                    Qual etapa você está?
                                </p>
                                <ul>
                                    <li>
                                        Quer entrar no mercado da tecnologia;
                                    </li>
                                    <li>
                                        Atua em alguma área, mas quer fazer transição para tecnologia;
                                    </li>
                                    <li>
                                        Já trabalha em tecnologia e quer impulsionar a carreira;
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <img src={mountIcon} alt='mountain icon' className='mountain-desktop' />
                            </div>
                        </div>
                        <a href='https://sun.eduzz.com/1392148'>
                            <button type='submit' className='button'>QUERO FAZER PARTE !</button>
                        </a>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <h2>Módulos</h2>
                        <div className='row justify-content-center mt-3'>
                            Serão 5 encontros nos sábados, ao vivo e em grupo pelo Zoom, e em cada encontro vamos falar dos temas:

                            <div className='mt-3 mb-3'>
                                {questions.map((item: Question, i: number) => (
                                    <Accordion title={item.title} description={item.description} key={i} />
                                ))}
                            </div>
                            <p>
                                A cada encontro, teremos um tempo para conversarmos e te orientar nas suas dificuldades. Também vai ser enviado toda semana um desafio para você já colocar isso em prática.

                                As gravações dos encontros vão ficar por 1 mês para você rever.

                                Teremos um servidor no Discord: você vai poder interagir comigo e outros participantes na comunidade exclusiva da mentoria
                            </p>
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
                            <h2>O que você vai ter na mentoria?</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2 className='price'>
                                    <span className='price-part'>12x de </span>
                                    R<span className='space'>$</span>29,70
                                    <br></br>
                                    <span className='price-part'>Ou:</span>
                                </h2>
                                <div>
                                    <h2 className='price'>
                                        R<span className='space'>$</span>297,00
                                    </h2>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <ul className='mt-3'>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />
                                        5 semanas de encontro ao vivo comigo (14/mai - 11/jun, sábados, às 10h)
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />
                                        Espaço para dúvidas e orientações de carreira
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />
                                        Desafios semanais para colocar em prática depois de cada encontro
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />
                                        Comunidade dos alunos no Discord
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />
                                        Acesso de 1 mês de todas as gravações
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />
                                        Bônus com convidados da área
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt='check-icon' className='check-icon' />
                                        Certificado de conclusão
                                    </li>
                                </ul>
                                <a href='https://sun.eduzz.com/1392148'>
                                    <button type="submit" className="button">QUERO COMPRAR !</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        feedbacks
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <h2 className='text-center mt-3 mb-3'>Empresas que já trabalhei:</h2>
                        <div className='row justify-content-center'>
                            <img src={itauIcon} className="logo" alt='Itau logo' />
                            <img src={accentureIcon} className="logo" alt='Accenture logo' />
                            <img src={santanderIcon} className="logo" alt='Santander logo' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-5 animate-left">
                                <h2 className="animate-right">Eu sou a <br></br> Adriana Saty</h2>
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

export default SoftskillsCheckout;