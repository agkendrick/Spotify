import React, { Component } from 'react';
import SearchResult from '../SearchResult';

export default class RelatedArtists extends Component {
	constructor( props ) {
		super( props );
	}
	
	render() {

		const { related, onClick } = this.props;
		
		const listItems = related == null ? null : related.map( ( item ) => {
			const { id, name, img } = item;
			return <SearchResult key={ id } name={ name } id={ id } img={ img } onClick={ () => onClick(id, name, "artist") } type={ "artist" } />
		} );

		return (
			<div id="related-artists">
				{ listItems }
			</div>
		);
	}
}