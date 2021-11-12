import React, { Suspense, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading'
import TagManager from 'react-gtm-module';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const tagManagerArgs = {
    gtmId: 'GTM-P6WN8SD'
}

TagManager.initialize(tagManagerArgs);

function App() {
    const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
    const Footer = React.lazy(() => import('./components/Footer/Footer'));
    const Home = React.lazy(() => import('./components/Pages/Home/Home'));
    const Linktree = React.lazy(() => import('./pages/Linktree/Linktree'));
    const About = React.lazy(() => import('./components/Pages/About/About'));
    const Background = React.lazy(() => import('./components/Pages/Background/Background'));
    // const Freelance = React.lazy(() => import('./components/Pages/Freelance/Freelance'));
    const ErrorPage = React.lazy(() => import('./components/Pages/ErrorPage/ErrorPage'));


    // useEffect(() => {
    //     ReactGa.initialize('UA-165955150-1')
    //     ReactGa.pageview(window.location.pathname + window.location.search)
    // }, [])


    let language = i18next.use(LanguageDetector).language || 'en';

    const [choosedLanguage, setLanguage] = useState(language);

    function changeLanguage(lg) {
        i18next.changeLanguage(lg);
        language = lg;
        setLanguage(language)
        console.log(choosedLanguage, language)
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Suspense fallback={(<Loading />)}>
                    <Navbar />
                    <Switch>
                        <Route path={"/"} exact={true} component={Home} />
                        <Route path={`/linktree`} component={Linktree} />
                        <Route path={`/about`} component={About} />
                        <Route path="/background" component={Background} />
                        {/* <Route path="/project" component={Project} /> */}
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                </Suspense>
            </ BrowserRouter>
            <Footer changeLanguage={changeLanguage} />
        </div>
    )
}

export default App;