import React, { Component } from 'react';

export default class SearchResults extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const listItems = this.props.results == null ? null : this.props.results.map( ( result ) =>
			<li key={ result.id } className="searchResult" value={ result.id } onClick={ (e) => { this.props.onClick( result.id ) } }>{result.name}</li>
			);

		return (
		<div id="searchResults">
			<ul>
				{ listItems }
			</ul>
		</div>
		);
	}
}