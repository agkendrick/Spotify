import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, CLEAR_SEARCH_RESULTS, ADD_TO_HISTORY, CHANGE_VIEW } from './actionTypes';

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
			let info = action.payload == null ? null : action.payload
			return {...state, "loading": false, "results": info };
		case SEARCH_ARTIST_ERROR: 
			return {...state, "loading": false, "error": action.payload };
		case CLEAR_SEARCH_RESULTS:
			return { ...state, "results": null }
		case ADD_TO_HISTORY:
			return { ...state, "history": { ...state.history, [action.payload.id]: action.payload.name } }
		case CHANGE_VIEW:
			return { ...state, "view": action.payload }
		default:
			return state;
	}
}