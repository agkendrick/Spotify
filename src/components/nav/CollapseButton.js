import React, { Component } from 'react';

export default class CollapseButton extends Component {
	constructor( props ) {
		super( props );
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.toggle( true )
	}
	
	render() {

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" onClick={ this.onClick } id="sidebarCollapse" className="btn navbar-btn">
							<i className="glyphicon glyphicon-align-left"></i>
							<span>Toggle Sidebar</span>
						</button>
					</div>
				</div>
			</nav>
		);
	}
}