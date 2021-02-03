export enum EMyStocksTypes {
    FETCH_STOCKS_START = 'FETCH_STOCKS_START',
    FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS',
    FETCH_STOCKS_FAILURE = 'FETCH_STOCKS_FAILURE',
}

export interface IFetchStocksStart {
    type: typeof EMyStocksTypes.FETCH_STOCKS_START
}

export interface IFetchStocksSuccess {
    type: typeof EMyStocksTypes.FETCH_STOCKS_SUCCESS
    payload: IStock[],
}

export interface IFetchStocksFailure {
    type: typeof EMyStocksTypes.FETCH_STOCKS_FAILURE
    payload: any
}

export type MyStocksActionTypes = IFetchStocksStart | IFetchStocksSuccess | IFetchStocksFailure

export interface IMyStocksState {
    stocks: IStock[],
    isFetching: boolean,
    error: any
}

export interface IStock {
    ticker: string,
    companyName: string,
    logoUrl: string,
    currentPrice: ICurrency,
    dailyBasePrice: ICurrency,
    weeklyBasePrice: ICurrency,
    monthlyBasePrice: ICurrency,
    yearlyBasePrice: ICurrency,
    beginningBasePrice: ICurrency,
}
export interface ICurrency {
    currency: string,
    amount: number,
}
