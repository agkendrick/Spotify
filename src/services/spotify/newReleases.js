import request from 'request-promise';

export function queryNewReleases( token ) {

	const config = {
		"uri": "https://api.spotify.com/v1/browse/new-releases?country=SE",
		"method": "GET",
		"headers": {
			"Authorization": "Bearer " + token
		},
		json: true
	};

    return request(config)
		   .then( ( body ) => {
				return {
					"success": true, 
					"body": body
				};
		    })
		    .catch( ( error ) => {
				return {
					"success": false,
					"message": error.error.error.message
				}
		    });
		};