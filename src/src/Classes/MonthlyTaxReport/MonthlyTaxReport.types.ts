export interface IExemptVolumeInfo {
    stocksExemptionSaleVolumeUsedBrazil: number;
    stockExemptionSaleThresholdBrazil: number;
}
export interface ITaxInfo {
    commonOpsTax: number;
    dayTradeTax: number;
    fiiTax: number;
    cryptoTax: number;
    subscriptionRightTax: number;
    internationalTax: number;
}

export interface IProfitInfo {
    commonOpsProfit: number;
    dayTradeProfit: number;
    fiiProfit: number;
    cryptoProfit: number;
    subscriptionRightProfit: number;
    internationalProfit: number;
}

export interface IDayTradeReport {
    taxesOwed: number,
    profits: number,
    previousMonthLosses: number,
    irrf: number,
    irrfToCompensate: number,
    taxableProfits: number,
    taxBase: number,
}
export interface IFiiReport {
    profits: number,
    previousMonthLosses: number,
    netTaxes: number,
    taxBase: number,
}
export interface IDefaultReport {
    profits: number,
    saleVolume: number,
    taxesOwed: number,
}

export interface ICommonOpsReport {
    stocksExemptionSaleVolumeUsed: number,
    stockExemptionSaleThreshold: number,
    totalSaleVolume: number,
    taxOwed: number,
    profits: number,
    previousMonthLosses: number,
    irrf: number,
    irrfToCompensate: number,
    taxableProfits: number,
    taxBase: number,
}
export interface IMonthlyReportsApiModel {
  /**
   * .NET Date string. i.e: "2020-11-03T00:00:00"
   */
    date: string,
    darfPaymentId: number | null,
    commonOpsReport?: ICommonOpsReportApiModel,
    dayTradeReport?: IDayTradeReportApiModel,
    stockMarketNetTaxes: number,
    fiiReport?: IFiiReportApiModel,
    cryptoReport?: IDefaultReportApiModel,
    subscriptionRightReport?: IDefaultReportApiModel,
    internationalReport?: IDefaultReportApiModel,
    accumulatedDarfTaxes: number,
    darfPayableTaxes: number,
    darfCurrentMonthTaxes: number,
}
export interface IFiiReportApiModel {
    profits: number,
    previousMonthLosses: number,
    netTaxes: number,
    taxBase: number,
}

export interface ICommonOpsReportApiModel {
    stocksExemptionSaleVolumeUsed: number,
    stockExemptionSaleThreshold: number,
    totalSaleVolume: number,
    taxOwed: number,
    profits: number,
    previousMonthLosses: number,
    irrf: number,
    irrfToCompensate: number,
    taxableProfits: number,
    taxBase: number,
}

export interface IDayTradeReportApiModel {
    taxesOwed: number,
    profits: number,
    previousMonthLosses: number,
    irrf: number,
    irrfToCompensate: number,
    taxableProfits: number,
    taxBase: number,
}
export interface IDefaultReportApiModel {
    profits: number,
    saleVolume: number,
    taxesOwed: number,
}
