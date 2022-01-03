import React from 'react';
import curriculum from './../../../img/curriculum.png';
import computer from '../../../img/computer.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.scss';
import Navbar from '../../Navbar/Navbar';

function Home() {
    const Header = React.lazy(() => import('../../Header/Header'));

    const { t } = useTranslation();

    return (
        <div className="home">
            <Navbar />
            <Header />
            <div className="section1">
                <div>
                    <h1 className="text-center pt-4">
                        {t('AboutMe.0')}
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="feature col-md-8 animate-left">
                                <img src={curriculum} alt="curriculum"></img>
                                <div className="">
                                    <h3><Link to="/freelance">{t('Project.0')}</Link></h3>
                                    <p className="description">
                                        {t('ProjectText.0')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                            </div>
                            <div className="feature col-md-8 animate-right">
                                <div className="feature">
                                    <img src={computer} alt="computer"></img>
                                    <div className="">
                                        <h3><Link to="/background">{t('Background.0')}</Link></h3>
                                        <p className="mb-0" dangerouslySetInnerHTML={{ __html: t('BackgroundText.0') }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;