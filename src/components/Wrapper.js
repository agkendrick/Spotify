import React, { Component } from 'react';
import Search from '../containers/search';
import Home from '../containers/home';

export default class Wrapper extends Component {
	constructor( props ) {
		super( props );
		this.state = { "view": "home" }
	}

	setView( view ) {
		this.setState( { "view": view } );
	}

	render() {


		return (
			<div className="App">
	        	<Search viewChange={ setView } />  
	    	</div>
		)
	}
}