import React, { Component } from 'react';
import Tile from '../Tile';

export default class NewReleases extends Component {
	constructor( props ) {
		super( props )
	}

	render() {

		const { onClick, data } = this.props;
		const items = data === null ? null : data.map( ( info ) => 
		{
			const { name: { artist: artistName, album: albumName }, id, img } = info;
			return <Tile key={ id } type={ "album" } id={ id } name={ [ artistName, albumName ] } img={ img } onClick={ onClick } />
		});
		
		return (
			<div id="new-releases">
				<h1>New albums & singles</h1>
				<div id="new-releases-items">
					{ items }
				</div>
			</div>
		);
	}
}