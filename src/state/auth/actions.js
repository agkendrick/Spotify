import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_ERROR } from './actionTypes';

export function fetchTokenRequest() {
	return {
		"type": FETCH_TOKEN_REQUEST
	};
}

export function fetchTokenSuccess( token ) {
	return {
		"type": FETCH_TOKEN_SUCCESS,
		"payload": token
	};
}

export function fetchTokenError( error ) {
	return {
		"type": FETCH_TOKEN_ERROR,
		"payload": error
	};
}