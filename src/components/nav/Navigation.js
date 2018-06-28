import React, { Component } from 'react';

export default class Navigation extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { setView } = this.props;

		return (
	        <nav id="sidebar" className="active">

	        	<div id="dismiss">
	                <i className="glyphicon glyphicon-arrow-left"></i>
	            </div>

	            <div className="sidebar-header">
	                <i className="fa fa-spotify fa-5" aria-hidden="true"></i>
	            </div>

	            <ul className="list-unstyled components">
	                <li onClick={ ( e ) => { setView( "home" ) } } className="active link"><i className="fa fa-home"/>Home</li>
	                <li onClick={ ( e ) => { setView( "search" ) } } className="link"><i className="fa fa-search"/>Search</li>
	            </ul>
	        </nav>
		);
	}
}