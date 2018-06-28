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
		this.setBackground = this.setBackground.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
		this.bg = React.createRef();
		this.state = { "view": "home", "navActive": true, "background": null };
	}

	setView( view ) {
		const newState = { "view": view };

		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

		if ( w < 768 && this.state.navActive ) 
		{
			newState.navActive = false; 
		}

		this.setState( ( prevState ) => { return newState } );
	}

	setBackground( url ) {
		this.setState( ( prevState ) => {
			return { "background": url };
		} ); 
	}

	toggleNav( active ) {
		this.setState( ( prevState ) => { return { "navActive": active } } );
	}

	render() {
		
		const { view, navActive, background } = this.state;
		const views = { 
			"home": <Home setView={ this.setView } />, 
			"artist": <Artist setBackground={ this.setBackground } setView={ this.setView } />,
			"search": <Search viewChange={ this.setView } /> 
		};

		const bg = view === "artist" ? "linear-gradient(180deg, rgba(0,0,0,.2) 10%, rgba(15,15,15,1) 60%), url(" + background + ")" : "none";

		return (
			<div ref={ this.bg } id="bg" style={ {backgroundImage: bg} }>
				
				<Navigation artistLoaded={ background } view={ view } isNavActive={ navActive } toggle={ this.toggleNav } setView={ this.setView } />

				<div id="content" className={ navActive ? "" : "active" }>
					<CollapseButton toggle={ this.toggleNav } />
		        	{ views[view] } 
		        </div>

		        <div className="overlay" />
	    	</div>
		)
	}
}