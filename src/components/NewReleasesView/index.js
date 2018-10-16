import React, { Component } from 'react';
import SearchResult from '../SearchResult';
import styled from 'styled-components';

const StyledNewReleases = styled.div`
	color: white;

	h1 {
		font-size: 36px;
		line-height: 44px;
		letter-spacing: -.005em;
		font-weight: 600;
	}

	h5 {
		font-size: 14px;
		line-height: 20px;
		letter-spacing: .015em;
		font-weight: 400;
		color: #fff;
		margin-bottom: 5px;
	}

	span {
		font-size: 14px;
		line-height: 20px;
		letter-spacing: .015em;
		font-weight: 200;
		color: hsla(0,0%,100%,.6);
	}
`;

const NewReleaseItems = styled.div`
	height: 100%;
	width: 100%;
`;

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
			return <SearchResult 
					key={ id } 
					type={ "album" } 
					id={ id } 
					name={ [ artistName, albumName ] } 
					img={ img } 
					onClick={ () => { this.onItemSelect( id ) } }
					view={ "newReleases"} />
		});
		
		return (
			<StyledNewReleases>
				<h1>New albums & singles</h1>
				<NewReleaseItems>
					{ items }
				</NewReleaseItems>
			</StyledNewReleases>
		);
	}
}