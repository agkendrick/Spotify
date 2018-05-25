import { FETCH_NEW_RELEASES_REQUEST, FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_ERROR } from './actionTypes';

function fetchNewReleasesRequest() {
	return {
		type: FETCH_NEW_RELEASES_REQUEST
	};
}

function fetchNewReleasesSuccess( newReleasesInfo ) {
	return {
		type: FETCH_NEW_RELEASES_SUCCESS,
		payload: newReleasesInfo
	};
}

function fetchNewReleasesError( error ) {
	return {
		type: FETCH_NEW_RELEASES_ERROR,
		payload: error
	};
}

export function fetchNewReleases() {
	return async (dispatch, getState ) => {

	};
}
