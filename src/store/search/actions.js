import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR } from './actionTypes';

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

export function searchArtist( artistName ) {
	return async ( dispatch, getState ) => {

		dispatch( searchArtistRequest() );
		console.log("searchArtist called with input: " + artistName);

		setTimeout( () => {
			console.log("returning success payload...");
			dispatch( searchArtistSuccess( ["drake", "joe", "snoop dogg", "scarface" ] ) );
			}, 5000)
	}
}