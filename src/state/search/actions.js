import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, CLEAR_SEARCH_RESULTS, ADD_TO_HISTORY, CHANGE_SEARCH_VIEW } from './actionTypes';

export function searchArtistRequest() {
	return {
		"type": SEARCH_ARTIST_REQUEST
	};
}
export function searchArtistSuccess( searchResults ) {
	return {
		"type": SEARCH_ARTIST_SUCCESS,
		"payload": searchResults
	};
}

export function searchArtistError( error ) {
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

export function changeSubView( view ) {
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