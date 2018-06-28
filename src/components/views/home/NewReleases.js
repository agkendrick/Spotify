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
			const { name, id, img } = info;
			const names = [name.artist, name.album];
			return <Tile key={ id } type={ "album" } id={ id } name={ names } img={ img } onClick={ onClick } />
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