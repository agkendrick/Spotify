import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import artist from './artist/reducer';
import newReleases from './newReleases/reducer';
import search from './search/reducer';
import similarArtists from './similarArtists/reducer';
import home from './home/reducer';

export default async() => {

	const reducer = combineReducers({
		artist,
		newReleases,
		search,
		similarArtists,
		home
	});

	const middleware = applyMiddleware(thunkMiddleware);

	const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware );
	
	// const unsubscribe = store.subscribe( () => console.log( store.getState() ) );

	// unsubscribe();

	return store;
}