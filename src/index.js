import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import storePromise from './store';
import fetchToken from './store/auth/actions';

storePromise()
	.then( store => {

		store.dispatch( fetchToken() )
			.then( () => {
				ReactDOM.render(
				<Provider store={ store }>
					<App />
				</Provider>, 
				document.getElementById('root'));
			});

	});
	
registerServiceWorker();
