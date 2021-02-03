import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import Swal from 'sweetalert2';
import {
  ETaxReportTypes,
  fetchTaxReportsFailure,
  fetchTaxReportsSuccess,
  ITaxReport,
  IFetchTaxReportsStart,
} from './TaxReports.actions';
import { getTaxReport } from './TaxReports.api';
import { IApiError } from '../../api.types';
import { multinesErrorToHtml } from '../Api.utils';

export function* fetchTaxReportsStart() {
  yield takeLatest(
    ETaxReportTypes.FETCH_TAX_REPORT_START,
    fetchTaxReportsAsync,
  );
}

export function* fetchTaxReportsAsync(taxReportsStart: IFetchTaxReportsStart) {
  const apiResponse = yield getTaxReport(taxReportsStart.payload);
  const taxReport = apiResponse as ITaxReport;
  if (taxReport?.monthlyReports) {
    yield put(fetchTaxReportsSuccess(taxReport));
  } else {
    const apiError = apiResponse as IApiError;

    Swal.fire({
      icon: 'error',
      title: 'Um erro ocorreu durante o cálculo do seu imposto',
      html: multinesErrorToHtml(apiError.errorMessage),
    });

    // TODO: Do we really need this crap?
    yield put(fetchTaxReportsFailure(apiError));
  }
}

export function* taxReportsSagas() {
  yield all([call(fetchTaxReportsStart)]);
}
