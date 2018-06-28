import request from 'request-promise';

export function getArtist( id, token ) {

	const config = {
		"url": "https://api.spotify.com/v1/artists/" + id,
		"method": "GET",
		"headers": {
			"Authorization": "Bearer " + token
		},
		"json": true
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

}

export function getRelatedArtists( id, token ) {

	const config = {
		"url": "https://api.spotify.com/v1/artists/" + id + "/related-artists",
		"method": "GET",
		"headers": {
			"Authorization": "Bearer " + token
		},
		"json": true
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

}