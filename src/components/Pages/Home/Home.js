import React, { useEffect}  from 'react';
import curriculum from './../../../img/curriculum.png';
import computer from '../../../img/computer.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import ReactGa from 'react-ga';

function Home() {
    const Header = React.lazy(() => import('../../Header/Header'));

    const { t } = useTranslation();

    useEffect(() => {
        ReactGa.initialize('UA-165955150-1')
        // to report page view 
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <div className="home">
            <Header />
            <div className="section1">
                <h1 className="text-center pt-4">
                    {t('AboutMe.0')}
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="feature col-md-8 animate-left">
                            <img src={curriculum} alt="curriculum"></img>
                            <div className="">
                                <h3><Link to="/freelance">{t('Freelance.0')}</Link></h3>
                                <p>
                                    {t('FreelanceText.0')}
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
                                    <p>
                                        {t('BackgroundText.0')}
                                    </p>
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