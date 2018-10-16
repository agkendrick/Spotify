import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.div.attrs({
	type: "button"
})`
	width: 10%;
	visibility: ${props => props.show ? `visible` : `hidden`};
	color: white;
	background-color: transparent;
	border: 1px solid white;
	margin-top: 8px;
	margin-bottom: 8px;
	margin-left: 8px;
	padding: 6px 12px;
	border-radius: 4px;

	:hover {
		background-color: white;
		color: black;
	}
`;

export default class CollapseButton extends Component {
	constructor( props ) {
		super( props );
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.toggle( true )
	}
	
	render() {

		const { show } = this.props;
		
		return (
			<Button onClick={ this.onClick } show={ show }>
				<i className="glyphicon glyphicon-align-left"></i>
			</Button>
		);
	}
}