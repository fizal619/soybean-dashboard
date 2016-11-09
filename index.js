import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'

import { createStore } from 'redux';
import map from './reducers';
import { POSITION } from './actions';

import App from './components/App';

let store = createStore(map)

const mapStateToProps=(state)=>{
  return { position: state.position }
}

const AppWrap = connect(
  mapStateToProps
)(App);

const render = () => ReactDOM.render(
	<Provider store={store}>
  	<AppWrap />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(render);
render();
