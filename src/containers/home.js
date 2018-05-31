import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as newReleasesActions from '../store/newReleases/actions';
import * as artistActions from '../store/artist/actions';
import NewReleases from '../components/views/home/NewReleases';

class Home extends Component {
	
	constructor( props ) {
		super( props );
		this.onArtistSelect = this.onArtistSelect.bind(this);
		props.fetchNewReleases();
		
	}

	onArtistSelect( id ) {
		this.props.getArtistDetails( id );
		this.props.setView( "artist" );
	}

	render() {
		return (
			<div id="home-view">
				<NewReleases data={ this.props.newReleases } onClick={ this.onArtistSelect } />
			</div>
		);
	}
}

function mapStateToProps( state ) {
	return {
		"newReleases": state.newReleases.info
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		"getArtistDetails": ( id ) => dispatch( artistActions.fetchArtist( id ) ),
		"fetchNewReleases": () => dispatch( newReleasesActions.fetchNewReleases() ) 
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Home );

