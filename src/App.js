import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Background from './components/Pages/Background/Background';
import Freelance from './components/Pages/Freelance/Freelance';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Suspense fallback={(<div>Loading</div>)}>

        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/background" component={Background} />
            <Route path="/freelance" component={Freelance} />
            <Route path='*' component={ErrorPage} />
          </Switch>
          <Footer />

        </ BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
