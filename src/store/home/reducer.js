import { CHANGE_HOME_VIEW } from './actionTypes';

const initialState = {
	"view": "new-releases"
};

export default function reducer( state = initialState, action = {} ) {
	switch( action.type ) {
		case CHANGE_HOME_VIEW:
			return { ...state, "view": action.view };
		default:
			return state;
	}
}