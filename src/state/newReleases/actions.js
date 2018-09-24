import { FETCH_NEW_RELEASES_REQUEST, FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_ERROR } from './actionTypes';

export function fetchNewReleasesRequest() {
	return {
		"type": FETCH_NEW_RELEASES_REQUEST
	};
}

export function fetchNewReleasesSuccess( response ) {
	return {
		"type": FETCH_NEW_RELEASES_SUCCESS,
		"items": response
	};
}

export function fetchNewReleasesError( error ) {
	return {
		"type": FETCH_NEW_RELEASES_ERROR,
		"payload": error
	};
}
