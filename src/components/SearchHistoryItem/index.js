import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class SearchHistoryItem extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { name, type, id, onClick } = this.props;
		return (
			<Link to={ "/artist" }>
				<div className="history-item" onClick={ (e) => { onClick( id, name, type ) } }>
					<h1 className="link">{ name }</h1>
					<span>{ type }</span>
				</div>
			</Link>
		);
	}
}