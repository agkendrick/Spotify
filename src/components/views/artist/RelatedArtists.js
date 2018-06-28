import React, { Component } from 'react';
import Tile from '../Tile';

export default class RelatedArtists extends Component {
	constructor( props ) {
		super( props );
		this.props.fetch( this.props.id );
	}

	render() {

		const { related, onClick } = this.props;
		
		const listItems = related == null ? null : related.map( ( item ) =>
			<Tile key={ item.id } name={ item.name } id={ item.id } img={ item.img } onClick={ onClick } type={ "artist" } />
		);

		return (
			<div id="related-artists">
				{ listItems }
			</div>
		);
	}
}