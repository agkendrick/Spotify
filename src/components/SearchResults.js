import React, { Component } from 'react';

export default class SearchResults extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const listItems = this.props.results == null ? null : this.props.results.map( ( result ) =>
			<li class="searchResult" value={ result.id } onClick={ (e) => { this.props.onClick( result.id ) } }>{result.name}</li>
			);

		return (
			<ul>
				{ listItems }
			</ul>
		);
	}
}