import React, { Component } from 'react';

export default class NewRelease extends Component {
	constructor( props ) {
		super( props )
	}

	render() {
		return (
			<div onClick={ (e) => { this.props.onClick( this.props.data.id ) } } className="newRelease">
				<span>{ this.props.data.artistName }</span>
				<span>{ this.props.data.albumName }</span>
				<img src={ this.props.data.img } alt={ this.props.data.albumName } />
			</div>
		);
	}
}