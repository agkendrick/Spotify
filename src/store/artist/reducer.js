import { FETCH_ARTIST_REQUEST, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_ERROR, CHANGE_ARTIST_VIEW,
	FETCH_RELATED_ARTISTS_REQUEST, FETCH_RELATED_ARTISTS_SUCCESS, FETCH_RELATED_ARTISTS_ERROR
 } from './actionTypes';

const initialState = {
	"loading": false,
	"error": null,
	"info": {
		"id": null,
		"name": null,
		"bio": null,
		"followers": null,
		"img": null
	},
	"view": "about",
	"related": {
		"loading": false,
		"items": []
	}
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case FETCH_ARTIST_REQUEST:
			return {...state, "loading": true};
		case FETCH_ARTIST_SUCCESS:
			return {...state, "loading": false, "info": extractArtistInfo( action.payload ) };
		case FETCH_ARTIST_ERROR: 
			return {...state, "loading": false, "error": action.payload };
		case CHANGE_ARTIST_VIEW:
			return { ...state, "view": action.view };
		case FETCH_RELATED_ARTISTS_REQUEST:
			return {...state, "related": { "loading": true } };
		case FETCH_RELATED_ARTISTS_SUCCESS:
			return {...state, "related": { "loading": false, "items": extractRelatedArtists( action.payload ) } };
		case FETCH_RELATED_ARTISTS_ERROR: 
			return {...state, "related": { "loading": false, "error": action.payload, "items": null } };
		default:
			return state;
	}
}


function extractArtistInfo( data ) {

	const extractedInfo = {
		"id": data.spotifyInfo.id,
		"name": data.spotifyInfo.name,
		"bio": data.bio.content,
		"followers": data.spotifyInfo.followers.total,
		"img": data.spotifyInfo.images[0].url
	};

	return extractedInfo;
}

function extractRelatedArtists( response ) {
	const items = response.artists;
	const extracted = [];

	items.forEach( function( item ) {
		const release = {
			"id": item.id,
			"img": item.images[0].url,
			"name": item.name
		};

		extracted.push( release );
	} );

	return extracted;
}