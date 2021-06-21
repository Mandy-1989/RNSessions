/**
 *
 * LoginScreen saga
 *
 */

import * as api from 'api';
import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export function* authenticateUser({ payload }) {
    try {
        const userDetails = yield call(api.login.userLogin, payload);
        yield put({ type: LOGIN_SUCCESS, userDetails });
    } catch (error) {
        yield put({ type: LOGIN_FAILURE, error: 'Something Went Wrong' });
    }
}

export default function* loginScreenSaga() {
    yield takeLatest(LOGIN_REQUEST, authenticateUser);
}