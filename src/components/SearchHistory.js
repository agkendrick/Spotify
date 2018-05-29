import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

export default class SearchHistory extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		console.log("history %o", this.props.history);
		let keys =  Object.keys( this.props.history );
		let history = this.props.history;

		const items = keys.map( ( key ) => {
			return <HistoryItem key={ key } name={ history[key] } aId={ key } onClick={ this.props.onItemSelect } />
		});

		return (
			<div id="history">
				{ items }
			</div>	
		);
	}
}