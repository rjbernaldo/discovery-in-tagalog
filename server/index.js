import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import todoApp from 'reducers'
// import App from 'components/App'

const app = Express()

app.use(handleRender)

function handleRender(req, res) {
	const store = createStore(todoApp)
	const html = renderToString(
		<Provider store={ store }>
			// <App />
		</Provider>
	)

	const initialState = store.getState()

	res.send(renderFullPage(html, initialState))
}

function renderFullPage(html, initialState) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Tuklas</title>
			</head>
			<body>
				<div id="react-view">${ html }</div>

				<script type="application/javascript">
					window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) };
				</script>
				<script type="application/javascript" src="/bundle.js"></script>
			</body>
		</html>
	`
}

export default app
