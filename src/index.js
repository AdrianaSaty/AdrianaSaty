import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Background from './components/Pages/Background/Background';
import Freelance from './components/Pages/Freelance/Freelance';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import Loading from './components/Loading/Loading'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import './i18n';

ReactDOM.render(
    <Suspense fallback={(<Loading/>)}>

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

  </Suspense>


    , document.getElementById('root'));