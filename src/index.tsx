import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ReactGA from 'react-ga'

export const initGA = () => {
	ReactGA.initialize('UA-179274475-1')
}
export const GApageView = (
	page: string,
) => {
	ReactGA.pageview(page)
}
export const GAmodalView = (
	modal: string,
) => {
	ReactGA.modalview(modal)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
