import React, { Component } from 'react';
import Tile from '../Tile';

export default class NewReleases extends Component {
	constructor( props ) {
		super( props )
	}

	render() {

		const onClick = this.props.onClick;
		const items = this.props.data === null ? null : this.props.data.map( ( info ) => 
		{
			const names = [info.name.artist, info.name.album];
			return <Tile key={ info.id } type={ "album" } id={ info.id } name={ names } img={ info.img } onClick={ onClick } />
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