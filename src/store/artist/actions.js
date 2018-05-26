import { FETCH_ARTIST_REQUEST, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_ERROR } from './actionTypes';

function fetchArtistRequest() {
	return {
		type: FETCH_ARTIST_REQUEST
	};
}

function fetchArtistSuccess( artistInfo ) {
	return {
		type: FETCH_ARTIST_SUCCESS,
		payload: artistInfo
	};
}

function fetchArtistError( error ) {
	return {
		type: FETCH_ARTIST_ERROR,
		payload: error
	};
}

export function fetchArtist( artistId ) {
	return async ( dispatch, getState ) => {
		
		console.log("fetchArtist id: " + artistId );
		dispatch( fetchArtistRequest() );

		let testInfo = {
			"name": "test",
			"bio": "Blah",
			"id": artistId
		};
		dispatch( fetchArtistSuccess( testInfo ) );
	};
}
