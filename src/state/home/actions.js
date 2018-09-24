import { CHANGE_HOME_VIEW } from './actionTypes';

export function setSubView( view ) {
	return {
		"type": CHANGE_HOME_VIEW,
		"view": view
	};
}