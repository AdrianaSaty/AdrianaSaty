import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loading from './components/Loading/Loading'
import './index.scss';
import './i18n';
import './fonts/EXEPixelPerfect.ttf';

ReactDOM.render(
  <Suspense fallback={(<Loading />)}>
      <App />
   </Suspense>
    , document.getElementById('root'));
