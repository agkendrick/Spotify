import React, { Component } from 'react';

export default class Tile extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { img, id, type, onClick, name:itemName } = this.props;
		const name = type === "album" ? itemName[0] : itemName;

		return (
			<div className="result link" onClick={ (e) => { onClick( id, name, type ) } }>
				<img src={ img } alt={ name } />
				<h5>{ name }</h5>
				<span>{ type === "album" ? itemName[1] : null }</span>	
			</div>	
		);
	}
}