import React, { Component } from 'react';

export default class HistoryItem extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div className="history-item" onClick={ (e) => { this.props.onClick( this.props.id, this.props.name, this.props.type ) } }>
				<h1 className="link">{ this.props.name }</h1>
				<span>{ this.props.type }</span>
			</div>			
		);
	}
}