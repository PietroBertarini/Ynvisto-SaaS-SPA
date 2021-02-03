import { ETaxReportTypes, MyTaxReportsActionTypes, ITaxReport } from './TaxReports.actions';
import { IApiError } from '../../api.types';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';

export interface ITaxReportsState {
  taxReport?: ITaxReport,
  isFetchingReport: boolean,
  error?: IApiError
}

const INITIAL_STATE : ITaxReportsState = {
  isFetchingReport: true,
};

const setDarfPaymentId = (month: number, year: number, darfPaymentId: number | null, state: ITaxReportsState)
  : ITaxReportsState => {
  if (!state.taxReport) return state;

  const newReports = state.taxReport.monthlyReports.map((m) => {
    if (m.monthIndex !== month || m.year !== year) return m;

    return new MonthlyTaxReport(
      m.exemptVolumeInfo,
      m.taxInfo,
      m.profitInfo,
      m.monthIndex,
      m.year,
      m.stockMarketNetTaxes,
      darfPaymentId,
      m.accumulatedDarfTaxes,
      m.darfPayableTaxes,
      m.darfCurrentMonthTaxes,
      m.commonOpsReport,
      m.dayTradeReport,
      m.fiiReport,
      m.cryptoReport,
      m.subscriptionRightReport,
      m.internationalReport,
    );
  });

  return {
    ...state,
    taxReport: {
      monthlyReports: newReports,
      currentPositions: state.taxReport.currentPositions,
      operations: state.taxReport.operations,
    },
  };
};

export default function taxReportsReducer(
  state: ITaxReportsState = INITIAL_STATE, action: MyTaxReportsActionTypes,
) : ITaxReportsState {
  switch (action.type) {
    case ETaxReportTypes.FETCH_TAX_REPORT_START:
      return {
        ...state,
        isFetchingReport: true,
        error: undefined,
      };
    case ETaxReportTypes.FETCH_TAX_REPORT_SUCCESS:
      return {
        ...state,
        taxReport: action.payload,
        isFetchingReport: false,
        error: undefined,
      };
    case ETaxReportTypes.FETCH_TAX_REPORT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingReport: false,
        taxReport: undefined,
      };
    // eslint-disable-next-line max-len
    case ETaxReportTypes.CLEAN_TAX_DATA:
      return {
        ...state,
        isFetchingReport: true,
        taxReport: undefined,
      };
    case ETaxReportTypes.CLEAN_TAX_ERROR:
      return {
        ...state,
        isFetchingReport: false,
        error: undefined,
      };
    case ETaxReportTypes.MARK_DARF_PAID: {
      const { monthIndex, year, paymentId } = action.payload;
      return setDarfPaymentId(monthIndex, year, paymentId, state);
    }
    case ETaxReportTypes.MARK_DARF_UNPAID: {
      const { monthIndex, year } = action.payload;
      return setDarfPaymentId(monthIndex, year, null, state);
    }
    default:
      return state;
  }
}
