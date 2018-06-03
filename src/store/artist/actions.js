import { FETCH_ARTIST_REQUEST, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_ERROR, CHANGE_ARTIST_VIEW,
	FETCH_RELATED_ARTISTS_REQUEST, FETCH_RELATED_ARTISTS_SUCCESS, FETCH_RELATED_ARTISTS_ERROR
 } from './actionTypes';
 import * as artistService from '../../services/spotify/artist';
 import * as lastfmService from '../../services/lastfm/artist';

function fetchArtistRequest() {
	return {
		type: FETCH_ARTIST_REQUEST
	};
}

function fetchArtistSuccess( artistInfo ) {
	return {
		"type": FETCH_ARTIST_SUCCESS,
		"payload": artistInfo
	};
}

function fetchArtistError( error ) {
	return {
		"type": FETCH_ARTIST_ERROR,
		"payload": error
	};
}

function fetchRelatedArtistsRequest() {
	return {
		type: FETCH_RELATED_ARTISTS_REQUEST
	};
}

function fetchRelatedArtistsSuccess( relatedArtistsInfo ) {
	return {
		type: FETCH_RELATED_ARTISTS_SUCCESS,
		payload: relatedArtistsInfo 
	};
}

function fetchRelatedArtistsError( error ) {
	return {
		type: FETCH_RELATED_ARTISTS_ERROR,
		payload: error
	};
}

export function changeView( view ) {
	return {
		"type": CHANGE_ARTIST_VIEW,
		"view": view 
	}
}

export function fetchRelatedArtists( artistId ) {
	return async ( dispatch, getState ) => {

		dispatch( fetchRelatedArtistsRequest() );

		const token = getState().auth.token;

		if ( !token ) return dispatch( fetchRelatedArtistsError( "No auth token" ) );

		const response = await artistService.getRelatedArtists( artistId, token );

		if ( !response.success ) return dispatch( fetchRelatedArtistsError( response.message ) );
		
		dispatch( fetchRelatedArtistsSuccess( response.body ) );
	};
}

export function fetchArtist( artistId ) {
	return async ( dispatch, getState ) => {

		dispatch( fetchArtistRequest() );

		const token = getState().auth.token;

		if ( !token ) return dispatch( fetchArtistError( "No auth token" ) );

		const response = await artistService.getArtist( artistId, token );

		if ( !response.success ) return dispatch( fetchArtistError( response.message ) );

		const lastfmRes = await lastfmService.getArtist( response.body.name );

		dispatch( fetchArtistSuccess( { "spotifyInfo": response.body, "bio": lastfmRes.body.artist.bio } ) );
	};
}
