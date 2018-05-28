import React, { Component } from 'react';
import '../css/App.css';
import Search from '../containers/search';
import Home from '../containers/home';
import ArtistDetail from '../containers/artistDetail';
import Navigation from './Navigation';
import CollapseButton from './CollapseButton';


export default class App extends Component {
	constructor( props ) {
		super( props );
		this.views = { 
			"home": <Home setView={ ( view ) => { this.setView( view ) } } />, 
			"artist-detail": <ArtistDetail />,
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
			<div className="App wrapper">
				
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