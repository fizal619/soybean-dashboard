import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'

require('./css/style.css')
require('./css/leaflet.css')

import { createStore } from 'redux';
import map from './reducers';
import { POSITION, incrementOne } from './actions';

import App from './components/App';

let store = createStore(
	map,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()
)

const mapStateToProps=(state)=>{
  return { position: state.position }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const AppWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const render = () => ReactDOM.render(
	<Provider store={store}>
  	<AppWrap />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(render);
render();
