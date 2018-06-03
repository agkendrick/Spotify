import request from 'request-promise';

export function getArtist( name ) {

	const config = {
		"url": "https://ws.audioscrobbler.com/2.0/",
		"method": "GET",
		json: true,
		qs: {
			"artist": name,
			"api_key": "41134702145d5a6b9a3f7b2818f651cc",
			"method": "artist.getinfo",
			"format": "json"
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
					"message": error
				}
		    });

}