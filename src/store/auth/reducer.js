import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_ERROR } from './actionTypes';

const initialState = {
	"token": null,
	"fetching": false,
	"error": null
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case FETCH_TOKEN_REQUEST:
			return { ...state, "fetching": true };
		case FETCH_TOKEN_SUCCESS:
			return { ...state, "token": action.payload, "fetching": false };
		case FETCH_TOKEN_ERROR:
			return { ...state, "token": null, "fetching": false };
		default:
			return state;
	}
}