import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/search/actions';
import * as artistActions from '../store/artist/actions';
import SearchBar from '../components/SearchBar';
import SearchView from '../components/SearchView';

class Search extends Component {
	constructor( props ) {
		super( props );
		this.onResultSelect = this.onResultSelect.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.changeView = this.changeView.bind(this);
		props.clearSearchResults();
		this.changeView( "history" );
	}

	onTextChange( event ) {
		let val = event.target.value;
		let search = this.props.searchArtist;

		this.changeView( "results" );

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

	onResultSelect( id, name ) {
		this.props.fetchArtist( id );
		this.props.viewChange( "artist-detail" );

		if ( name ) {
			this.props.addToHistory( { "name": name, "id": id } );
		}
	}

	changeView( view ) {
		this.props.changeView( view );
	}

	render() {
		return (
			<div id="searchWrapper">
				<SearchBar onKeyUp={ this.onTextChange } />
				<SearchView history={ this.props.history } results={ this.props.results } onSelect={ this.onResultSelect } view={ this.props.view } onViewChange={ this.changeView } />
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