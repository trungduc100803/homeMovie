import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'swiper/css';

import Global from './component/Global/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Global>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Global>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
