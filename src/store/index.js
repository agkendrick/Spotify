import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import artist from './artist/reducer';
import newReleases from './newReleases/reducer';
import search from './search/reducer';
import similarArtists from './similarArtists/reducer';
import * as actions from './artist/actions';

export default async() => {

	const reducer = combineReducers({
		artist,
		newReleases,
		search,
		similarArtists
	});

	const middleware = applyMiddleware(thunkMiddleware);
	const store = createStore(reducer, middleware);

	console.log( store.getState() );

	const unsubscribe = store.subscribe( () => console.log( store.getState() ) );

	store.dispatch( actions.fetchArtist( "drake" ) );

	unsubscribe();

	return store;
}