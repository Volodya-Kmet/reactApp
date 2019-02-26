import {createStore, combineReducers, applyMiddleware} from 'redux';

import authReducer from './redusers/authReducer';
import messageReducer from './redusers/messageReducer';
import employeesReducer from './redusers/employeesReducer';
import authMiddleware from './middleware';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(combineReducers({authReducer, messageReducer, employeesReducer}), {}, applyMiddleware(authMiddleware, sagaMiddleware));

sagaMiddleware.run(rootSaga);