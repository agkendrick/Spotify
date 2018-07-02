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

		const { getArtistDetails, changeView, setView } = this.props;

		if ( type === "artist" ) {
			getArtistDetails( id );
		}
		
		changeView( "about" );
		setView( type );
	}

	componentDidUpdate() {
		const { img, setBackground } = this.props;

		setBackground( img );
	}

	render() {

		const { id, bio, name, view, followers, fetchRelatedArtists, related: { items, loading }, changeView } = this.props;
		const views = {
			"about": <About bio={ bio } />,
			"related": <RelatedArtists related={ items } loading={ loading } fetch={ fetchRelatedArtists } id={ id } onClick={ this.onItemSelect } />
		};
		const active = Object.keys( views );

		return (
			<div id="artist-view">
				<h4>{ Number(followers).toLocaleString() } MONTHLY LISTENERS</h4>
				<h1>{ name }</h1>
				<View view={ view } views={ views } active={ active } onViewChange={ changeView } />
			</div>
		);
	}
}

function mapStateToProps( state ) {
	
	const { artist: { loading, view, related, info: { bio, name, followers, img, id} }} = state;

	return {
		loading,
		view,
		related,
		bio: bio,
		name: name,
		followers: followers,
		img: img,
		id: id
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