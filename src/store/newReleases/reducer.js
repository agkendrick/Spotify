import { FETCH_NEW_RELEASES_REQUEST, FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_ERROR } from './actionTypes';

const initialState = {
	"loading": false,
	"error": null,
	"info": null,
	"view": "new-releases" 
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case FETCH_NEW_RELEASES_REQUEST:
			return {...state, "loading": true};
		case FETCH_NEW_RELEASES_SUCCESS:
			return {...state, "loading": false, "info": action.payload };
		case FETCH_NEW_RELEASES_ERROR: 
			return {...state, "error": action.payload };
		default:
			return state;
	}
}