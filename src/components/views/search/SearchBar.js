import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount(){
    	this.searchInput.focus();
	}
	
	render() {
		return (
			<div id="search">
				<input id="search-input" ref={ (input) => { this.searchInput = input; } } type="search" placeholder="Start typing..." onKeyUp={ e => this.props.onKeyUp(e) } />
			</div>
		);
	}
}