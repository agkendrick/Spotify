import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import styled from 'styled-components';
import linkStyle from '../../style-utils/link';

const HistoryItem = styled.div`
	span {
		font-size: 11px;
		line-height: 16px;
		letter-spacing: .015em;
		font-weight: 200;
		color: hsla(0,0%,100%,.6);
		text-transform: uppercase;
		letter-spacing: .16em;
		display: block;
	}

	h1 {
		font-size: 28px;
		line-height: 36px;
		letter-spacing: -.005em;
		font-weight: 600;
		text-transform: none;
		color: #9a9a9a;
		padding: 0;
		width: 100%;
		margin-bottom: 2px;
		${ linkStyle() }
	}
	
	h1:hover {
		color: white;
	}
`;

export default class SearchHistoryItem extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { name, type, id, onClick } = this.props;
		return (
			<Link to={ "/artist" }>
				<HistoryItem onClick={ (e) => { onClick( id, name, type ) } }>
					<h1>{ name }</h1>
					<span>{ type }</span>
				</HistoryItem>
			</Link>
		);
	}
}