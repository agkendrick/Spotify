import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, CLEAR_SEARCH_RESULTS, ADD_TO_HISTORY, CHANGE_SEARCH_VIEW } from './actionTypes';
import * as searchService from '../../services/spotify/search';

function searchArtistRequest() {
	return {
		"type": SEARCH_ARTIST_REQUEST
	};
}

function searchArtistSuccess( searchResults ) {
	return {
		"type": SEARCH_ARTIST_SUCCESS,
		"payload": searchResults
	};
}

function searchArtistError( error ) {
	return {
		"type": SEARCH_ARTIST_ERROR,
		"payload": error
	};
}

export function addToHistory( artistInfo ) {
	return {
		"type": ADD_TO_HISTORY,
		"payload": artistInfo
	}
}

export function changeView( view ) {
	return {
		"type": CHANGE_SEARCH_VIEW,
		"payload": view
	}
}

export function clearSearchResults() {
	return {
		"type": CLEAR_SEARCH_RESULTS
	}
}

export function searchArtist( artistName ) {
	return async ( dispatch, getState ) => {

		dispatch( searchArtistRequest() );

		const token = getState().auth.token;

		if ( !token ) return dispatch( searchArtistError( "No auth token" ) );

		const response = await searchService.searchArtist( artistName, token );

		if ( !response.success ) return dispatch( searchArtistError( response.message ) );
		
		dispatch( searchArtistSuccess( response.body ) );

	}
}