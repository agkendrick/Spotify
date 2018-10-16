import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import styled, { css } from 'styled-components';
import linkStyle from '../../style-utils/link';

const StyledSearchResult = styled.div`
	padding: 15px;
	line-height: 20px;
	letter-spacing: .015em;
	font-weight: 400;
	color: white;
	width: 16.66666667%;
	height: 250px;
	margin-bottom: 25px;
	float: left;
	
	div:first-child {
		height: 80%;
		width: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position-x: center;
	}

	@media (max-width: 768px) {
		width: 100% !important;
		
		div:first-child {
			margin: 0 auto;
		}
	}
	
	${ linkStyle() }

	${ props => props.view === "newReleases" && css`
		color: white;
		span {
			display: block;
		}
	`}

	${ props => props.view === "relatedArtists" && css`
		margin-bottom: 40px;
		div {
			border-radius: 50%;
		}
	`}

	${ props => props.view === "searchResults" && css`
		margin-bottom: 40px;
		div {
			border-radius: 50%;
		}
	`}
`;

const Image = styled.div`
		background-image: url( ${ props => props.imgUrl } );
`;

export default class SearchResult extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { img, type, onClick, name:itemName, view } = this.props;
		const name = type === "album" ? itemName[0] : itemName;

		return (
			<Link to={ "/artist" }>
				<StyledSearchResult onClick={ onClick } view={ view }>
					<Image imgUrl={ img } />
					<div>
						<h5>{ name }</h5>
						<span>{ type === "album" ? itemName[1] : null }</span>	
					</div>
				</StyledSearchResult>
			</Link>
		);
	}
}