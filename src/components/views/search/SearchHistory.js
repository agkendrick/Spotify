import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

export default class SearchHistory extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const keys =  Object.keys( this.props.history );
		const history = this.props.history;

		const items = keys.map( ( key ) => {
			return <HistoryItem key={ key } name={ history[key].name } type={ history[key].type } id={ key } onClick={ this.props.onItemSelect } />
		});

		return (
			<div id="history">
				{ items }
			</div>	
		);
	}
}