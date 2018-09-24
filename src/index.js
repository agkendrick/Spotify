import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import storePromise from './state/store';
import fetchToken from './state/auth/operations';

storePromise()
	.then( store => {

		store.dispatch( fetchToken() )
			.then( () => {
				ReactDOM.render(
				<Provider store={ store }>
					<Router history={createHistory()}>
						<App />
					</Router>
				</Provider>, 
				document.getElementById('root'));
			});

	});
	
registerServiceWorker();
