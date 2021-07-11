import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './i18n';

ReactDOM.render(
  <Suspense fallback={(<Loading />)}>
      <App />
   </Suspense>
    , document.getElementById('root'));
