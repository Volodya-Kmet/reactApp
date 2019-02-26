import { put, takeLatest, fork, call, all } from 'redux-saga/effects';
import {getEmployees} from '../services/employeesService';

import {successEmployees, failEmployees} from "../actions/employeesAction";
import {showMessage} from "../actions/messageActions";

function* fetchEmployees({payload}) {
    const {offset, limit} = payload;
    try {
        const response = yield call(getEmployees, offset, limit);
        yield put(successEmployees(response))
    } catch (errorMes) {
        yield put(showMessage(errorMes));
        yield put(showMessage(failEmployees))
    }
}

function* actionWatcher () {
    yield takeLatest('EMPL_CALL_REQUEST', fetchEmployees);
}

export default function* rootSaga() {
    yield all([
        fork(actionWatcher)
    ])
}