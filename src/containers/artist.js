import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as artistActions from '../store/artist/actions';
import View from '../components/views/View';
import About from'../components/views/artist/About';
import RelatedArtists from'../components/views/artist/RelatedArtists';

class Artist extends Component {
	constructor( props ) {
		super( props );
		this.onItemSelect = this.onItemSelect.bind( this );
		this.props.changeView( "about" );
	}

	onItemSelect( id, name, type ) {
		if ( type === "artist" ) {
			this.props.getArtistDetails( id );
		}
		
		this.props.changeView( "about" );
		this.props.setView( type );
	}

	componentWillUnmount() {
		document.getElementById("bg").style.backgroundImage = "none";
		document.getElementById("sidebar").style.backgroundColor = "black";
	}

	render() {

		document.getElementById("bg").style.backgroundImage = "linear-gradient(180deg, rgba(0,0,0,.2) 10%, rgba(15,15,15,1) 60%), url(" + this.props.img + ")";
		document.getElementById("sidebar").style.backgroundColor = "rgba(0,0,0,.5)";
		
		const views = {
			"about": <About bio={ this.props.bio } />,
			"related": <RelatedArtists related={this.props.related.items } loading={ this.props.related.loading } fetch={ this.props.fetchRelatedArtists } id={ this.props.id } onClick={ this.onItemSelect } />
		};
		const active = Object.keys( views );

		return (
			<div id="artist-view">
				<h4>{ Number(this.props.followers).toLocaleString() } MONTHLY LISTENERS</h4>
				<h1>{ this.props.name }</h1>
				<View view={ this.props.view } views={ views } active={ active } onViewChange={ this.props.changeView } />
			</div>
		);
	}
}

function mapStateToProps( state ) {
	return {
		"loading": state.artist.loading,
		"view": state.artist.view,
		"bio": state.artist.info.bio,
		"related": state.artist.related,
		"name": state.artist.info.name,
		"followers": state.artist.info.followers,
		"img": state.artist.info.img,
		"id": state.artist.info.id
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		"getArtistDetails": ( id ) => dispatch( artistActions.fetchArtist( id ) ),
		"changeView": ( view ) => dispatch( artistActions.changeView( view ) ),
		"fetchRelatedArtists": ( id ) => dispatch( artistActions.fetchRelatedArtists( id ) )
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Artist );