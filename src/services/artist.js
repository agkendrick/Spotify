import axios from 'axios';

let token = "";

export function getArtist( id ) {
	 
	return axios({
		"method": "get",
		"url": "https://api.spotify.com/v1/artists/" + id,
		"headers": { "Authorization": token }

	}).then( res => res.data );

}