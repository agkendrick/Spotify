import React, { Component } from 'react';
import SearchResult from '../SearchResult';

export default class SearchResults extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const { results, onClick } = this.props;
		
		const listItems = results == null ? null : results.map( ( result ) => {
			const { id, name, img } = result;
			return <SearchResult key={ id } name={ name } id={ id } img={ img } type={ "artist" } onClick={ () => onClick(id, name, "artist", true) } />
		});

		return (
		<div id="search-results">
			{ listItems }
		</div>
		);
	}
}