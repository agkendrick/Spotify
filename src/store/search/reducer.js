import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, CLEAR_SEARCH_RESULTS, ADD_TO_HISTORY, CHANGE_SEARCH_VIEW } from './actionTypes';

const initialState = {
	"loading": false,
	"error": null,
	"results": null,
	"history": {},
	"view": "history"
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case SEARCH_ARTIST_REQUEST:
			return {...state, "loading": true};
		case SEARCH_ARTIST_SUCCESS:
			return {...state, "loading": false, "results": extractSearchResults( action.payload ) };
		case SEARCH_ARTIST_ERROR: 
			return {...state, "loading": false, "error": action.payload };
		case CLEAR_SEARCH_RESULTS:
			return { ...state, "results": null };
		case ADD_TO_HISTORY:
			return { ...state, "history": { ...state.history, [action.payload.id]: { "name" : action.payload.name, "type": action.payload.type } } };
		case CHANGE_SEARCH_VIEW:
			return { ...state, "view": action.payload }
		default:
			return state;
	}
}


function extractSearchResults( response ) {
	const items = response.artists.items;
	const extracted = [];

	items.forEach( function( item ) {
		if( item.images.length < 1 ) {
			return;	
		};
		const release = {
			"id": item.id,
			"img": item.images[0].url,
			"name": item.name
		};

		extracted.push( release );
	} );

	return extracted;
}