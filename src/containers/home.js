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

		const { getArtistDetails, setView } = this.props;

		if ( type === "artist" || "album" ) {
			getArtistDetails( id );
		}
		setView( "artist" );
	}

	render() {

		const { newReleases, view, changeView } = this.props;

		const views = {
			"new-releases": <NewReleases data={ newReleases } onClick={ this.onItemSelect } />
		};
		const active = Object.keys( views );

		return (
			<div id="home-view">
				<View view={ view } views={ views } active={ active } onViewChange={ changeView } />		
			</div>
		);
	}
}

function mapStateToProps( state ) {

	const { newReleases: {items: newReleases}, home: { view }} = state;
	
	return {
		newReleases,
		view
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

