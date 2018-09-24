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
			const items = [];
			action.payload.artists.items.forEach( ( item ) => {
				if (item.images.length < 1) {
					return;
				};
				const { name, id, images: [img] } = item;
				items.push({ id, name, img: img.url})
			} );
			return {...state, "loading": false, "results": items };
		case SEARCH_ARTIST_ERROR: 
			return {...state, "loading": false, "error": action.payload };
		case CLEAR_SEARCH_RESULTS:
			return { ...state, "results": null };
		case ADD_TO_HISTORY:
			const { id, name, type } = action.payload;
			return { ...state, "history": { ...state.history, [id]: { "name" : name, "type": type } } };
		case CHANGE_SEARCH_VIEW:
			return { ...state, "view": action.payload }
		default:
			return state;
	}
}