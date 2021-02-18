import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// reducers
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    authReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));