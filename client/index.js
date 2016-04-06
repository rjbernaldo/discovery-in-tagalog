import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from 'reducers'
import App from 'components/App'

// const store = createStore(todoApp)
const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
)

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route path="/" component={ App }/>
		</Router>
	</Provider>,
	document.getElementById('root')
)
