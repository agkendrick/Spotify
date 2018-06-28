import request from 'request-promise';

export default function getToken() {

    return request("https://www.aaronkendrick.io/spotify")
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