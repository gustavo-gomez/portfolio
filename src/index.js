import React from 'react';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store'
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import "./i18n"

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
