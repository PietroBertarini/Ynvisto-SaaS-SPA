import { ITaxdDetailInfo } from '../Components/Components/MonthlyCardReport/MonthlyCardReport.utils';

export const taxDetailsModalInfoAllData :ITaxdDetailInfo = {
  commonOps: {
    totalSell: 10000,
    monthProfit: 0,
    taxableProfit: 0,
    compensatedLoss: 0,
    calcBase: 0,
    taxDue: 0,
  },
  dayTrade: {
    taxableProfit: 100,
    compensatedLoss: 0,
    calcBase: 0,
    taxDue: 0,
  },
  fii: {
    liquidResult: 0,
    compensatedLoss: 0,
    calcBase: 87,
    taxDue: 0,
  },
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

export const taxDetailsModalInfoWithoutCommonOps :ITaxdDetailInfo = {
  commonOps: undefined,
  dayTrade: {
    taxableProfit: 100,
    compensatedLoss: 0,
    calcBase: 0,
    taxDue: 0,
  },
  fii: {
    liquidResult: 0,
    compensatedLoss: 0,
    calcBase: 87,
    taxDue: 0,
  },
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

export const taxDetailsModalInfoOnlyDayTrade :ITaxdDetailInfo = {
  commonOps: undefined,
  dayTrade: {
    taxableProfit: 65,
    compensatedLoss: 0,
    calcBase: 0,
    taxDue: 0,
  },
  fii: undefined,
  finalResults: {
    commonOpTax: 0,
    daytradeTax: 0,
    withholdingTax: 0,
    totalTax: 98,
    fiiTax: 0,
    previousDarf: 0,
    payableTax: 98,
  },
};

export const taxDetailsModalInfoWithoutData :ITaxdDetailInfo = {
  commonOps: undefined,
  dayTrade: undefined,
  fii: undefined,
  finalResults: {
    commonOpTax: 0,
    daytradeTax: 0,
    withholdingTax: 0,
    totalTax: 0,
    fiiTax: 0,
    previousDarf: 188,
    payableTax: 188,
  },
};
