import { FETCH_NEW_RELEASES_REQUEST, FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_ERROR } from './actionTypes';

const initialState = {
	"loading": false,
	"error": null,
	"items": null 
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case FETCH_NEW_RELEASES_REQUEST:
			return {...state, "loading": true};
		case FETCH_NEW_RELEASES_SUCCESS:
			return {...state, "loading": false, "items": extractNewReleases( action.items ) };
		case FETCH_NEW_RELEASES_ERROR: 
			return {...state, "error": action.payload };
		default:
			return state;
	}
}

function extractNewReleases( response ) {
	const items = response.albums.items;
	const extracted = [];

	items.forEach( function( item ) {
		const release = {
			"id": item.artists[0].id,
			"img": item.images[0].url,
			"name": {
				"artist": item.artists[0].name,
				"album": item.name
			}
		};

		extracted.push( release );
	} );

	return extracted;
}