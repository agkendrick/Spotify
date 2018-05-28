import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, EXPIRE_SEARCH_RESULTS } from './actionTypes';

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

function searchArtistError( error ) {
	return {
		type: SEARCH_ARTIST_ERROR,
		payload: error
	};
}

export function expireSearchResults() {
	return {
		type: EXPIRE_SEARCH_RESULTS
	}
}

export function searchArtist( artistName ) {
	return async ( dispatch, getState ) => {

		dispatch( searchArtistRequest() );
		console.log("searchArtist called with input: " + artistName);

		
		console.log("returning success payload...");
		dispatch( searchArtistSuccess( [{"name":"drake", "id": 1}, {"name": "joe", "id": 2}, 
			{ "name": "snoop dogg", "id": 3}, { "name": "scarface", "id": 4} ] ) );
	}
}