import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import artist from './artist/reducer';
import newReleases from './newReleases/reducer';
import search from './search/reducer';
import similarArtists from './similarArtists/reducer';

export default async() => {

	const reducer = combineReducers({
		artist,
		newReleases,
		search,
		similarArtists
	});

	const middleware = applyMiddleware(thunkMiddleware);

	const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware );
	
	// const unsubscribe = store.subscribe( () => console.log( store.getState() ) );

	// unsubscribe();

	return store;
}