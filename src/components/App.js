import React, { Component } from 'react';
import Navigation from './nav/Navigation';
import CollapseButton from './nav/CollapseButton';
import Search from '../containers/search';
import Home from '../containers/home';
import Artist from '../containers/artist';
import $ from 'jquery';

export default class App extends Component {
	constructor( props ) {
		super( props );
		this.setView = this.setView.bind(this);
		this.state = { "view": "home" }
	}

	setView( view ) {
		this.setState( (prevState ) => { return { "view": view } } );

		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

		if ( w < 768 && $( '#sidebar').hasClass( "active") ) {
			$('#sidebar, #content').toggleClass('active');
		}
	}

	render() {

		const { view: v } = this.state;
		const views = { 
			"home": <Home setView={ this.setView } />, 
			"artist": <Artist setView={ this.setView } />,
			"search": <Search viewChange={ this.setView } /> 
		};

		const view = views[v];

		return (
			<div id="bg">
				
				<Navigation setView={ this.setView } />

				<div id="content">
					<CollapseButton />
		        	{ view } 
		        </div>

		        <div className="overlay" />
	    	</div>
		)
	}
}