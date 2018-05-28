import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_ERROR, EXPIRE_SEARCH_RESULTS } from './actionTypes';

const initialState = {
	"loading": false,
	"error": null,
	"results": null,
	"history": null
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case SEARCH_ARTIST_REQUEST:
			return {...state, "loading": true};
		case SEARCH_ARTIST_SUCCESS:
			return {...state, "loading": false, "results": action.payload };
		case SEARCH_ARTIST_ERROR: 
			return {...state, "loading": false, "error": action.payload };
		case EXPIRE_SEARCH_RESULTS:
			let history = state.history === null ? state.results : state.history.concat( state.results );
			return { ...state, "loading": false, "results": null, "history": history }
		default:
			return state;
	}
}