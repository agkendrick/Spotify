import React, { Component } from 'react';

export default class View extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const buttonText = {
			"artist-results": "ARTISTS",
			"history": "RECENT SEARCHES",
			"new-releases": "NEW RELEASES",
			"about": "ABOUT",
			"related": "RELATED ARTISTS"
		};

		const { views, view, active, onViewChange } = this.props;

		const navItems = views === null ? null : active.map( ( key ) => {
			return <div key={ key } className={ "view-selector " + ( view === key ? "active" : "" ) } onClick={ ( e ) => { onViewChange( key ) } }> { buttonText[key] } </div>
		} );

		return (
			<div className="view"> 
				{ navItems }
				{ views[view] }
			</div>
		);
	}
}