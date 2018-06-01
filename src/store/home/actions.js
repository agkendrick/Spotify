import { CHANGE_HOME_VIEW } from './actionTypes';

export function changeView( view ) {
	return {
		"type": CHANGE_HOME_VIEW,
		"view": view
	};
}