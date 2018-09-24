import { searchArtistRequest, searchArtistError, searchArtistSuccess} from './actions';
import * as searchService from '../../services/spotify/search';

export function searchArtist(artistName) {
    return async (dispatch, getState) => {

        dispatch(searchArtistRequest());

        const token = getState().auth.token;

        if (!token) return dispatch(searchArtistError("No auth token"));

        const response = await searchService.searchArtist(artistName, token);

        if (!response.success) return dispatch(searchArtistError(response.message));

        dispatch(searchArtistSuccess(response.body));

    }
}