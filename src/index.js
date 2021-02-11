import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import { books } from './data/appdata';
import Allreducers from './reducers/index';
import '@fortawesome/fontawesome-free/css/all.min.css';

const mystore = createStore(Allreducers, { books, filter: 'All' });

ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
