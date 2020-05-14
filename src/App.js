import React, { useEffect}  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './i18n';
import ReactGa from 'react-ga';

import './App.css';

function App() {
    const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
    const Footer = React.lazy(() => import('./components/Footer/Footer'));
    const Home = React.lazy(() => import('./components/Pages/Home/Home'));
    const About = React.lazy(() => import('./components/Pages/About/About'));
    const Background = React.lazy(() => import('./components/Pages/Background/Background'));
    const Freelance = React.lazy(() => import('./components/Pages/Freelance/Freelance'));
    const ErrorPage = React.lazy(() => import('./components/Pages/ErrorPage/ErrorPage'));


    useEffect(() => {
        ReactGa.initialize('UA-165955150-1')
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