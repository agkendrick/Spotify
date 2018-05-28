import React, { Component } from 'react';

export default class CollapseButton extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
							<i className="glyphicon glyphicon-align-left"></i>
							<span>Toggle Sidebar</span>
						</button>
					</div>
				</div>
			</nav>
		);
	}
}