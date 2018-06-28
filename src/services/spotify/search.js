import request from 'request-promise';

export function searchArtist( artistName, token ) {
	
	const config = {
		"url": "https://api.spotify.com/v1/search",
		"method": "GET",
		"headers": {
			"Authorization": "Bearer " + token
		},
		"json": true,
		"qs": {
			"type": "artist",
			"q": decodeURIComponent( artistName )
		}
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