import getToken from '../../services/my/auth';
import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_ERROR } from './actionTypes';

function fetchTokenRequest() {
	return {
		"type": FETCH_TOKEN_REQUEST
	};
}

function fetchTokenSuccess( token ) {
	return {
		"type": FETCH_TOKEN_SUCCESS,
		"payload": token
	};
}

function fetchTokenError( error ) {
	return {
		"type": FETCH_TOKEN_ERROR,
		"payload": error
	};
}

export default function fetchToken() {

	return async ( dispatch, getState ) => {
		dispatch( fetchTokenRequest() );

		const response = await getToken();

		if( !response.success ) {
			return dispatch( fetchTokenError( response.message ) );
		}

		dispatch( fetchTokenSuccess( response.body ) );
	}

}