import { IApiError } from '../../api.types';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';

export interface ICurrentPositions {
  ticker: string,
  quantity: number,
  avgCost: number,
  type: string
}

export interface IOperationsHistory {
  /**
   * .NET Date string. i.e: "2020-11-03T00:00:00"
   */
  date: string,
  ticker: string,
  assetType: string,
  operationType: string,
  avgCost: number,
  price: number,
  quantity: number,
  profit: number,
  volume: number,
  isDayTrade: boolean
}

export interface ITaxReport {
  monthlyReports: MonthlyTaxReport[],
  currentPositions: ICurrentPositions[],
  operations: IOperationsHistory[],
}
export enum ETaxReportTypes {
  FETCH_TAX_REPORT_START = 'FETCH_TAX_REPORT_START',
  FETCH_TAX_REPORT_SUCCESS = 'FETCH_TAX_REPORT_SUCCESS',
  FETCH_TAX_REPORT_FAILURE = 'FETCH_TAX_REPORT_FAILURE',
  CLEAN_TAX_DATA = 'CLEAN_TAX_DATA',
  CLEAN_TAX_ERROR = 'CLEAN_TAX_ERROR',
  MARK_DARF_PAID = 'MARK_DARF_PAID',
  MARK_DARF_UNPAID = 'MARK_DARF_UNPAID'
}

export interface IFetchTaxReportsStart {
  type: typeof ETaxReportTypes.FETCH_TAX_REPORT_START
  payload?: string,
}
export interface ICleanTaxError {
  type: typeof ETaxReportTypes.CLEAN_TAX_ERROR
}
export interface ICleanTaxData {
  type: typeof ETaxReportTypes.CLEAN_TAX_DATA
}

export interface IFetchTaxReportsSuccess {
  type: typeof ETaxReportTypes.FETCH_TAX_REPORT_SUCCESS
  payload: ITaxReport,
}

export interface IFetchTaxReportsFailure {
  type: typeof ETaxReportTypes.FETCH_TAX_REPORT_FAILURE
  payload: IApiError,
}

export interface IMarkDarfPaid {
  type: typeof ETaxReportTypes.MARK_DARF_PAID,
  payload: {
    monthIndex: number,
    year: number,
    paymentId: number
  }
}

export interface IMarkDarfUnpaid{
  type: typeof ETaxReportTypes.MARK_DARF_UNPAID,
  payload: {
    monthIndex: number,
    year: number,
  }
}

export type MyTaxReportsActionTypes =
  IFetchTaxReportsStart |
  IFetchTaxReportsSuccess |
  IFetchTaxReportsFailure |
  ICleanTaxData |
  ICleanTaxError |
  IMarkDarfPaid |
  IMarkDarfUnpaid

export const fetchTaxReportsRequest = (spreadsheetId?: string) : IFetchTaxReportsStart => ({
  type: ETaxReportTypes.FETCH_TAX_REPORT_START,
  payload: spreadsheetId,
});
export const taxReportCleanData = () : ICleanTaxData => ({
  type: ETaxReportTypes.CLEAN_TAX_DATA,
});
export const taxReportCleanErrors = () : ICleanTaxError => ({
  type: ETaxReportTypes.CLEAN_TAX_ERROR,
});

export const fetchTaxReportsSuccess = (taxReports: ITaxReport) :
    IFetchTaxReportsSuccess => ({
  type: ETaxReportTypes.FETCH_TAX_REPORT_SUCCESS,
  payload: taxReports,
});

export const fetchTaxReportsFailure = (apiError: IApiError) : IFetchTaxReportsFailure => ({
  type: ETaxReportTypes.FETCH_TAX_REPORT_FAILURE,
  payload: apiError,
});

export const markDarfPaid = (monthIndex: number, year: number, darfPaymentId: number) : IMarkDarfPaid => ({
  type: ETaxReportTypes.MARK_DARF_PAID,
  payload: { monthIndex, year, paymentId: darfPaymentId },
});

export const markDarfUnpaid = (monthIndex: number, year: number) : IMarkDarfUnpaid => ({
  type: ETaxReportTypes.MARK_DARF_UNPAID,
  payload: { monthIndex, year },
});
