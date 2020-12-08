import React, { Suspense, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Background from './components/Pages/Background/Background';
import Project from './components/Pages/Project/Project';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading'
import './App.css';
import TagManager from 'react-gtm-module';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const tagManagerArgs = {
    gtmId: 'GTM-P6WN8SD'
}

TagManager.initialize(tagManagerArgs);

function App() {


    let language = i18next.use(LanguageDetector).language || 'en'; 
    
    const [choosedLanguage, setLanguage ] = useState(language);

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
                        <Route path={`/about`} component={About} />
                        <Route path="/background" component={Background} />
                        <Route path="/project" component={Project} />
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                </Suspense>
            </ BrowserRouter>
            <Footer changeLanguage={changeLanguage}/>
        </div>
    )
}

export default App;