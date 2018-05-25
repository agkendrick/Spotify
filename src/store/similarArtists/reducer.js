import { FETCH_SIMILAR_ARTISTS_REQUEST, FETCH_SIMILAR_ARTISTS_SUCCESS, FETCH_SIMILAR_ARTISTS_ERROR } from './actionTypes';

const initialState = {
	"loading": false,
	"error": null,
	"info": null 
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case FETCH_SIMILAR_ARTISTS_REQUEST:
			return {...state, "loading": true};
		case FETCH_SIMILAR_ARTISTS_SUCCESS:
			return {...state, "loading": false, "info": action.payload };
		case FETCH_SIMILAR_ARTISTS_ERROR: 
			return {...state, "error": action.payload };
		default:
			return state;
	}
}