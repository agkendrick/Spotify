import getToken from '../../services/spotify/auth';
import { fetchTokenRequest, fetchTokenError, fetchTokenSuccess } from './actions';


export default function fetchToken() {

	return async ( dispatch, getState ) => {
		dispatch( fetchTokenRequest() );

		const response = await getToken();

		if( !response.success ) {
			return dispatch( fetchTokenError( response.message ) );
		}

		let token = JSON.parse(response.body);

		dispatch( fetchTokenSuccess( token ) );
	}

}