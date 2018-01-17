import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

 export default (initialState) => {
	const enhancer = 
		applyMiddleware(
			thunkMiddleware,
			createLogger({ predicate: (getState, action) => __DEV__ })
		);
	
	
	return createStore(reducers, initialState, enhancer);
}
