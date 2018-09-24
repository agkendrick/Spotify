import React, { Component } from 'react';
import SearchResult from '../SearchResult';

export default class NewReleases extends Component {
	constructor( props ) {
		super( props )
	}

	onItemSelect( id ) {
		const { onItemSelect: selectItem } = this.props;
		selectItem(id);
		window.scroll(0, 0);
	}

	render() {

		const { newReleases } = this.props;
		const items = newReleases === null ? null : newReleases.map((info) =>
		{
			const { name: { artist: artistName, album: albumName }, id, img } = info;
			return <SearchResult key={ id } type={ "album" } id={ id } name={ [ artistName, albumName ] } img={ img } onClick={ () => { this.onItemSelect( id ) } } />
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