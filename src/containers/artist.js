import React, { Component } from 'react';
import { connect } from 'react-redux';

class Artist extends Component {
	constructor( props ) {
		super( props );
	}

	componentWillUnmount() {
		document.getElementById("bg").style.backgroundImage = "none";
		document.getElementById("sidebar").style.backgroundColor = "black";
	}

	render() {

		document.getElementById("bg").style.backgroundImage = "linear-gradient(180deg, rgba(0,0,0,.2) 10%, rgba(15,15,15,1) 60%), url(" + this.props.img + ")";
		document.getElementById("sidebar").style.backgroundColor = "rgba(0,0,0,.5)";

		return (
			<div id="artist-view">
				<h4>{ this.props.followers } MONTHLY LISTENERS</h4>
				<h1>{ this.props.name }</h1>
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