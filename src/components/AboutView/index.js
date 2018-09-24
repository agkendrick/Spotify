import React, { Component } from 'react';

export default class About extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { bio } = this.props;
		
		return (
			<div id="bio">
				<h2>Biography</h2>
				<p>{ bio }</p>
			</div>
		);
	}
}