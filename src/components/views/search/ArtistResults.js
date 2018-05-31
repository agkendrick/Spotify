import React, { Component } from 'react';
import ArtistResult from './ArtistResult';

export default class ArtistResults extends Component {

	constructor( props ) {
		super( props )
	}

	render() {
		
		const listItems = this.props.results == null ? null : this.props.results.map( ( result ) =>
			<ArtistResult key={ result.id } name={ result.name } artistId={ result.id } img={ result.img } onClick={ this.props.onClick } />
			);

		return (
		<div id="artist-results">
			{ listItems }
		</div>
		);
	}
}