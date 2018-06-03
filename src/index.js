import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import storePromise from './store';
import fetchToken from './store/auth/actions';
import $ from 'jquery';

storePromise()
	.then( store => {

		store.dispatch( fetchToken() )
			.then( () => {
				ReactDOM.render(
				<Provider store={ store }>
					<App />
				</Provider>, 
				document.getElementById('root'));
			})
			.then( () => {

		          $('.list-unstyled').on('click','li', function(){
		             $(this).addClass('active').siblings().removeClass('active');
		          });

		          $('#dismiss').on('click', function () {
		            console.log("clicking..");
		              $('#sidebar, #content').toggleClass('active');
		          });

		          $('#sidebarCollapse').on('click', function () {
		              $('#sidebar, #content').toggleClass('active');
		          });
			});
	});
	
registerServiceWorker();
