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
			const { spotifyInfo: { id, name, followers: { total: followers }, images: [img] }, bio:{ content:bio } } = action.payload;
			return {...state, "loading": false, "info": { id, name, followers, "img": img.url, bio }};
		case FETCH_ARTIST_ERROR: 
			return {...state, "loading": false, "error": action.payload };
		case CHANGE_ARTIST_VIEW:
			return {...state, "view": action.view};
		case FETCH_RELATED_ARTISTS_REQUEST:
			return {...state, "related": { "loading": true }};
		case FETCH_RELATED_ARTISTS_SUCCESS:
			let items = [];
			action.payload.artists.forEach( ( item ) => {
				const { id, images: [img], name } = item;
				items.push({id, img: img.url, name});
			});
			return {...state, "related": { "loading": false, "items": items}};
		case FETCH_RELATED_ARTISTS_ERROR: 
			return {...state, "related": { "loading": false, "error": action.payload, "items": null}};
		default:
			return state;
	}
}