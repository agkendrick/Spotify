import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class SearchResult extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { img, type, onClick, name:itemName } = this.props;
		const name = type === "album" ? itemName[0] : itemName;
		const bg = "url(" + img + ")";

		return (
			<Link to={ "/artist" }>
				<div className="search-result link" onClick={ ()=>{ onClick(); } }>
					<div style={ {backgroundImage: bg} }/>
					<div className={ "search-result-info" }>
						<h5>{ name }</h5>
						<span>{ type === "album" ? itemName[1] : null }</span>	
					</div>
				</div>
			</Link>
		);
	}
}