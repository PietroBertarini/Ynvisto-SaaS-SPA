import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { fetchStocksFailure, fetchStocksSuccess } from './MyStocks.actions';
import api from '../../api';
import { EMyStocksTypes } from './MyStocks.types';

/**
 * Get the last call of action:FETCH_STOCKS_START, and start the @fetchStocksAsync.
 */
export function* fetchStocksStart() {
  yield takeLatest(
    EMyStocksTypes.FETCH_STOCKS_START,
    fetchStocksAsync,
  );
}

/**
 * Get the stocks calling the api.get, if get at least 1 stock, return a
 * action:FETCH_STOCKS_SUCCESS, if something fails, return FETCH_STOCKS_FAILED (return to reducer)
 * @param activePeriod: get the activePeriod from action.payload of FETCH_STOCKS_START.
 */
export function* fetchStocksAsync() {
  try {
    // in future, control the call api and use the persisted data.
    const response = yield call(api.get, 'portfolio/mystocks');
    yield put(fetchStocksSuccess(response.data));
  } catch (error) {
    yield put(fetchStocksFailure(error));
  }
}

export function* myStocksSagas() {
  yield all([call(fetchStocksStart)]);
}
