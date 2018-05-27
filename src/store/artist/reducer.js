import { FETCH_ARTIST_REQUEST, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_ERROR } from './actionTypes';

const initialState = {
	"loading": false,
	"error": null,
	"info": null 
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case FETCH_ARTIST_REQUEST:
			return {...state, "loading": true};
		case FETCH_ARTIST_SUCCESS:
			let newState =  {...state, "loading": false, "info": action.payload };
			console.log("FetchArtistSuccess: %o", newState);
			return newState;
		case FETCH_ARTIST_ERROR: 
			return {...state, "loading": false, "error": action.payload };
		default:
			return state;
	}
}