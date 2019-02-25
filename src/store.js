import {createStore, combineReducers, applyMiddleware} from 'redux';

import authReducer from './redusers/authReducer';
import messageReducer from './redusers/messageReducer';
import usersReducer from './redusers/usersReducer';
import authMiddleware from './middleware';

export default createStore(combineReducers({authReducer, messageReducer, usersReducer}), {}, applyMiddleware(authMiddleware));
