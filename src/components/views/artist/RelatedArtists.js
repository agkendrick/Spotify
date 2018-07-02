import React, { Component } from 'react';
import Tile from '../Tile';

export default class RelatedArtists extends Component {
	constructor( props ) {
		super( props );
		this.props.fetch( this.props.id );
	}

	render() {

		const { related, onClick } = this.props;
		
		const listItems = related == null ? null : related.map( ( item ) => {
			const { id, name, img } = item;
			return <Tile key={ id } name={ name } id={ id } img={ img } onClick={ onClick } type={ "artist" } />
		} );

		return (
			<div id="related-artists">
				{ listItems }
			</div>
		);
	}
}