import React, { Component } from 'react';
import { connect } from 'react-redux';

class Artist extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div id="artist-view">
				<h2>{ this.props.name }</h2>
				<h3>Followers: { this.props.followers }</h3>
				<img src={ this.props.img } alt={ this.props.name } />
			</div>
		);
	}
}

function mapStateToProps( state ) {
	return {
		"name": state.artist.info.name,
		"followers": state.artist.info.followers,
		"img": state.artist.info.img
	};
}

function mapDispatchToProps( dispatch ) {
	return {};
}

export default connect( mapStateToProps, mapDispatchToProps )( Artist );