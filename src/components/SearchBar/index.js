import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
	background-color: #282828;
	
	input {
		width: 100%;
		min-height: 100px;
		padding: 25px;
		font-size: 50px;
		font-weight: 600;
		border: none;
		background-color: transparent;
		color: white;
	}

	input:focus {
		outline: none;
		caret-color: #7386D5;
	}
`;

const SearchText = styled.div`
	position: relative;
    color: white;
    text-align: left;
    top: 20px;
    padding-left: 25px;
`;

export default class SearchBar extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount(){
    	this.searchInput.focus();
	}
	
	render() {

		const { onKeyUp } = this.props;

		return (
			<StyledSearch>
				<SearchText>Search for an artist</SearchText>
				<input 
					ref={ (input) => { this.searchInput = input; } } 
					type="search" 
					placeholder="Start typing..." 
					onKeyUp={ e => onKeyUp(e) } />
			</StyledSearch>
		);
	}
}