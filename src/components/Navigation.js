import React, { Component } from 'react';

export default class Navigation extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
	        <nav id="sidebar">

	        	<div id="dismiss">
	                <i className="glyphicon glyphicon-arrow-left"></i>
	            </div>

	            <div className="sidebar-header">
	                <h3>Collapsible Sidebar</h3>
	            </div>

	            <ul className="list-unstyled components">
	                <li onClick={ ( e ) => { this.props.setView( "home" ) } } className="active">Home</li>
	                <li onClick={ ( e ) => { this.props.setView( "search" ) } } >Search</li>
	            </ul>
	        </nav>
		);
	}
}