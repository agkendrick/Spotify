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
		
		console.log("fetchArtist id: %o", artistId );
		dispatch( fetchArtistRequest() );

		let testInfo = {
			"name": "Band of Horses",
			"followers": 10000,
			"id": artistId,
			"img": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903"
		};
		dispatch( fetchArtistSuccess( testInfo ) );
	};
}
