import { call, put } from 'redux-saga/effects';
import { fetchStocksAsync } from '../../../../../Redux/Services/MyStocks/MyStocks.sagas';
import {
  mockApiResponse,
  mockStockArray,
} from './MyStocks.mock';
import api from '../../../../../Redux/api';
import { EMyStocksTypes } from '../../../../../Redux/Services/MyStocks/MyStocks.types';

const stocks = mockStockArray;

describe('Test fetchStocksAsync', () => {
  function exec() {
    // Firstly create the generator of fetchStocksAsync.
    const generator = fetchStocksAsync();
    // Get the first yield of generator, that ia return of call.api.
    const generatorCallApi = generator.next();
    // Get the second yield of generator, that is a return of put(Fetch Success),
    // in this yield, the return of previusly yield @generatorCallApi,
    // has been substituted for @mockApiResponse.
    const generatorGetTickerInformation = generator.next(mockApiResponse);
    // Get if generator has done.
    const generatorSuccess = generator.next().done;
    return {
      generatorCallApi,
      generatorGetTickerInformation,
      generatorSuccess,
    };
  }

  it('Test when fetch data success', async () => {
    const {
      generatorCallApi,
      generatorGetTickerInformation,
      generatorSuccess,
    } = exec();

    // Check if generator yields are equal than expected
    expect(generatorCallApi.done).toEqual(false);
    expect(generatorCallApi.value).toEqual(call(api.get, 'portfolio/mystocks'));
    expect(generatorGetTickerInformation.done).toEqual(false);
    expect(generatorGetTickerInformation.value).toEqual(
      put({
        type: EMyStocksTypes.FETCH_STOCKS_SUCCESS,
        payload: stocks,
      }),
    );
    expect(generatorSuccess).toEqual(true);
  });

  it('Test when fetch data failed', async () => {
    // Firstly create the generator of fetchStocksAsync
    const generator = fetchStocksAsync();
    // Get the first yield of generator, that ia return of call.api.
    const generatorCallApi = generator.next();
    // Get the second yield of generator, that is a return of put(Fetch Failed),
    // in this yield, the return of previusly yield @generatorCallApi,
    // has been substituted for undefined.
    const generatorGetTickerInformation = generator.next();
    // Get if generator has done
    const generatorFetchFailed = generator.next().done;

    // Check if generator yields are equal than expected.
    expect(generatorCallApi.done).toEqual(false);
    expect(generatorCallApi.value).toEqual(call(api.get, 'portfolio/mystocks'));
    expect(generatorGetTickerInformation.done).toEqual(false);
    expect(generatorGetTickerInformation.value).toEqual(
      put({
        type: EMyStocksTypes.FETCH_STOCKS_FAILURE,
        payload: new TypeError("Cannot read property 'data' of undefined"),
      }),
    );
    expect(generatorFetchFailed).toEqual(true);
  });
});
