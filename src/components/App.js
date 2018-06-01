import React, { Component } from 'react';
import Navigation from './nav/Navigation';
import CollapseButton from './nav/CollapseButton';
import Search from '../containers/search';
import Home from '../containers/home';
import Artist from '../containers/artist';


export default class App extends Component {
	constructor( props ) {
		super( props );
		this.views = { 
			"home": <Home setView={ ( view ) => { this.setView( view ) } } />, 
			"artist": <Artist />,
			"search": <Search viewChange={ ( view ) => { this.setView( view ) } } /> 
		};
		this.state = { "view": "home" }
		this.setView = this.setView.bind(this);
	}

	setView( view ) {
		this.setState( (prevState ) => { return { "view": view } } );
	}

	render() {

		const view = this.views[this.state.view];

		return (
			<div id="bg">
				
				<Navigation setView={ this.setView } />

				<div id="content" className="">
					<CollapseButton />
		        	{ view } 
		        </div>

		        <div className="overlay" />
	    	</div>
		)
	}
}