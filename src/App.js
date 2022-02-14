import React, { Suspense, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading'
import TagManager from 'react-gtm-module';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import SubscriptionSuccess from './components/Pages/SubscriptionSuccess/SubscriptionSuccess';

const tagManagerArgs = {
    gtmId: 'GTM-P6WN8SD'
}

TagManager.initialize(tagManagerArgs);

function App() {
    const Footer = React.lazy(() => import('./components/Footer/Footer'));
    const Home = React.lazy(() => import('./components/Pages/Home/Home'));
    const Links = React.lazy(() => import('./components/Pages/Links/Links'));
    const About = React.lazy(() => import('./components/Pages/About/About'));
    const Background = React.lazy(() => import('./components/Pages/Background/Background'));
    const Subscription = React.lazy(() => import('./components/Pages/Subscription/Subscription'));
    const ErrorPage = React.lazy(() => import('./components/Pages/ErrorPage/ErrorPage'));

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
                    <Switch>
                        <Route path={"/"} exact={true} component={Home} />
                        <Route path={`/links`} component={Links} />
                        <Route path={`/about`} component={About} />
                        <Route path="/background" component={Background} />
                        <Route path="/subscription" component={Subscription} />
                        <Route path="/subscriptionSuccess" component={SubscriptionSuccess} />
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