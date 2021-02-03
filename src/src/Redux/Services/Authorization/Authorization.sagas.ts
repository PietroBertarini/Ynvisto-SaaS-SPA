import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import {
  EAuthActions, ILoginStart,
} from './Authorization.types';
import { getUserFailure, getUserSuccess } from './Authorization.actions';
import { IApiError } from '../../api.types';
import User from '../../../Classes/User/User.class';
import { authenticate, refreshTokenCall } from './Authorization.api';

export function* loginStart() {
  yield takeLatest<ILoginStart>(
    EAuthActions.LOGIN_START,
    loginAsync,
  );
}

export function* refreshToken() {
  yield takeLatest<ILoginStart>(
    EAuthActions.REFRESH_TOKEN,
    refreshTokenAsync,
  );
}

export function* loginAsync(login :ILoginStart) {
  const loginData = login.payload;
  const apiResponse = yield authenticate(loginData);
  const user = apiResponse as User;
  if (user?.userName) {
    yield put(getUserSuccess(user));
  } else {
    const apiError = apiResponse as IApiError;
    yield put(getUserFailure(apiError));
  }
}

export function* refreshTokenAsync() {
  const apiResponse = yield refreshTokenCall();
  const user = apiResponse as User;
  if (user?.userName) {
    yield put(getUserSuccess(user));
  } else {
    const apiError = apiResponse as IApiError;
    yield put(getUserFailure(apiError));
  }
}

export function* authorizationSagas() {
  yield all([call(loginStart), call(refreshToken)]);
}
