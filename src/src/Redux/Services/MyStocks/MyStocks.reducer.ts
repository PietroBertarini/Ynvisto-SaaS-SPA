import { EMyStocksTypes, IMyStocksState, MyStocksActionTypes } from './MyStocks.types';

const INITIAL_STATE : IMyStocksState = {
  stocks: [],
  isFetching: false,
  error: undefined,
};

export default function myStocksReducer(
  state: IMyStocksState = INITIAL_STATE, action: MyStocksActionTypes,
) {
  switch (action.type) {
    case EMyStocksTypes.FETCH_STOCKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case EMyStocksTypes.FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        stocks: action.payload,
        isFetching: false,
      };
    case EMyStocksTypes.FETCH_STOCKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
