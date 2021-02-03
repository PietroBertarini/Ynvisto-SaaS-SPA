import '../../../Theme/sweetalert2/sweetalert2.scss';
import { allTabs } from '../../Pages/TaxReport/TaxReport.utils';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';
import { ITaxReport } from '../../../Redux/Services/TaxReports/TaxReports.actions';

export interface ITaxdDetailInfo {
  commonOps?: {
    totalSell: number,
    monthProfit: number,
    taxableProfit: number,
    compensatedLoss: number,
    calcBase: number,
    taxDue: number,
  },
  dayTrade?: {
    taxableProfit: number,
    compensatedLoss: number,
    calcBase: number,
    taxDue: number,
  },
  fii?: {
    liquidResult: number,
    compensatedLoss: number,
    calcBase: number,
    taxDue: number,
  },
  finalResults: {
    commonOpTax: number,
    daytradeTax: number,
    withholdingTax: number,
    totalTax: number,
    fiiTax: number,
    previousDarf: number,
    payableTax: number,
  },
}

const defaultTaxdDetailInfo: ITaxdDetailInfo = {
  finalResults: {
    commonOpTax: 0,
    daytradeTax: 0,
    withholdingTax: 0,
    totalTax: 0,
    fiiTax: 0,
    previousDarf: 0,
    payableTax: 0,
  },
};

export const getMonthNumber = (monthName: string) : number => {
  const index = allTabs.findIndex((element) => element === monthName);
  return index === -1 ? 0 : (index);
};

export function getTaxDetailsInfo(monthlyTaxReport ?: MonthlyTaxReport) : ITaxdDetailInfo {
  if (monthlyTaxReport) {
    const commonOpsValidate = monthlyTaxReport.commonOpsReport
      && ((monthlyTaxReport.commonOpsReport.totalSaleVolume !== 0)
      || (monthlyTaxReport.commonOpsReport.profits !== 0)
      || (monthlyTaxReport.commonOpsReport.taxableProfits !== 0)
      || (monthlyTaxReport.commonOpsReport.previousMonthLosses !== 0)
      || (monthlyTaxReport.commonOpsReport.taxBase !== 0)
      || (monthlyTaxReport.commonOpsReport.taxOwed !== 0));

    const commonOps = monthlyTaxReport.commonOpsReport && commonOpsValidate ? {
      totalSell: monthlyTaxReport.commonOpsReport.totalSaleVolume,
      monthProfit: monthlyTaxReport.commonOpsReport.profits,
      taxableProfit: monthlyTaxReport.commonOpsReport.taxableProfits,
      compensatedLoss: monthlyTaxReport.commonOpsReport.previousMonthLosses,
      calcBase: monthlyTaxReport.commonOpsReport.taxBase,
      taxDue: monthlyTaxReport.commonOpsReport.taxOwed,
    } : undefined;

    const dayTradeValidate = monthlyTaxReport.dayTradeReport
      && ((monthlyTaxReport.dayTradeReport.profits !== 0)
      || (monthlyTaxReport.dayTradeReport.previousMonthLosses !== 0)
      || (monthlyTaxReport.dayTradeReport.taxBase !== 0)
      || (monthlyTaxReport.dayTradeReport.taxesOwed !== 0));

    const dayTrade = monthlyTaxReport.dayTradeReport && dayTradeValidate ? {
      taxableProfit: monthlyTaxReport.dayTradeReport.profits,
      compensatedLoss: monthlyTaxReport.dayTradeReport.previousMonthLosses,
      calcBase: monthlyTaxReport.dayTradeReport.taxBase,
      taxDue: monthlyTaxReport.dayTradeReport.taxesOwed,
    } : undefined;

    const fiiValidate = monthlyTaxReport.fiiReport
      && ((monthlyTaxReport.fiiReport.profits !== 0)
      || (monthlyTaxReport.fiiReport.previousMonthLosses !== 0)
      || (monthlyTaxReport.fiiReport.taxBase !== 0)
      || (monthlyTaxReport.fiiReport.netTaxes !== 0));

    const fii = monthlyTaxReport.fiiReport && fiiValidate ? {
      liquidResult: monthlyTaxReport.fiiReport.profits,
      compensatedLoss: monthlyTaxReport.fiiReport.previousMonthLosses,
      calcBase: monthlyTaxReport.fiiReport.taxBase,
      taxDue: monthlyTaxReport.fiiReport.netTaxes,
    } : undefined;

    const finalResults = {
      commonOpTax: monthlyTaxReport.commonOpsReport?.taxOwed || 0,
      daytradeTax: monthlyTaxReport.dayTradeReport?.taxesOwed || 0,

      withholdingTax: (monthlyTaxReport.commonOpsReport?.irrfToCompensate || 0)
        + (monthlyTaxReport.dayTradeReport?.irrfToCompensate || 0),

      totalTax: monthlyTaxReport.stockMarketNetTaxes,
      fiiTax: monthlyTaxReport.fiiReport?.netTaxes || 0,
      previousDarf: monthlyTaxReport.previousDarf,

      payableTax: (monthlyTaxReport.fiiReport?.netTaxes || 0)
        + monthlyTaxReport.stockMarketNetTaxes
        + monthlyTaxReport.previousDarf,
    };

    return {
      commonOps,
      dayTrade,
      fii,
      finalResults,
    };
  }

  return defaultTaxdDetailInfo;
}

/**
 * Search at TaxReport redux state if contains the report of this year of input monthNumber
 * @param taxReport: Tax Report Redux State from API
 * @param monthNumber: Month number to get the report (January:1, Feb: 2,..., December: 12)
 */
export const getMonthReport = (monthNumber: number, taxReport?: ITaxReport)
    : MonthlyTaxReport | undefined => {
  const thisYear = new Date().getFullYear();
  if (taxReport) {
    return taxReport.monthlyReports.find((item) => (item.monthIndex === monthNumber - 1)
        && item.year === thisYear);
  }
  return undefined;
};
