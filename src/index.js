import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading/Loading'
import App from './App';
import './index.css';
import './i18n';

ReactDOM.render(
  <Suspense fallback={(<Loading />)}>
    <App />
  </Suspense>


  , document.getElementById('root'));