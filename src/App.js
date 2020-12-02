import React, { Suspense } from 'react';
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
import './i18n';

function App() {

    return (
        <div className="app">
            <BrowserRouter>
                <Suspense fallback={(<Loading />)}>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/background" component={Background} />
                        <Route path="/project" component={Project} />
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                </Suspense>
            </ BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;