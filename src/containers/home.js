import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as newReleasesActions from '../store/newReleases/actions';
import * as homeActions from '../store/home/actions';
import * as artistActions from '../store/artist/actions';
import NewReleases from '../components/views/home/NewReleases';
import View from '../components/views/View';

class Home extends Component {
	
	constructor( props ) {
		super( props );
		this.onItemSelect = this.onItemSelect.bind(this);
		props.fetchNewReleases();
		
	}

	onItemSelect( id, name, type ) {
		if ( type === "artist" || "album" ) {
			this.props.getArtistDetails( id );
		}
		this.props.setView( "artist" );
	}

	render() {

		const views = {
			"new-releases": <NewReleases data={ this.props.newReleases } onClick={ this.onItemSelect } />
		};
		const active = Object.keys( views );

		return (
			<div id="home-view">
				<View view={ this.props.view } views={ views } active={ active } onViewChange={ this.props.changeView } />		
			</div>
		);
	}
}

function mapStateToProps( state ) {
	return {
		"newReleases": state.newReleases.items,
		"view": state.home.view
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		"getArtistDetails": ( id ) => dispatch( artistActions.fetchArtist( id ) ),
		"fetchNewReleases": () => dispatch( newReleasesActions.fetchNewReleases() ),
		"changeView": ( view ) => dispatch( homeActions.changeView( view ) )
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Home );

