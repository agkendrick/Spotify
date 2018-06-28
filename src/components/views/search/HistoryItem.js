import React, { Component } from 'react';

export default class HistoryItem extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { name, type, id, onClick } = this.props;
		
		return (
			<div className="history-item" onClick={ (e) => { onClick( id, name, type ) } }>
				<h1 className="link">{ name }</h1>
				<span>{ type }</span>
			</div>			
		);
	}
}