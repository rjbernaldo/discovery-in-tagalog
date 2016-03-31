// import React from 'react';
// import { render } from 'react-dom';
// import { Router } from 'react-router';
// import { browserHistory } from 'react-router';
// import routes from 'routes';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import * as reducers from 'reducers';
// import { fromJS } from 'immutable';
//
// let initialState = window.__INITIAL_STATE__;
//
// Object
// 	.keys(initialState)
// 	.forEach(key => {
// 		initialState[key] = fromJS(initialState[key]);
// 	});
//
// const reducer = combineReducers(reducers);
// const store = createStore(reducer, initialState);
//
// render(
// 	<Provider store={ store }>
// 		<Router children={ routes } history={ browserHistory } />
// 	</Provider>,
// 	document.getElementById('react-view')
// );

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { fromJS } from 'immutable';

import * as reducers from 'reducers';
import routes from 'routes';
// import todoApp from './reducers';
// import App from './components/App';

// let store = createStore(todoApp);
let initialState = window.__INITIAL_STATE__;

Object
	.keys(initialState)
	.forEach(key => {
		initialState[key] = fromJS(initialState[key]);
	});

const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState);
console.log(store);
render(
	<Provider store={ store }>
		<Router children={ routes } history={ browserHistory } />
	</Provider>,
	document.getElementById('react-view')
);
