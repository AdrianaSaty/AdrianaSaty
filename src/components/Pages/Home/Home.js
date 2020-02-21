import React from 'react';
import Navbar from '../../Navbar/Navbar'
import Header from '../../Header/Header'
import curriculum from './../../../img/curriculum.png';
import computer from '../../../img/computer.png';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import('./Home.css');

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <Navbar />
            <Header />
            <div className="section1">
                <h1 className="text-center pt-4">
                    {t('AboutMe.1')}
                </h1>
                <div className="container">
                    <div className="row d-flex ">
                            <div className="feature">
                                <img src={curriculum} alt="curriculum"></img>
                                <div className="">
                                    <h3><Link to="/freelance">{t('Freelance.1')}</Link></h3>
                                    <p className="feature-txt">
                                        {t('FreelanceText.1')}
                                    </p>
                                </div>
                            </div>
                    </div>
                        <div className="row feature-right">
                            <div className="feature">
                                <img src={computer} alt="computer"></img>
                                <div className="">
                                    <h3><Link to="/background">{t('Background.1')}</Link></h3>
                                    <p className="feature-txt">
                                        {t('BackgroundText.1')}
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