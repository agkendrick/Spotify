import React, { Component } from 'react';
import Tile from '../Tile';

export default class RelatedArtists extends Component {
	constructor( props ) {
		super( props );
		this.props.fetch( this.props.id );
	}

	render() {
		const listItems = this.props.related == null ? null : this.props.related.map( ( related ) =>
			<Tile key={ related.id } name={ related.name } id={ related.id } img={ related.img } onClick={ this.props.onClick } type={ "artist" } />
		);

		return (
			<div id="related-artists">
				{ listItems }
			</div>
		);
	}
}