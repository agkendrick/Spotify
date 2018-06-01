import React, { Component } from 'react';

export default class NewRelease extends Component {
	constructor( props ) {
		super( props )
	}

	render() {

		return (
			<div onClick={ (e) => { this.props.onClick( this.props.data.id ) } } className="result link col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
				<img src={ this.props.data.img } alt={ this.props.data.albumName } />
				<h5>{ this.props.data.albumName }</h5>
				<span>{ this.props.data.artistName }</span>
			</div>
		);
	}
}