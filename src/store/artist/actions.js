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
			"name": "Band of Horses",
			"followers": 10000,
			"id": artistId,
			"img": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332"
		};
		dispatch( fetchArtistSuccess( testInfo ) );
	};
}
