import { put, takeLatest, fork, call, all } from 'redux-saga/effects';
import {getEmployees} from '../services/employeesService';

function* fetchEmployees() {
    try {
        const payload = yield call(getEmployees);
        yield put({type: "EMPL_CALL_SUCCESS", payload})
    } catch (error) {
        yield put({type: "EMPL_CALL_FAILURE", error})
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