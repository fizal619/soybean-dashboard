/* global window, document */
/* eslint no-render-return-value: 0, jsx-filename-extension: 0 */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import counter from './reducers';
import {  } from './actions';


/* eslint-disable no-underscore-dangle */
const store = createStore(counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
