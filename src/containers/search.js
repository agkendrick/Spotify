import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/search/actions';
import * as artistActions from '../store/artist/actions';
import SearchResults from '../components/SearchResults';

class Search extends Component {
	constructor( props ) {
		super( props );
		this.onResultSelect = this.onResultSelect.bind(this);
	}

	onTextChange( event ) {
		this.props.onTextChange( event.target.value );
	}

	onResultSelect( id ) {
		this.props.onResultSelect( id );
		this.props.viewChange( "artistDetail" );
	}

	render() {

		return (
			<div id="wrapper">
			
				<div id="branding">
					<span id="wikiText">Artist Search</span>	
				</div>

				<div id="search">

					<input type="search" placeholder="search spotify" onChange={ e => this.onTextChange(e) }>
					</input>

				</div>

				<div id="results">
					<SearchResults results={ this.props.results } onClick={ this.onResultSelect } />
				</div>

			</div>
		);
	}
	
}

function mapStateToProps( state ) {
	return {
		"results": state.search.results,
		"loading": state.search.loading
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		"onTextChange": text => {
			dispatch( searchActions.searchArtist( text ) );
		},
		"onResultSelect": id => {
			dispatch( artistActions.fetchArtist( id ) );
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Search );