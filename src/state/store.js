import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import artist from './artist/reducer';
import newReleases from './newReleases/reducer';
import search from './search/reducer';
import home from './home/reducer';
import auth from './auth/reducer';

export default async() => {

	const reducer = combineReducers({
		artist,
		newReleases,
		search,
		home,
		auth
	});

	const middleware = applyMiddleware(thunkMiddleware);

	const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware );

	return store;
}