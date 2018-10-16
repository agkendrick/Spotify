import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearSearchResults, addToHistory, changeSubView } from '../state/search/actions';
import { searchArtist } from '../state/search/operations';
import { fetchArtist } from '../state/artist/operations';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResultsView';
import SearchHistory from '../components/SearchHistoryView';
import SubNav from '../components/SubNav';
import SubViewWrapper from '../components/SubViewWrapper'

class Search extends Component {
	constructor( props ) {
		super( props );
		this.onItemSelect = this.onItemSelect.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		props.clearSearchResults();
		if( props.view !== "history" ){
			props.changeSubView( "history" );
		}
	}

	onTextChange( event ) {

		const { searchArtist, clearSearchResults, changeSubView } = this.props;

		let { keyCode, target: { value, dataset: { timer } } } = event;

		changeSubView( "results" );

		clearTimeout( timer );

		if( keyCode === 13) {
			searchArtist( value );
		} else {

			if ( value.length === 0 ) {
				clearSearchResults();
				changeSubView( "history" );
				return;
			}
			timer = setTimeout( () => { searchArtist( value ); }, 500 );
		}
	}

	onItemSelect( id, name, type, history ) {
		
		const { addToHistory, fetchArtist, changeSubView } = this.props;

		if( type === "artist" ) {
			fetchArtist( id );
		}
		if( history ) {
			addToHistory( { "name": name, "id": id, "type": type } );
		}
		changeSubView("history");

	}
	
	render() {

		const { view, results, history, changeSubView } = this.props;
		
		const subViews = { 
			"results": {
				component: <SearchResults results={ results } onClick={ this.onItemSelect } />,
				display: "RESULTS"
			},
			"history": {
				component: <SearchHistory history={ history } onClick={ this.onItemSelect } />,
				display: "HISTORY"
			}
		};

		return (
			<div>
				<SearchBar onKeyUp={ this.onTextChange } />
				<SubViewWrapper> 
					<SubNav	subViews={ subViews } view={ view } changeSubView={ changeSubView } />
					{ subViews[view].component }
				</SubViewWrapper>
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
			dispatch( searchArtist( text ) );
		},
		"fetchArtist": id => {
			dispatch( fetchArtist( id ) );
		},
		"clearSearchResults": () => {
			dispatch( clearSearchResults() );
		},
		"addToHistory": ( artistInfo ) => {
			dispatch( addToHistory( artistInfo ) );
		},
		"changeSubView": ( view ) => {
			dispatch( changeSubView( view ) );
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Search );