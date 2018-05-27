import React, { Component } from 'react';
import Search from '../containers/search';
import Home from '../containers/home';
import ArtistDetail from '../containers/artistDetail';

export default class Wrapper extends Component {
	constructor( props ) {
		super( props );
		this.views = [ "home", "artist-detail" ];
		this.state = { "view": "home" }
		this.setView = this.setView.bind(this);
	}

	setView( view ) {
		console.log("Setting view to: " + view);
		this.setState( { "view": view } );
	}

	render() {

		const view = this.state.view === "home" ? <Home setView={ this.setView } /> : <ArtistDetail />;

		return (
			<div className="App">
	        	<Search viewChange={ this.setView } />
	        	{ view } 
	    	</div>
		)
	}
}