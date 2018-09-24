import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount(){
    	this.searchInput.focus();
	}
	
	render() {

		const { onKeyUp } = this.props;

		return (
			<div id="search">
				<div id="search-text">Search for an artist</div>
				<input id="search-input" ref={ (input) => { this.searchInput = input; } } type="search" placeholder="Start typing..." onKeyUp={ e => onKeyUp(e) } />
			</div>
		);
	}
}