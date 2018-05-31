import React, { Component } from 'react';

export default class Navigation extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
	        <nav id="sidebar" className="active">

	        	<div id="dismiss">
	                <i className="glyphicon glyphicon-arrow-left"></i>
	            </div>

	            <div className="sidebar-header">
	                <h3>Collapsible Sidebar</h3>
	            </div>

	            <ul className="list-unstyled components">
	                <li onClick={ ( e ) => { this.props.setView( "home" ) } } className="active link"><i className="fa fa-home"/>Home</li>
	                <li onClick={ ( e ) => { this.props.setView( "search" ) } } className="link"><i className="fa fa-search"/>Search</li>
	            </ul>
	        </nav>
		);
	}
}