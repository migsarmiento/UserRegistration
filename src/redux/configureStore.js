import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {appReducers} from './reducers';
import {reducer as formReducer} from 'redux-form';

const combinedReducers = {
	appReducers,
	form: formReducer
};

export default function configureStore() {
	return createStore(combineReducers(combinedReducers))
};
