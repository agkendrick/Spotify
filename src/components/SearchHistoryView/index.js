import React, { Component } from 'react';
import SearchHistoryItem from '../SearchHistoryItem';
import styled from 'styled-components';

const StyledHistory = styled.div`
	text-align: left;
`;

export default class SearchHistory extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { history, onClick } = this.props;
		const keys = Object.keys( history );

		const items = keys.map( ( key ) => {
			return <SearchHistoryItem 
					key={ key } 
					name={ history[key].name } 
					type={ history[key].type } 
					id={ key } 
					onClick={ onClick } />
		});

		return (
			<StyledHistory>
				{ items }
			</StyledHistory>	
		);
	}
}