import {
  ICommonOpsReport,
  IDayTradeReport, IDefaultReport,
  IExemptVolumeInfo,
  IFiiReport, IMonthlyReportsApiModel,
  IProfitInfo,
  ITaxInfo,
} from './MonthlyTaxReport.types';
import { undefinedToZero, negativeOrUndefinedToZero } from '../../Util/general.utils';

export default class MonthlyTaxReport {
  /**
   * All info about exempt value sale of brazilian stocks.
   */
  readonly exemptVolumeInfo: IExemptVolumeInfo;

  /**
   * Tax value of each report.
   */
  readonly taxInfo: ITaxInfo;

  /**
   * Profit value of each report.
   */
  readonly profitInfo: IProfitInfo;

  /**
   *  Marks if a DARF is paid or not
   */
  readonly darfPaymentId: number | null;

  /**
   * The month of this report (0 indexed. January = 0, December = 11)
   */
  readonly monthIndex: number;

  /**
   * The Year of this report
   */
  readonly year: number;

  /**
   * Taxes owed due to stock market operations (Common operations and Day Trade operations), net from IRRF
   */
  readonly stockMarketNetTaxes: number;

  /**
   * DARF Taxes for the current month
   */
  readonly darfCurrentMonthTaxes: number;

  /**
   * Amount that should be paid this month via DARF, respecting the minimum payable
   * rules and carry-over rules of the Receita Federal
   */
  readonly darfPayableTaxes: number;

  /**
   *  Report for common operations
   */
  readonly commonOpsReport?: ICommonOpsReport;

  /**
   *  Report for day trade
   */
  readonly dayTradeReport?: IDayTradeReport;

  /**
   * Report for Crypto
   */
  readonly fiiReport?: IFiiReport;

  /**
   * Net taxes of all the assets taxed via the DARF mechanism
   */
  readonly accumulatedDarfTaxes: number;

  /**
   * Report for Crypto
   */
  readonly cryptoReport?: IDefaultReport;

  /**
   * Report for Subscription rights
   */
  readonly subscriptionRightReport?: IDefaultReport;

  /**
   * Report for international assets
   */
  readonly internationalReport?: IDefaultReport;

  constructor(
    exemptVolumeInfo : IExemptVolumeInfo,
    taxInfo: ITaxInfo,
    profitInfo: IProfitInfo,
    month: number,
    year: number,
    stockMarketNetTaxes: number,
    darfPaymentId: number | null,
    accumulatedDarfTaxes: number,
    darfPayableTaxes: number,
    darfCurrentMonthTaxes: number,
    commonOpsReport?: ICommonOpsReport,
    dayTradeReport?: IDayTradeReport,
    fiiReport?: IFiiReport,
    cryptoReport?: IDefaultReport,
    subscriptionRightReport?: IDefaultReport,
    internationalReport?: IDefaultReport,
  ) {
    this.exemptVolumeInfo = exemptVolumeInfo;
    this.taxInfo = taxInfo;
    this.profitInfo = profitInfo;
    this.darfPaymentId = darfPaymentId;
    this.monthIndex = month;
    this.year = year;
    this.stockMarketNetTaxes = stockMarketNetTaxes;
    this.commonOpsReport = commonOpsReport;
    this.dayTradeReport = dayTradeReport;
    this.fiiReport = fiiReport;
    this.cryptoReport = cryptoReport;
    this.subscriptionRightReport = subscriptionRightReport;
    this.internationalReport = internationalReport;
    this.accumulatedDarfTaxes = accumulatedDarfTaxes;
    this.darfPayableTaxes = darfPayableTaxes;
    this.darfCurrentMonthTaxes = darfCurrentMonthTaxes;
  }

  /**
   * Construct the Monthly Tax Report object that is consumed at SPA(Single Page App).
   * @param apiModel
   */
  static fromApiModel(apiModel: IMonthlyReportsApiModel) {
    const date = new Date(Date.parse(apiModel.date));
    const exemptVolumeInfo = getExemptVolumeInfo(apiModel?.commonOpsReport);
    const taxInfo = getTaxInfo(apiModel);
    const profitInfo = getProfitInfo(apiModel);
    const month = date.getMonth();
    const year = date.getFullYear();
    const internationalReport = undefined;

    const {
      commonOpsReport,
      stockMarketNetTaxes,
      dayTradeReport,
      fiiReport,
      cryptoReport,
      subscriptionRightReport,
      accumulatedDarfTaxes,
      darfPayableTaxes,
      darfCurrentMonthTaxes,
    } = apiModel;

    return new MonthlyTaxReport(
      exemptVolumeInfo,
      taxInfo,
      profitInfo,
      month,
      year,
      stockMarketNetTaxes,
      apiModel.darfPaymentId,
      accumulatedDarfTaxes,
      darfPayableTaxes,
      darfCurrentMonthTaxes,
      commonOpsReport,
      dayTradeReport,
      fiiReport,
      cryptoReport,
      subscriptionRightReport,
      internationalReport,
    );
  }

  /**
   * The sum of all profits.
   */
  get profit() {
    return (
      this.profitInfo.commonOpsProfit
      + this.profitInfo.dayTradeProfit
      + this.profitInfo.fiiProfit
      + this.profitInfo.cryptoProfit
      + this.profitInfo.internationalProfit
      + this.profitInfo.subscriptionRightProfit
    );
  }

  /**
   * The sum of previous' DARFs with less than R$10,00 not paid yet.
   */
  get previousDarf() {
    return (
      this.accumulatedDarfTaxes
      - this.darfCurrentMonthTaxes
    );
  }

  /**
   * The sum of all taxes.
   */
  get tax() {
    return (
      this.taxInfo.commonOpsTax
      + this.taxInfo.dayTradeTax
      + this.taxInfo.fiiTax
      + this.taxInfo.cryptoTax
      + this.taxInfo.internationalTax
      + this.taxInfo.subscriptionRightTax
      + this.previousDarf
    );
  }

  get remainExemptionVolumeBrazil() {
    return (negativeOrUndefinedToZero(this.exemptVolumeInfo.stockExemptionSaleThresholdBrazil
      - this.exemptVolumeInfo.stocksExemptionSaleVolumeUsedBrazil)
    );
  }
}

/**
 * Get the information about exempt volume Sale commons ops in brazilian stocks.
 */
function getExemptVolumeInfo(commonOpsReport?: ICommonOpsReport): IExemptVolumeInfo {
  return {
    stocksExemptionSaleVolumeUsedBrazil: negativeOrUndefinedToZero(commonOpsReport?.stocksExemptionSaleVolumeUsed),
    stockExemptionSaleThresholdBrazil: negativeOrUndefinedToZero(commonOpsReport?.stockExemptionSaleThreshold),
  };
}

/**
 * Get the final profit for each report from api.
 */
function getProfitInfo(apiModel: IMonthlyReportsApiModel): IProfitInfo {
  return {
    commonOpsProfit: undefinedToZero(apiModel?.commonOpsReport?.profits),
    dayTradeProfit: undefinedToZero(apiModel?.dayTradeReport?.profits),
    fiiProfit: undefinedToZero(apiModel?.fiiReport?.profits),
    cryptoProfit: undefinedToZero(apiModel?.cryptoReport?.profits),
    subscriptionRightProfit: undefinedToZero(apiModel?.subscriptionRightReport?.profits),
    internationalProfit: undefinedToZero(apiModel?.internationalReport?.profits),
  };
}
export interface StockMarketTaxes {
    /**
     * Taxes, net from all deductions, owed due to common ops.
     */
    commonOpsNetTaxes : number;
    /**
     * Taxes, net from all deductions, owed due to day trading
     */
    dayTradeNetTaxes : number;

}

/**
 * Get the proportional tax of dayTrade and common ops report.(Based on stockMarketTaxes )
 */
export function getStockMarketTaxes(
  commonOpsReport?: ICommonOpsReport, dayTradeReport ?: IDayTradeReport, stockMarketNetTaxes?: number,
) : StockMarketTaxes {
  const zeroStockMarketTaxes = {
    commonOpsNetTaxes: 0,
    dayTradeNetTaxes: 0,
  };

  const commonTaxOwed = undefinedToZero(commonOpsReport?.taxOwed);
  const dayTradeTaxOwed = undefinedToZero(dayTradeReport?.taxesOwed);
  const stockMarketTaxes = undefinedToZero(stockMarketNetTaxes);
  const totalTaxOwed = commonTaxOwed + dayTradeTaxOwed;
  if (totalTaxOwed === 0) {
    return zeroStockMarketTaxes;
  }
  return {
    commonOpsNetTaxes: stockMarketTaxes * (commonTaxOwed / totalTaxOwed),
    dayTradeNetTaxes: stockMarketTaxes * (dayTradeTaxOwed / totalTaxOwed),
  };
}

/**
 * Get the final tax for each report from api.
 */
function getTaxInfo(apiModel: IMonthlyReportsApiModel): ITaxInfo {
  const { commonOpsNetTaxes, dayTradeNetTaxes } = getStockMarketTaxes(apiModel.commonOpsReport,
    apiModel.dayTradeReport,
    apiModel.stockMarketNetTaxes);
  return {
    commonOpsTax: commonOpsNetTaxes,
    dayTradeTax: dayTradeNetTaxes,
    fiiTax: undefinedToZero(apiModel?.fiiReport?.netTaxes),
    cryptoTax: undefinedToZero(apiModel?.cryptoReport?.taxesOwed),
    subscriptionRightTax: undefinedToZero(apiModel?.subscriptionRightReport?.taxesOwed),
    internationalTax: undefinedToZero(apiModel?.internationalReport?.taxesOwed),
  };
}
