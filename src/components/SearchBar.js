import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div id="search">
				<input type="search" placeholder="Start typing..." onKeyUp={ e => this.props.onKeyUp(e) } />
			</div>
		);
	}
}