import React, { Component } from 'react';
import Navigation from './nav/Navigation';
import CollapseButton from './nav/CollapseButton';
import Search from '../containers/search';
import Home from '../containers/home';
import Artist from '../containers/artist';

export default class App extends Component {
	constructor( props ) {
		super( props );
		this.setView = this.setView.bind(this);
		this.state = { "view": "home" }
	}

	setView( view ) {
		this.setState( (prevState ) => { return { "view": view } } );
	}

	render() {

		const views = { 
			"home": <Home setView={ this.setView } />, 
			"artist": <Artist setView={ this.setView } />,
			"search": <Search viewChange={ this.setView } /> 
		};

		const view = views[this.state.view];

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