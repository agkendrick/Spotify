import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/search/actions';
import * as artistActions from '../store/artist/actions';
import View from '../components/views/View';
import SearchBar from '../components/views/search/SearchBar';
import ArtistResults from '../components/views/search/ArtistResults';
import SearchHistory from '../components/views/search/SearchHistory';

class Search extends Component {
	constructor( props ) {
		super( props );
		this.onArtistSelect = this.onArtistSelect.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.changeView = this.changeView.bind(this);
		props.clearSearchResults();
		this.changeView( "history" );
	}

	onTextChange( event ) {
		let val = event.target.value;
		let search = this.props.searchArtist;

		this.changeView( "artist-results" );

		clearTimeout( event.target.dataset.timer );

		if( event.keyCode === 13) {
			search( val );
		} else {

			if ( event.target.value.length === 0 ) {
				this.props.clearSearchResults();
				this.props.changeView( "history" );
				return;
			}
			event.target.dataset.timer = setTimeout( () => { search( val ); }, 500 );
		}
	}

	onArtistSelect( id, name, type ) {
		this.props.fetchArtist( id );
		this.props.viewChange( "artist" );

		if ( name ) {
			this.props.addToHistory( { "name": name, "id": id, "type": type } );
		}
	}

	changeView( view ) {
		this.props.changeView( view );
	}

	render() {
		const anyResults = this.props.results === null ? 0 : this.props.results.length;
		const views = {
			"artist-results": <ArtistResults results={ this.props.results } onClick={ this.onArtistSelect } />, 
			"history": <SearchHistory history={ this.props.history } onItemSelect={ this.onArtistSelect } />
		};

		const active = anyResults ? [ "history", "artist-results"] : [ "history" ];

		return (
			<div id="search-view">
				<SearchBar onKeyUp={ this.onTextChange } />
				<View view={ this.props.view } views={ views } active={ active } onViewChange={ this.changeView } />
			</div>
		);
	}
	
}

function mapStateToProps( state ) {
	return {
		"results": state.search.results,
		"loading": state.search.loading,
		"history": state.search.history,
		"view": state.search.view
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		"searchArtist": text => {
			dispatch( searchActions.searchArtist( text ) );
		},
		"fetchArtist": id => {
			dispatch( artistActions.fetchArtist( id ) );
		},
		"clearSearchResults": () => {
			dispatch( searchActions.clearSearchResults() );
		},
		"addToHistory": ( artistInfo ) => {
			dispatch( searchActions.addToHistory( artistInfo ) );
		},
		"changeView": ( view ) => {
			dispatch( searchActions.changeView( view ) );
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Search );