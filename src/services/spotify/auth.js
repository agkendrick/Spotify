import request from 'request-promise';

export default function getToken() {

    return request("https://h2n3o11n2j.execute-api.us-east-1.amazonaws.com/prod")
		   .then( ( body ) => {
					return {
						"success": true, 
						"body": body
					};
		    })
		    .catch( ( error ) => {
					return {
						"success": false,
						"message": error
					}
		    });
}