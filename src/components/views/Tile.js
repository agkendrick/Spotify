import React, { Component } from 'react';

export default class Tile extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const img = this.props.img;
		const id = this.props.id;
		const type = this.props.type;
		const name = type === "album" ? this.props.name[0] : this.props.name;
		const onClick = this.props.onClick;

		return (
			<div className="result link" onClick={ (e) => { onClick( id, name, type ) } }>
				<img src={ img } alt={ name } />
				<h5>{ name }</h5>
				<span>{ type === "album" ? this.props.name[1] : null }</span>	
			</div>	
		);
	}
}