import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Background from './components/Pages/Background/Background';
import Freelance from './components/Pages/Freelance/Freelance';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/background" component={Background} />
                <Route path="/freelance" component={Freelance} />
                <Route path='*' component={ErrorPage} />
            </Switch>
        </ BrowserRouter>
    , document.getElementById('root'));