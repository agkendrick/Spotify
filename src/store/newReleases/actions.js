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

// eslint-disable-next-line
function fetchNewReleasesError( error ) {
	return {
		type: FETCH_NEW_RELEASES_ERROR,
		payload: error
	};
}

export function fetchNewReleases() {
	return async (dispatch, getState ) => {

		dispatch( fetchNewReleasesRequest() );

		dispatch( fetchNewReleasesSuccess( [
			{"artistName": "Drake", "albumName": "Views", "id": 1, img: "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d"}, 
			{"artistName": "Joe", "albumName": "I Wanna Know", "id": 2, img: "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d"}, 
			{ "artistName": "Snoop Dogg", "albumName": "The Doggfather", "id": 3, img: "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d"}, 
			{ "artistName": "Scarface", "albumName": "The Fix", "id": 4, img: "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d"},
			{ "artistName": "OutKast", "albumName": "Stankonia", "id": 5, img: "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d"},
			{ "artistName": "Roc Marciano", "albumName": "Reloaded", "id": 6, img: "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d"},
			{ "artistName": "Kendrick Lamar", "albumName": "DAMN", "id": 7, img: "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d"} ]
		 ) );
	};
}
