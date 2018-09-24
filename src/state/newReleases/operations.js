import { fetchNewReleasesRequest, fetchNewReleasesError, fetchNewReleasesSuccess} from './actions';
import { queryNewReleases } from '../../services/spotify/newReleases';

export function fetchNewReleases() {
    return async (dispatch, getState) => {

        dispatch(fetchNewReleasesRequest());

        const token = getState().auth.token;

        if (!token) {
            return dispatch(fetchNewReleasesError("No auth token"));
        }

        const response = await queryNewReleases(token);

        if (!response.success) {
            return dispatch(fetchNewReleasesError(response.message));
        }

        dispatch(fetchNewReleasesSuccess(response.body));
    };
}