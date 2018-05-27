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

		dispatch( fetchNewReleasesRequest() );
		console.log("fetchNewReleases called ...");

		setTimeout( () => {
			console.log("returning success payload...");
			
			dispatch( fetchNewReleasesSuccess( [
				{"artistName": "drake", "albumName": "Views", "id": 1}, 
				{"artistName": "joe", "albumName": "I Wanna Know", "id": 2}, 
				{ "artistName": "snoop dogg", "albumName": "The Doggfather", "id": 3}, 
				{ "artistName": "scarface", "albumName": "The Fix", "id": 4} ]
			 ) );
		}, 5000)
	};
}
