import React, { Component } from 'react';
import SearchResults from '../components/SearchResults';
import SearchHistory from '../components/SearchHistory';

export default class SearchView extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const views = {
			"results": <SearchResults results={ this.props.results } onClick={ this.props.onSelect } />, 
			"history": <SearchHistory history={ this.props.history } onItemSelect={ this.props.onSelect } />
		}

		const view = this.props.view;

		return (
			<div id="searchView">
				<div className={ "viewSelect " + ( view === "results" ? "active" : "" ) } onClick={ ( e ) => { this.props.onViewChange( "results" ) } }> RESULTS </div>
				<div className={ "viewSelect " + ( view === "history" ? "active" : "" ) }  onClick={ ( e ) => { this.props.onViewChange( "history" ) } }> RECENT SEARCHES </div>
				{ views[view] }
			</div>
		);
	}
}