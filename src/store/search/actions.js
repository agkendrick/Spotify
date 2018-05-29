import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, CLEAR_SEARCH_RESULTS, ADD_TO_HISTORY, CHANGE_VIEW } from './actionTypes';

function searchArtistRequest() {
	return {
		type: SEARCH_ARTIST_REQUEST
	};
}

function searchArtistSuccess( searchResults ) {
	return {
		type: SEARCH_ARTIST_SUCCESS,
		payload: searchResults
	};
}

// eslint-disable-next-line
function searchArtistError( error ) {
	return {
		type: SEARCH_ARTIST_ERROR,
		payload: error
	};
}

export function addToHistory( artistInfo ) {
	return {
		type: ADD_TO_HISTORY,
		payload: artistInfo
	}
}

export function changeView( view ) {
	return {
		type: CHANGE_VIEW,
		payload: view
	}
}

export function clearSearchResults() {
	return {
		type: CLEAR_SEARCH_RESULTS
	}
}

export function searchArtist( artistName ) {
	return async ( dispatch, getState ) => {

		dispatch( searchArtistRequest() );
		console.log("searchArtist called with input: " + artistName);

		if( !artistName ) {
			dispatch( searchArtistSuccess( null ) );
			return;
		}
		
		console.log("returning success payload...");
		dispatch( searchArtistSuccess( [{"name":"drake", "id": 1}, {"name": "joe", "id": 2}, 
			{ "name": "snoop dogg", "id": 3}, { "name": "scarface", "id": 4} ] ) );
	}
}