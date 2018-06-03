import React, { Component } from 'react';
import Tile from '../Tile';

export default class ArtistResults extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const listItems = this.props.results == null ? null : this.props.results.map( ( result ) =>
			<Tile key={ result.id } name={ result.name } id={ result.id } img={ result.img } type={ "artist" } onClick={ this.props.onClick } />
			);

		return (
		<div id="artist-results">
			{ listItems }
		</div>
		);
	}
}