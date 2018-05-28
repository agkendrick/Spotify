import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/search/actions';
import * as artistActions from '../store/artist/actions';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

class Search extends Component {
	constructor( props ) {
		super( props );
		this.onResultSelect = this.onResultSelect.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
	}

	onTextChange( event ) {
		let val = event.target.value;
		let search = this.props.searchArtist;

		if ( val === "" ) {
			return this.props.expireSearchResults();
		}

		clearTimeout( event.target.dataset.timer );

		if( event.keyCode === 13) {
			search( val );
		} else {
			if ( event.target.value.length !== 0 ) {
				event.target.dataset.timer = setTimeout( () => { search( val ); }, 500 );
			}
		}
	}

	onResultSelect( id ) {
		this.props.fetchArtist( id );
		this.props.viewChange( "artist-detail" );
	}

	render() {

		return (
			<div id="searchWrapper">
			
				<SearchBar onKeyUp={ this.onTextChange } />
				<SearchResults results={ this.props.results } onClick={ this.onResultSelect } />

			</div>
		);
	}
	
}

function mapStateToProps( state ) {
	return {
		"results": state.search.results,
		"loading": state.search.loading,
		"history": state.search.history
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
		"expireSearchResults": () => {
			dispatch( searchActions.expireSearchResults() );
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Search );