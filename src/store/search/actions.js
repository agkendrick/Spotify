import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, CLEAR_SEARCH_RESULTS, ADD_TO_HISTORY, CHANGE_VIEW } from './actionTypes';

function searchArtistRequest() {
	return {
		type: SEARCH_ARTIST_REQUEST
	};
}

function searchArtistSuccess( searchResults ) {
	return {
		type: SEARCH_ARTIST_SUCCESS,
		payload: searchResults
	};
}

// eslint-disable-next-line
function searchArtistError( error ) {
	return {
		type: SEARCH_ARTIST_ERROR,
		payload: error
	};
}

export function addToHistory( artistInfo ) {
	return {
		type: ADD_TO_HISTORY,
		payload: artistInfo
	}
}

export function changeView( view ) {
	return {
		type: CHANGE_VIEW,
		payload: view
	}
}

export function clearSearchResults() {
	return {
		type: CLEAR_SEARCH_RESULTS
	}
}

export function searchArtist( artistName ) {
	return async ( dispatch, getState ) => {

		dispatch( searchArtistRequest() );

		if( !artistName ) {
			dispatch( searchArtistSuccess( null ) );
			return;
		}
		let img = "https://i.scdn.co/image/b414091165ea0f4172089c2fc67bb35aa37cfc55";

		dispatch( searchArtistSuccess( [
			{"name":"Drake", "id": 1, "img": img }, 
			{"name": "Joe", "id": 2, "img": img }, 
			{ "name": "Snoop Dogg", "id": 3, "img": img },
			{ "name": "Q-Tip", "id": 4, "img": img },
			{ "name": "Danny Brown", "id": 5, "img": img },
			{ "name": "Freddie Gibbs", "id": 6, "img": img },
			{ "name": "Scarface", "id": 7, "img": img } ] ) );
	}
}