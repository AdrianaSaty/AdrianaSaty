import React from 'react';
import Navbar from '../../Navbar/Navbar'
import Header from '../../Header/Header'
import curriculum from './../../../img/curriculum.png';
import computer from '../../../img/computer.png';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import('./Home.css');
function Home() {

    return (
        <div className="home">
            <Navbar />
            <Header />
            <div className="section1">
                <h1 className="text-center pt-4"> About me</h1>
                <div className="container">
                    <div className="row d-flex ">
                            <div className="feature">
                                <img src={curriculum} alt="curriculum"></img>
                                <div className="">
                                    <h3><Link to="/freelance">Freelance</Link></h3>
                                    <p className="feature-txt">
                                        Faço sites utilizando as tecnologias mais recentes do mercado.
                                        Entre em contato comigo e faça um orçamento! :)
                                    </p>
                                </div>
                            </div>
                    </div>
                        <div className="row feature-right">
                            <div className="feature">
                                <img src={computer} alt="computer"></img>
                                <div className="">
                                    <h3><Link to="/background">Background</Link></h3>
                                    <p className="feature-txt">
                                        Atualmente trabalho como desenvolvedora Frontend no Santander
                                        e professora assistente no Bootcamp da Ironhack.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;