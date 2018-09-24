import { FETCH_ARTIST_REQUEST, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_ERROR, CHANGE_ARTIST_VIEW,
	FETCH_RELATED_ARTISTS_REQUEST, FETCH_RELATED_ARTISTS_SUCCESS, FETCH_RELATED_ARTISTS_ERROR
 } from './actionTypes';

export function fetchArtistRequest() {
	return {
		"type": FETCH_ARTIST_REQUEST
	};
}

export function fetchArtistSuccess( artistInfo ) {
	return {
		"type": FETCH_ARTIST_SUCCESS,
		"payload": artistInfo
	};
}

export function fetchArtistError( error ) {
	return {
		"type": FETCH_ARTIST_ERROR,
		"payload": error
	};
}

export function fetchRelatedArtistsRequest() {
	return {
		"type": FETCH_RELATED_ARTISTS_REQUEST
	};
}

export function fetchRelatedArtistsSuccess( relatedArtistsInfo, artistId ) {
	return {
		"type": FETCH_RELATED_ARTISTS_SUCCESS,
		"payload": relatedArtistsInfo,
		"artistId": artistId 
	};
}

export function fetchRelatedArtistsError( error ) {
	return {
		"type": FETCH_RELATED_ARTISTS_ERROR,
		"payload": error
	};
}

export function setSubView(view) {
	return {
		"type": CHANGE_ARTIST_VIEW,
		"view": view 
	}
}