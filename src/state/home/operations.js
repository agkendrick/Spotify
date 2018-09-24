import { setSubView } from './actions';
import { fetchNewReleases } from '../newReleases/operations';
import { fetchArtist } from '../artist/operations';

export function initialize() {
    return fetchNewReleases();
}

export function selectNewRelease( artistId ) {
    return fetchArtist(artistId);
}

export function changeSubView( view ) {
    return async (dispatch, getState) => {

        const state = getState();
        loadSubViewData(view, state, dispatch);
        return dispatch(setSubView(view));

    }
}

function loadSubViewData(view, state, dispatch) {

}