import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import counter from './reducers';
import {  } from './actions';

import App from './components/App';


const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
