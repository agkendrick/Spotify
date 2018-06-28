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
			const items = [];			
			action.items.albums.items.forEach( ( item ) => {
				const { artists: [artist], name, images: [img] } = item;
				items.push( { "id": artist.id, "img": img.url, "name": { "artist": artist.name, "album": name }} );
			});
			return {...state, "loading": false, "items": items };
		case FETCH_NEW_RELEASES_ERROR: 
			return {...state, "error": action.payload };
		default:
			return state;
	}
}