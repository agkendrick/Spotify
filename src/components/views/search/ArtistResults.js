import React, { Component } from 'react';
import Tile from '../Tile';

export default class ArtistResults extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const { results, onClick } = this.props;
		
		const listItems = results == null ? null : results.map( ( result ) => {
			const { id, name, img } = result;
			return <Tile key={ id } name={ name } id={ id } img={ img } type={ "artist" } onClick={ onClick } />
		});

		return (
		<div id="artist-results">
			{ listItems }
		</div>
		);
	}
}