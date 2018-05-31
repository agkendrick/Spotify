import React, { Component } from 'react';

export default class View extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const buttonText = {
			"artist-results": "ARTISTS",
			"history": "RECENT SEARCHES"
		};
		const views = this.props.views;
		const view = this.props.view;
		const active = this.props.active;

		const navItems = this.props.views === null ? null : active.map( ( key ) => {
			return <div key={ key } className={ "view-selector " + ( view === key ? "active" : "" ) } onClick={ ( e ) => { this.props.onViewChange( key ) } }> { buttonText[key] } </div>
		} );

		return (
			<div className="view"> 
				{ navItems }
				{ views[view] }
			</div>
		);
	}
}