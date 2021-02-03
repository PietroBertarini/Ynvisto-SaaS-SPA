import { AxiosResponse } from 'axios';
import api from '../../api';
import { IMonthlyReportsApiModel } from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.types';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';
import { constructErrorFromApi } from '../Api.utils';
import { IApiError } from '../../api.types';
import { ITaxReport, ICurrentPositions, IOperationsHistory } from './TaxReports.actions';

export interface ITaxReportApiModel {
  monthlyReports: IMonthlyReportsApiModel[],
  currentPositions: ICurrentPositions[],
  operations: IOperationsHistory[]
}

/**
 * Get all Tax Report of user from api.
 */
export function* getTaxReport(spreadsheetId?: string):
  Generator<Promise<AxiosResponse<any>>, IApiError | ITaxReport, AxiosResponse> {
  try {
    const apiResponse = spreadsheetId ? yield api.get(`Tax/TaxReportById?spreadSheetId=${spreadsheetId}`, {
      withCredentials: true,
    }) : yield api.get('Tax/TaxReport', {
      withCredentials: true,
    });
    return parseTaxReportJSON(apiResponse.data);
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}

export function parseTaxReportJSON(apiModel : ITaxReportApiModel) : ITaxReport {
  return {
    monthlyReports: apiModel.monthlyReports.map(parseMonthlyReportsJSON),
    currentPositions: apiModel.currentPositions,
    operations: apiModel.operations,
  };
}
function parseMonthlyReportsJSON(apiModel : IMonthlyReportsApiModel) : MonthlyTaxReport {
  return MonthlyTaxReport.fromApiModel(apiModel);
}
