import {
  EMyStocksTypes, IFetchStocksFailure, IFetchStocksStart, IFetchStocksSuccess, IStock,
} from './MyStocks.types';

export const fetchStocksRequest = () : IFetchStocksStart => ({
  type: EMyStocksTypes.FETCH_STOCKS_START,
});

export const fetchStocksSuccess = (stocks: IStock[]) :
    IFetchStocksSuccess => ({
  type: EMyStocksTypes.FETCH_STOCKS_SUCCESS,
  payload: stocks,
});

export const fetchStocksFailure = (errorMessage: any) : IFetchStocksFailure => ({
  type: EMyStocksTypes.FETCH_STOCKS_FAILURE,
  payload: errorMessage,
});
