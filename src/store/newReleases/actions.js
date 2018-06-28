import { FETCH_NEW_RELEASES_REQUEST, FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_ERROR } from './actionTypes';
import { queryNewReleases } from '../../services/spotify/newReleases';

function fetchNewReleasesRequest() {
	return {
		"type": FETCH_NEW_RELEASES_REQUEST
	};
}

function fetchNewReleasesSuccess( response ) {
	return {
		"type": FETCH_NEW_RELEASES_SUCCESS,
		"items": response
	};
}

function fetchNewReleasesError( error ) {
	return {
		"type": FETCH_NEW_RELEASES_ERROR,
		"payload": error
	};
}

export function fetchNewReleases() {
	return async (dispatch, getState ) => {

		dispatch( fetchNewReleasesRequest() );

		const token = getState().auth.token;

		if ( !token ) {
			return dispatch( fetchNewReleasesError( "No auth token" ) );
		}

		const response = await queryNewReleases( token );

		if ( !response.success ) {
			return dispatch( fetchNewReleasesError( response.message ) );
		}

		dispatch( fetchNewReleasesSuccess( response.body ) );
	};
}
