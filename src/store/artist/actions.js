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

// eslint-disable-next-line
function fetchArtistError( error ) {
	return {
		type: FETCH_ARTIST_ERROR,
		payload: error
	};
}

export function fetchArtist( artistId ) {
	return async ( dispatch, getState ) => {
		
		dispatch( fetchArtistRequest() );

		let testInfo = {
			"name": "Future",
			"followers": 10000,
			"id": artistId,
			"img": "https://i.scdn.co/image/37fc67d0a0fa433b704faf0bd0a9bc0ce4b3261b"
		};
		dispatch( fetchArtistSuccess( testInfo ) );
	};
}
