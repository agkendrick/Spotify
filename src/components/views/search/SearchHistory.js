import React, { Component } from 'react';
import HistoryItem from './HistoryItem';

export default class SearchHistory extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { history, onClick } = this.props;
		const keys =  Object.keys( history );

		const items = keys.map( ( key ) => {
			return <HistoryItem key={ key } name={ history[key].name } type={ history[key].type } id={ key } onClick={ onClick } />
		});

		return (
			<div id="history">
				{ items }
			</div>	
		);
	}
}