import React, { Component } from 'react';
import styled from 'styled-components';

const Bio = styled.div`
	{
		margin-top: 15px;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: .015em;
		font-weight: 200;
		padding: 0px 20px;
	}
`;

export default class About extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { bio } = this.props;
		
		return (
			<Bio>
				<h2>Biography</h2>
				<p>{ bio }</p>
			</Bio>
		);
	}
}