import MockDate from 'mockdate';
import {
  getMonthNumber,
  getTaxDetailsInfo,
  getMonthReport,
} from '../../../Components/Components/MonthlyCardReport/MonthlyCardReport.utils';
import {
  ExemptionSaleVolumeMonthlyReportPlus0, TaxDetailInfoOnlyWithDayTrade,
  TaxDetailInfoWithoutData, TaxDetailInfoWithAllData,
} from '../../../Mocks/MonthlyTaxReport.mock';
import {
  taxDetailsModalInfoAllData, taxDetailsModalInfoOnlyDayTrade, taxDetailsModalInfoWithoutData,
} from '../../../Mocks/TaxDetailsModal.mock';

import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';

describe('getMonthNumber tests', () => {
  test('Test existing month', () => {
    const month = getMonthNumber('Abril');
    expect(month).toBe(4);
  });

  test('Test not existing month', () => {
    const month = getMonthNumber('Bruna');
    expect(month).toBe(0);
  });
});

describe('getMonthReport tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });

  const taxReport = {
    monthlyReports: [MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeMonthlyReportPlus0)],
    currentPositions: [],
    operations: [],
  };

  test('Test not taxReport', () => {
    const monthlyReport = getMonthReport(2, undefined);
    expect(monthlyReport).toBe(undefined);
  });

  test('Test existing monthlyReport', () => {
    const monthlyReport = getMonthReport(2, taxReport);
    expect(monthlyReport).toEqual(MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeMonthlyReportPlus0));
  });

  test('Test not existing monthlyReport', () => {
    const monthlyReport = getMonthReport(4, taxReport);
    expect(monthlyReport).toEqual(undefined);
  });
});

describe('getTaxDetailsInfo tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });

  test('Test all of data', () => {
    const taxDetails = getTaxDetailsInfo(MonthlyTaxReport.fromApiModel(TaxDetailInfoWithAllData));
    expect(taxDetails).toEqual(taxDetailsModalInfoAllData);
  });

  test('Test only with DayTrade', () => {
    const taxDetails = getTaxDetailsInfo(MonthlyTaxReport.fromApiModel(TaxDetailInfoOnlyWithDayTrade));
    expect(taxDetails).toEqual(taxDetailsModalInfoOnlyDayTrade);
  });

  test('Test only without data', () => {
    const taxDetails = getTaxDetailsInfo(MonthlyTaxReport.fromApiModel(TaxDetailInfoWithoutData));
    expect(taxDetails).toEqual(taxDetailsModalInfoWithoutData);
  });
});
