import React, { Component } from 'react';

export default class HistoryItem extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div className="history-item" onClick={ (e) => { this.props.onClick( this.props.aId ) } }>
				<span>{ this.props.name }</span>
			</div>			
		);
	}
}