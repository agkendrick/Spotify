 import * as artistService from '../../services/spotify/artist';
 import * as lastfmService from '../../services/lastfm/artist';
 import { setSubView, fetchArtistError, fetchArtistRequest, fetchArtistSuccess,
fetchRelatedArtistsError, fetchRelatedArtistsRequest, fetchRelatedArtistsSuccess } from './actions';

export function changeSubView( view ) {
	return async (dispatch, getState) => {

		const state = getState();
		loadSubViewData(view, state, dispatch);
		return dispatch( setSubView(view) );

	}
}

export function selectRelatedArtist( artistId ) {
	return async ( dispatch, getState ) => {
		dispatch(fetchArtist(artistId));
		return dispatch( setSubView( "about" ) );
	}
}

export function fetchRelatedArtists( artistId ) {
	return async ( dispatch, getState ) => {
		
		dispatch( fetchRelatedArtistsRequest() );
		
		const token = getState().auth.token;
		
		if ( !token ) return dispatch( fetchRelatedArtistsError( "No auth token" ) );
		
		const response = await artistService.getRelatedArtists( artistId, token );
		
		if ( !response.success ) return dispatch( fetchRelatedArtistsError( response.message ) );
		
		return dispatch( fetchRelatedArtistsSuccess( response.body, artistId ) );
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
		
		return dispatch( fetchArtistSuccess( { "spotifyInfo": response.body, "bio": lastfmRes.body.artist.bio } ) );
	};
}

function loadSubViewData( view, state, dispatch ){
	const artistId = state.artist.info.id;
	
	switch (view) {
		case "related-artists":
			const relatedArtistId = state.artist.related.artistId;
			if (artistId !== relatedArtistId && artistId != null) {
				return dispatch(fetchRelatedArtists(artistId));
			}
			break;
		default: return Promise.resolve();
	}
}
