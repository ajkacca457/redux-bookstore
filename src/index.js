import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import { books } from './data/appdata';

const mystore = createStore(reducers, books);

ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
