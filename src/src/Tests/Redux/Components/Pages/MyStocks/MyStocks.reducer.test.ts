import myStocksReducer from '../../../../../Redux/Services/MyStocks/MyStocks.reducer';
import { IMyStocksState } from '../../../../../Redux/Services/MyStocks/MyStocks.types';
import {
  fetchStocksFailure,
  fetchStocksRequest,
  fetchStocksSuccess,
} from '../../../../../Redux/Services/MyStocks/MyStocks.actions';
import { mockStock } from './MyStocks.mock';

const initialState : IMyStocksState = {
  stocks: [],
  isFetching: false,
  error: undefined,
};
test('Test MyStocks start fetch', () => {
  const newState = myStocksReducer(initialState, fetchStocksRequest());
  expect(newState.isFetching).toEqual(true);
});

test('Test MyStocks fetch (Daily Period) success', () => {
  let storedState = myStocksReducer(initialState, fetchStocksRequest());
  // check is fetch is started
  expect(storedState.isFetching).toEqual(true);
  storedState = myStocksReducer(initialState, fetchStocksSuccess(
    [mockStock, mockStock],
  ));
  // check if reducer has stored the state.
  expect(storedState.stocks.length).toEqual(2);
  // check if stored stocks the same as mock.
  expect(storedState.stocks[0]).toEqual(mockStock);
  // check if fetch is done.
  expect(storedState.isFetching).toEqual(false);
});

test('Test MyStocks fetch failed', () => {
  const newErrorMessage = 'New Error';
  let newState = myStocksReducer(initialState, fetchStocksRequest());
  // check is fetch is started
  expect(newState.isFetching).toEqual(true);
  newState = myStocksReducer(initialState, fetchStocksFailure(newErrorMessage));
  // check if state has stored error
  expect(newState.error).toEqual(newErrorMessage);
  // check if fetch is done
  expect(newState.isFetching).toEqual(false);
});
