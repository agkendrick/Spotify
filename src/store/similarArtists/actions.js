import { FETCH_SIMILAR_ARTISTS_REQUEST, FETCH_SIMILAR_ARTISTS_SUCCESS, FETCH_SIMILAR_ARTISTS_ERROR } from './actionTypes';

function fetchSimilarArtistsRequest() {
	return {
		type: FETCH_SIMILAR_ARTISTS_REQUEST
	};
}

function fetchSimilarArtistsSuccess( similarArtistsInfo ) {
	return {
		type: FETCH_SIMILAR_ARTISTS_SUCCESS,
		payload: similarArtistsInfo 
	};
}

function fetchSimilarArtistsError( error ) {
	return {
		type: FETCH_SIMILAR_ARTISTS_ERROR,
		payload: error
	};
}

export function fetchSimilarArtists( artistId ) {
	return async ( dispatch, getState ) => {

	};
}