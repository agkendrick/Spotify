import React, { Component } from 'react';

export default class ArtistResult extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const name = this.props.name;
		const img = this.props.img;
		const id = this.props.artistId;
		const onClick = this.props.onClick;

		return (
			<div className="result link col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2" onClick={ (e) => { onClick( id, name, "Artist" ) } }>
				<img src={ img } alt="" />
				<h5> { name } </h5>
			</div>	
		);
	}
}