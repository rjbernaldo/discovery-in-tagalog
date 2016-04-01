import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { fromJS } from 'immutable'

// import * as reducers from 'reducers'
// import routes from 'routes'
import todoApp from 'reducers'
import App from 'components/App'

let initialState = window.__INITIAL_STATE__;

Object
	.keys(initialState)
	.forEach(key => {
		initialState[key] = fromJS(initialState[key]);
	});

// const reducer = combineReducers(reducers);
// const store = createStore(reducer, initialState);
const store = createStore(todoApp, initialState);

render(
	<Provider store={ store }>
		<App />
		// <Router children={ routes } history={ browserHistory } />
	</Provider>,
	document.getElementById('react-view')
)
