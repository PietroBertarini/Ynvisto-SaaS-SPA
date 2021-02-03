import MockDate from 'mockdate';
import {
  getExemptionSaleVolumeUsedInfo, getExemptionSaleVolumeUsedTitleInfo,
  getMonthNumber, getMonthlyReport, getProfitData, getProfitHeaderValue,
  getExemptionTitleStatus, getTaxData, getTaxHeaderValue, getProfitTitleStatus, getTaxesTitleStatus,
  checkCPF, getExpireDate, getCalcPeriod, parseOperationsHistory,
} from '../../../Components/Pages/MonthlyTaxReport/MonthlyTaxReport.utils';
import { ETitleStatus } from '../../../Components/Components/MonthlyCardReport/MonthlyCardReport.component';
import {
  ExemptionSaleVolumeMonthlyReportPlus0,
  ExemptionSaleVolumeUsedMonthlyReportlEqual0,
  ExemptionSaleVolumeUsedMonthlyReportLower0,
  getProfitReport2Value,
  getProfitReportAllHaveValue,
  getProfitReportaRestValue,
  getReportAll0,
  getTaxReport2Value,
  getTaxReportAllHaveValue,
  getTaxReportRestValue,
  getTaxReportDarfValue,
  OperationsHistory,
  ParsedOperationsHistoryOctober,
  ParsedOperationsHistoryNovember,
} from '../../../Mocks/MonthlyTaxReport.mock';
import {
  defaultExemptionSaleVolumeUsedData,
  ExemptionSaleVolumeUsedDataEqual0,
  ExemptionSaleVolumeUsedDataLowerThan0,
  ExemptionSaleVolumeUsedDataPlus0, getProfitData2Vale, getProfitDataAllValues, getProfitDataDefault,
  getProfitDataRemains,
  getTaxData2Vale,
  getTaxDataAllVale,
  getTaxDataDefault,
  getTaxDataRemains,
  getTaxDataDarf,
} from '../../../Mocks/MonthlyCardReport.mock';
import { mockTaxReport } from '../../../Mocks/TaxReport.mock';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';
import { parseTaxReportJSON } from '../../../Redux/Services/TaxReports/TaxReports.api';

describe('getMonthNumber tests', () => {
  test('Test Geral', () => {
    const monthNumber = getMonthNumber('Geral');
    expect(monthNumber).toEqual(0);
  });
  test('Test Janeiro', () => {
    const monthNumber = getMonthNumber('Janeiro');
    expect(monthNumber).toEqual(1);
  });
  test('Test Fevereiro', () => {
    const monthNumber = getMonthNumber('Fevereiro');
    expect(monthNumber).toEqual(2);
  });
  test('Test Março', () => {
    const monthNumber = getMonthNumber('Março');
    expect(monthNumber).toEqual(3);
  });
  test('Test Abril', () => {
    const monthNumber = getMonthNumber('Abril');
    expect(monthNumber).toEqual(4);
  });
  test('Test Maio', () => {
    const monthNumber = getMonthNumber('Maio');
    expect(monthNumber).toEqual(5);
  });
  test('Test Junho', () => {
    const monthNumber = getMonthNumber('Junho');
    expect(monthNumber).toEqual(6);
  });
  test('Test Julho', () => {
    const monthNumber = getMonthNumber('Julho');
    expect(monthNumber).toEqual(7);
  });
  test('Test Agosto', () => {
    const monthNumber = getMonthNumber('Agosto');
    expect(monthNumber).toEqual(8);
  });
  test('Test Setembro', () => {
    const monthNumber = getMonthNumber('Setembro');
    expect(monthNumber).toEqual(9);
  });
  test('Test Outubro', () => {
    const monthNumber = getMonthNumber('Outubro');
    expect(monthNumber).toEqual(10);
  });
  test('Test Novembro', () => {
    const monthNumber = getMonthNumber('Novembro');
    expect(monthNumber).toEqual(11);
  });
  test('Test Dezembro', () => {
    const monthNumber = getMonthNumber('Dezembro');
    expect(monthNumber).toEqual(12);
  });
  test('Test Test', () => {
    const monthNumber = getMonthNumber('Test');
    expect(monthNumber).toEqual(0);
  });
});
describe('getExemptionTitleStatus tests', () => {
  test('Test input undefined', () => {
    const status = getExemptionTitleStatus(undefined);
    expect(status).toEqual(ETitleStatus.GOOD);
  });
  test('Test OK', () => {
    const status = getExemptionTitleStatus(901010);
    expect(status).toEqual(ETitleStatus.GOOD);
  });
  test('Test ALERT', () => {
    const status = getExemptionTitleStatus(1349);
    expect(status).toEqual(ETitleStatus.WARNING);
  });
  test('Test WARNING', () => {
    const status = getExemptionTitleStatus(0);
    expect(status).toEqual(ETitleStatus.BAD);
  });
});

describe('getProfitTitleStatus tests', () => {
  test('Test input undefined', () => {
    const status = getProfitTitleStatus(undefined);
    expect(status).toEqual(ETitleStatus.GOOD);
  });
  test('Test OK', () => {
    const status = getProfitTitleStatus(901010);
    expect(status).toEqual(ETitleStatus.GOOD);
  });
  test('Test OK with 0', () => {
    const status = getProfitTitleStatus(0);
    expect(status).toEqual(ETitleStatus.GOOD);
  });
  test('Test WARNING', () => {
    const status = getProfitTitleStatus(-1101);
    expect(status).toEqual(ETitleStatus.BAD);
  });
});

describe('getTaxesTitleStatus tests', () => {
  test('Test input undefined', () => {
    const status = getTaxesTitleStatus(undefined);
    expect(status).toEqual(ETitleStatus.GOOD);
  });
  test('Test OK', () => {
    const status = getTaxesTitleStatus(0);
    expect(status).toEqual(ETitleStatus.GOOD);
  });
  test('Test ALERT', () => {
    const status = getTaxesTitleStatus(3);
    expect(status).toEqual(ETitleStatus.WARNING);
  });
  test('Test WARNING', () => {
    const status = getTaxesTitleStatus(11);
    expect(status).toEqual(ETitleStatus.BAD);
  });
});

describe('getExemptionSaleVolumeUsedData tests', () => {
  test('Test input undefined', () => {
    const exemptionSaleVolumeUsedData = getExemptionSaleVolumeUsedInfo(undefined);
    expect(exemptionSaleVolumeUsedData).toEqual(defaultExemptionSaleVolumeUsedData);
  });
  test('Test ExemptionSaleVolumeUsedData > 0', () => {
    const exemptionSaleVolumeUsedData = getExemptionSaleVolumeUsedInfo(
      MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeMonthlyReportPlus0),
    );
    expect(exemptionSaleVolumeUsedData).toEqual(ExemptionSaleVolumeUsedDataPlus0);
  });
  test('Test ExemptionSaleVolumeUsedData = 0', () => {
    const exemptionSaleVolumeUsedData = getExemptionSaleVolumeUsedInfo(
      MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeUsedMonthlyReportlEqual0),
    );
    expect(exemptionSaleVolumeUsedData).toEqual(ExemptionSaleVolumeUsedDataEqual0);
  });
  test('Test ExemptionSaleVolumeUsedData < 0', () => {
    const exemptionSaleVolumeUsedData = getExemptionSaleVolumeUsedInfo(
      MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeUsedMonthlyReportLower0),
    );
    expect(exemptionSaleVolumeUsedData).toEqual(ExemptionSaleVolumeUsedDataLowerThan0);
  });
});

describe('getTaxData tests', () => {
  test('Test input undefined', () => {
    const exemptionSaleVolumeUsedData = getTaxData(undefined);
    expect(exemptionSaleVolumeUsedData).toEqual(getTaxDataDefault);
  });
  test('Test getTaxData all 0', () => {
    const taxData = getTaxData(MonthlyTaxReport.fromApiModel(getReportAll0));
    expect(taxData).toEqual(getTaxDataDefault);
  });
  test('Test getTaxData all have value', () => {
    const taxData = getTaxData(MonthlyTaxReport.fromApiModel(getTaxReportAllHaveValue));
    expect(taxData).toEqual(getTaxDataAllVale);
  });
  test('Test getTaxData 2  values', () => {
    const taxData = getTaxData(MonthlyTaxReport.fromApiModel(getTaxReport2Value));
    expect(taxData).toEqual(getTaxData2Vale);
  });
  test('Test getTaxData rest values', () => {
    const taxData = getTaxData(MonthlyTaxReport.fromApiModel(getTaxReportRestValue));
    expect(taxData).toEqual(getTaxDataRemains);
  });
  test('Test getTaxData darf values', () => {
    const taxData = getTaxData(MonthlyTaxReport.fromApiModel(getTaxReportDarfValue));
    expect(taxData).toEqual(getTaxDataDarf);
  });
});

describe('getProfitData tests', () => {
  test('Test input undefined', () => {
    const profitData = getProfitData(undefined);
    expect(profitData).toEqual(getProfitDataDefault);
  });
  test('Test getProfitData all 0', () => {
    const profitData = getProfitData(MonthlyTaxReport.fromApiModel(getReportAll0));
    expect(profitData).toEqual(getProfitDataDefault);
  });
  test('Test getProfitData all have value', () => {
    const profitData = getProfitData(MonthlyTaxReport.fromApiModel(getProfitReportAllHaveValue));
    expect(profitData).toEqual(getProfitDataAllValues);
  });
  test('Test getProfitData 2  values', () => {
    const profitData = getProfitData(MonthlyTaxReport.fromApiModel(getProfitReport2Value));
    expect(profitData).toEqual(getProfitData2Vale);
  });
  test('Test getProfitData rest values', () => {
    const profitData = getProfitData(MonthlyTaxReport.fromApiModel(getProfitReportaRestValue));
    expect(profitData).toEqual(getProfitDataRemains);
  });
});

describe('getExemptionSaleVolumeUsedHeader tests', () => {
  test('Test input undefined', () => {
    const exemptionSaleVolumeUsedHeader = getExemptionSaleVolumeUsedTitleInfo(undefined);
    expect(exemptionSaleVolumeUsedHeader).toEqual(20000);
  });
  test('Test input SaleVolumeMonthlyReport > 0', () => {
    const exemptionSaleVolumeUsedHeader = getExemptionSaleVolumeUsedTitleInfo(
      MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeMonthlyReportPlus0),
    );
    expect(exemptionSaleVolumeUsedHeader).toEqual(10000);
  });
  test('Test input SaleVolumeMonthlyReport = 0', () => {
    const exemptionSaleVolumeUsedHeader = getExemptionSaleVolumeUsedTitleInfo(
      MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeUsedMonthlyReportlEqual0),
    );
    expect(exemptionSaleVolumeUsedHeader).toEqual(0);
  });
  test('Test input SaleVolumeMonthlyReport < 0', () => {
    const exemptionSaleVolumeUsedHeader = getExemptionSaleVolumeUsedTitleInfo(
      MonthlyTaxReport.fromApiModel(ExemptionSaleVolumeUsedMonthlyReportLower0),
    );
    expect(exemptionSaleVolumeUsedHeader).toEqual(0);
  });
});

describe('getTaxHeader tests', () => {
  test('Test input undefined', () => {
    const taxHeader = getTaxHeaderValue(undefined);
    expect(taxHeader).toEqual(0);
  });
  test('Test input getTaxHeader add all values', () => {
    const taxHeader = getTaxHeaderValue(MonthlyTaxReport.fromApiModel(getTaxReportAllHaveValue));
    expect(taxHeader).toEqual(111110);
  });
  test('Test input getTaxHeader with DARF', () => {
    const taxHeader = getTaxHeaderValue(MonthlyTaxReport.fromApiModel(getTaxReportDarfValue));
    expect(taxHeader).toEqual(111009);
  });
});

describe('getProfitHeader tests', () => {
  test('Test input undefined', () => {
    const profitHeader = getProfitHeaderValue(undefined);
    expect(profitHeader).toEqual(0);
  });
  test('Test input getProfitHeader add all values', () => {
    const profitHeader = getProfitHeaderValue(MonthlyTaxReport.fromApiModel(getProfitReportAllHaveValue));
    expect(profitHeader).toEqual(111110);
  });
});

describe('getMonthlyReport tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });
  test('Test input undefined', () => {
    const monthReport = getMonthlyReport(0, undefined);
    expect(monthReport).toEqual(undefined);
  });
  test('Test month that doesnt exist', () => {
    const monthReport = getMonthlyReport(25, parseTaxReportJSON(mockTaxReport));
    expect(monthReport).toEqual(undefined);
  });
  test('Find one month', () => {
    const monthReport = getMonthlyReport(6, parseTaxReportJSON(mockTaxReport));
    expect(monthReport).toEqual(MonthlyTaxReport.fromApiModel(mockTaxReport.monthlyReports[5]));
  });
  test('Doesnt find month', () => {
    const monthReport = getMonthlyReport(10, parseTaxReportJSON(mockTaxReport));
    expect(monthReport).toEqual(undefined);
  });
  test('Month another year', () => {
    const monthReport = getMonthlyReport(1, parseTaxReportJSON(mockTaxReport));
    expect(monthReport).toEqual(undefined);
  });
});

describe('checkCPF tests', () => {
  test('Test invalid CPF', () => {
    const isValid = checkCPF('12345678932');
    expect(isValid).toEqual(false);
  });
  test('Test valid CPF', () => {
    const isValid = checkCPF('61015504191');
    expect(isValid).toEqual(true);
  });
});

describe('getExpireDate tests', () => {
  beforeAll(() => {
    MockDate.set('2015-11-14');
  });
  test('Test expire date', () => {
    const expireDate = getExpireDate(11);
    expect(expireDate).toEqual('31/12/2015');
  });
});

describe('getCalcPeriod tests', () => {
  beforeAll(() => {
    MockDate.set('2015-11-14');
  });
  test('Test expire date', () => {
    const calcPeriod = getCalcPeriod(11);
    expect(calcPeriod).toEqual('30/11/2015');
  });
});

describe('parseOperationsHistory tests', () => {
  test('Tests parsing of operations history with only one operation', () => {
    const parsedOperations = parseOperationsHistory(OperationsHistory, 10);
    expect(parsedOperations).toEqual(ParsedOperationsHistoryOctober);
  });

  test('Tests parsing of operations history with more than one operation - sorted by date and profit', () => {
    const parsedOperations = parseOperationsHistory(OperationsHistory, 11);
    expect(parsedOperations).toEqual(ParsedOperationsHistoryNovember);
  });
});
