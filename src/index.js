import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import storePromise from './state/store';
import fetchToken from './state/auth/operations';
import { injectGlobal } from 'styled-components';

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

				injectGlobal`
					@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

					body, html {
					margin: 0;
					padding: 0;
					font-family: 'Poppins', sans-serif;
					background-color: #0f0f0f;;
					text-align: center;
					height: 100%;
					width: 100%;
					}

					p {
						font-family: 'Poppins', sans-serif;
						font-size: 1.1em;
						font-weight: 300;
						line-height: 1.7em;
						color: #999;
					}

					a, a:hover, a:focus {
						color: inherit;
						text-decoration: none;
						transition: all 0.3s;
					}

					#root {
						height: 100%;
						width: 100%;
					}
				`;
			});
	});
	
registerServiceWorker();
