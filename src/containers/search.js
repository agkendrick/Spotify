import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../store/search/actions';

class Search extends Component {
	constructor( props ) {
		super( props );
	}

	onTextChange( event ) {
		this.props.onTextChange( event.target.value );
	}

	render() {

		return (
			<div id="wrapper">
			
				<div id="branding">
					<span id="wikiText">Artist Search</span>	
				</div>

				<div id="search">

					<input type="search" placeholder="search spotify" value={ this.props.value } onChange={ e => this.onTextChange(e) }>
					</input>

				</div>

				<div id="results">
					
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
			dispatch( searchActions.searchArtist( text ) )
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Search );