import React, { Suspense, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading/Loading'
import TagManager from 'react-gtm-module';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import SubscriptionSuccess from './pages/SubscriptionSuccess/SubscriptionSuccess';
import SoftSkillsLandingSuccess from './pages/SoftSkillsLandingSuccess/SoftSkillsLandingSuccess';

const tagManagerArgs = {
    gtmId: 'GTM-P6WN8SD'
}

TagManager.initialize(tagManagerArgs);

function App() {
    const Footer = React.lazy(() => import('./components/Footer/Footer'));
    const Home = React.lazy(() => import('./pages/Home/Home'));
    const Links = React.lazy(() => import('./pages/Links/Links'));
    const Products = React.lazy(() => import('./pages/Products/Products'));
    const About = React.lazy(() => import('./pages/About/About'));
    const Background = React.lazy(() => import('./pages/Background/Background'));
    const Subscription = React.lazy(() => import('./pages/Subscription/Subscription'));
    const ErrorPage = React.lazy(() => import('./pages/ErrorPage/ErrorPage'));
    const SoftSkillsLanding = React.lazy(() => import('./pages/SoftSkillsLanding/SoftSkillsLanding'));
    const SoftskillsCheckout = React.lazy(() => import('./pages/SoftskillsCheckout/SoftskillsCheckout'));
    const DeepLink = React.lazy(() => import('./pages/DeepLink/DeepLink'));

    let language = i18next.use(LanguageDetector).language || 'en';

    const [choosedLanguage, setLanguage] = useState(language);

    function changeLanguage(lg: string) {
        i18next.changeLanguage(lg);
        language = lg;
        setLanguage(language)
        console.log(choosedLanguage, language)
    }

    function showFooter() {
        if (window.location.pathname.includes('softskills')) {
            return false;
        } else {
            return true;
        }
    }
    
    return (
        <div className="app">
            <BrowserRouter>
                <Suspense fallback={(<Loading />)}>
                    <Switch>
                        <Route path={"/"} exact={true} component={Home} />
                        <Route path={`/links`} component={Links} />
                        <Route path={`/products`} component={Products} />
                        <Route path={`/about`} component={About} />
                        <Route path={`/background`} component={Background} />
                        <Route path={`/softskills-landing`} component={SoftSkillsLanding} />
                        <Route path={`/softskills-checkout`} component={SoftskillsCheckout} />
                        <Route path={`/softskills-landing-success`} component={SoftSkillsLandingSuccess} />
                        <Route path={`/subscription`} component={Subscription} />
                        <Route path={`/subscription-success`} component={SubscriptionSuccess} />
                        <Route path={`/deeplink`} component={DeepLink} />
                        {/* <Route path={`/project`} component={Project} /> */}
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                </Suspense>
                {
                    showFooter()
                        ?
                        <Footer changeLanguage={changeLanguage} />
                        :
                        <></>
                }
            </ BrowserRouter>

        </div>
    )
}

export default App;