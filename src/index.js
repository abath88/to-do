import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store'

import 'font-awesome/css/font-awesome.min.css';

import './styles/normalize.scss';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
