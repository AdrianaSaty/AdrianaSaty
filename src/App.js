import React, { useEffect}  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Background from './components/Pages/Background/Background';
import Freelance from './components/Pages/Freelance/Freelance';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './i18n';
import ReactGa from 'react-ga';

import './App.css';

function App() {
    useEffect(() => {
        ReactGa.initialize('UA-165955150-1')
        // to report page view 
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <div className="app">
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/background" component={Background} />
                        <Route path="/freelance" component={Freelance} />
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                </ BrowserRouter>
                <Footer />
        </div>
    )
}

export default App;