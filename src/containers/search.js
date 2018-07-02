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
		this.onItemSelect = this.onItemSelect.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.changeView = this.changeView.bind(this);
		props.clearSearchResults();
		this.changeView( "history" );
	}

	onTextChange( event ) {

		console.log(event.target);
		const { searchArtist, clearSearchResults, changeView } = this.props;

		let { keyCode, target: { value, dataset: { timer } } } = event;

		this.changeView( "artist-results" );

		clearTimeout( timer );

		if( keyCode === 13) {
			searchArtist( value );
		} else {

			if ( value.length === 0 ) {
				clearSearchResults();
				changeView( "history" );
				return;
			}
			timer = setTimeout( () => { searchArtist( value ); }, 500 );
		}
	}

	onItemSelect( id, name, type ) {
		
		const { addToHistory, fetchArtist, viewChange } = this.props;

		if( type === "artist" ) {
			fetchArtist( id );
		}

		addToHistory( { "name": name, "id": id, "type": type } );
		viewChange( type );
	}

	changeView( view ) {
		this.props.changeView( view );
	}

	render() {

		const { results, history, view } = this.props;
		const anyResults = results === null ? 0 : results.length;
		const views = {
			"artist-results": <ArtistResults results={ results } onClick={ this.onItemSelect } />, 
			"history": <SearchHistory history={ history } onClick={ this.onItemSelect } />
		};

		const active = anyResults ? [ "history", "artist-results"] : [ "history" ];

		return (
			<div id="search-view">
				<SearchBar onKeyUp={ this.onTextChange } />
				<View view={ view } views={ views } active={ active } onViewChange={ this.changeView } />
			</div>
		);
	}
	
}

function mapStateToProps( state ) {
	const { search: { results, loading, history, view }} = state;

	return {
		results,
		loading,
		history,
		view
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