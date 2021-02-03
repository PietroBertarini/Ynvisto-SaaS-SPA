import MockDate from 'mockdate';
import {
  createRemainingProfitCardsProps,
  buildProfitCardsProps,
  getDefaultProfitCard,
  buildProfitCardProps,
  getResumeInfo,
  getStatusResume,
  getTaxStatus,
} from '../../../Components/Pages/TaxReport/TaxReport.utils';
import { EProfitCardStatus } from '../../../Components/Components/ProfitCard/ProfitCard.component';
import { EResumeStatus } from '../../../Components/Components/ResumeInfo/ResumeInfo.component';
import {
  mockExpectedResumeTaxReport,
  mockExpectedResumeTaxReport2,
} from '../../../Mocks/ResumeInfo.mock';
import {
  mockCalendarData,
  mockCalendarMissingData,
  expectedMockCalendarMissingData,
  expectedMockCalendarDefaultMonth,
  mockCalendarDataExample3,
  mockCalendarDataExample4,
  mockCalendarDataExample5, mockCalendarDataExampleUndefined,
} from '../../../Mocks/ProfitCalendar.mock';
import {
  mockTaxReportResume,
  mockTaxReportResumeExample2,
  mockTaxReportResumeExample3,
  mockTaxReportResumeExample4, mockTaxReportResumeExample5,
} from '../../../Mocks/TaxReport.mock';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';
import { parseTaxReportJSON } from '../../../Redux/Services/TaxReports/TaxReports.api';

describe('getTaxStatus tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });

  test('Test ETaxStatus.NO_DARF', () => {
    const taxStatus = getTaxStatus(0, 1, false);
    expect(taxStatus).toEqual(EProfitCardStatus.NO_DARF);
  });
  test('Test ETaxStatus.NOT_FINISHED same month', () => {
    const taxStatus = getTaxStatus(16900, 5, false);
    expect(taxStatus).toEqual(EProfitCardStatus.NOT_FINISHED);
  });
  test.skip('Test ETaxStatus.LATE', () => {
    const taxStatus = getTaxStatus(16900, 2, false);
    expect(taxStatus).toEqual(EProfitCardStatus.LATE);
  });

  test.skip('Test ETaxStatus.PENDING', () => {
    const taxStatus = getTaxStatus(16900, 4, false);
    expect(taxStatus).toEqual(EProfitCardStatus.PENDING);
  });
  test('Test ETaxStatus.PAID', () => {
    const taxStatus = getTaxStatus(16900, 3, true);
    expect(taxStatus).toEqual(EProfitCardStatus.PAID);
  });
  test('Test ETaxStatus.NOT_FINISHED future month', () => {
    const taxStatus = getTaxStatus(16900, 8, false);
    expect(taxStatus).toEqual(EProfitCardStatus.NOT_FINISHED);
  });
});

describe('getStatusResume tests', () => {
  test('0 Remain Limit', () => {
    const statusResume = getStatusResume(MonthlyTaxReport.fromApiModel(mockTaxReportResume[0]));
    expect(statusResume).toEqual(EResumeStatus.BAD);
  });
  test('Close remain limit', () => {
    const statusResume = getStatusResume(MonthlyTaxReport.fromApiModel(mockTaxReportResume[1]));
    expect(statusResume).toEqual(EResumeStatus.BAD);
  });
  test('Half remain limit ', () => {
    const statusResume = getStatusResume(MonthlyTaxReport.fromApiModel(mockTaxReportResume[2]));
    expect(statusResume).toEqual(EResumeStatus.WARNING);
  });
  test('Low remain limit ', () => {
    const statusResume = getStatusResume(MonthlyTaxReport.fromApiModel(mockTaxReportResume[3]));
    expect(statusResume).toEqual(EResumeStatus.GOOD);
  });
});

describe('getResumoInfo tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });
  test('Actual month have tax data', () => {
    const resumoInfo = getResumeInfo(parseTaxReportJSON({
      monthlyReports: mockTaxReportResume,
      currentPositions: [],
    })
      .monthlyReports);
    expect(resumoInfo).toEqual(mockExpectedResumeTaxReport);
  });
  test('Actual month not does have data', () => {
    const resumoInfo = getResumeInfo(parseTaxReportJSON(
      {
        monthlyReports: mockTaxReportResumeExample2,
        currentPositions: [],
      },
    ).monthlyReports);
    expect(resumoInfo).toEqual(mockExpectedResumeTaxReport2);
  });
  test('Actual month not does have data', () => {
    const resumoInfo = getResumeInfo(undefined);
    expect(resumoInfo).toEqual(mockExpectedResumeTaxReport2);
  });
});

describe('createAllProfitsTaxes tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });
  test('Calendar data has all 12 months', () => {
    const expected = createRemainingProfitCardsProps(mockCalendarData);
    expect(expected).toEqual(mockCalendarData);
  });
  test('Calendar missing some months data', () => {
    const expected = createRemainingProfitCardsProps(mockCalendarMissingData);
    expect(expected).toEqual(expectedMockCalendarMissingData);
  });
});

describe('getDefaultProfitAndTax tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });
  test('Same month as actual month', () => {
    const expected = getDefaultProfitCard(5);
    expect(expected).toEqual(expectedMockCalendarDefaultMonth[0]);
  });
  test('Past month as actual month', () => {
    const expected = getDefaultProfitCard(2);
    expect(expected).toEqual(expectedMockCalendarMissingData[2]);
  });
  test('Future month as actual month', () => {
    const expected = getDefaultProfitCard(11);
    expect(expected).toEqual(expectedMockCalendarMissingData[11]);
  });
});
describe('getProfitAndTaxForCalendar tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });
  test('Past month,Zero tax and paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample3[0]));
    expect(expected).toEqual(mockCalendarDataExample3[0]);
  });
  test('Past month,Zero tax and no paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample3[1]));
    expect(expected).toEqual(mockCalendarDataExample3[1]);
  });
  test.skip('Past month,Some tax and no paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample3[2]));
    expect(expected).toEqual(mockCalendarDataExample3[2]);
  });
  test('Past month,Some tax and paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample3[3]));
    expect(expected).toEqual(mockCalendarDataExample3[3]);
  });
  test.skip('1 month early,Some tax and no paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample3[4]));
    expect(expected).toEqual(mockCalendarDataExample3[4]);
  });
  test('1 month early,Some tax and  paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample4[4]));
    expect(expected).toEqual(mockCalendarDataExample4[4]);
  });
  test('1 month early,zero tax and  no paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample5[0]));
    expect(expected).toEqual(mockCalendarDataExample5[0]);
  });
  test('1 month early,zero tax and  no paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample5[1]));
    expect(expected).toEqual(mockCalendarDataExample5[1]);
  });
  test('Same month ,Some tax and no paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample3[5]));
    expect(expected).toEqual(mockCalendarDataExample3[5]);
  });
  test('Same month ,Some tax and paid', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample4[5]));
    expect(expected).toEqual(mockCalendarDataExample4[5]);
  });
  test('Next month', () => {
    const expected = buildProfitCardProps(MonthlyTaxReport.fromApiModel(mockTaxReportResumeExample3[6]));
    expect(expected).toEqual(mockCalendarDataExample3[6]);
  });
});
describe('getAllProfitsTaxes tests', () => {
  beforeAll(() => {
    MockDate.set('2015-06-14');
  });
  test('Mock TaxReport', () => {
    const expected = buildProfitCardsProps(
      parseTaxReportJSON({
        monthlyReports: mockTaxReportResumeExample4,
        currentPositions: [],

      }).monthlyReports,
    );
    expect(expected).toEqual(mockCalendarDataExample4);
  });
  test('Undefined TaxReport', () => {
    const expected = buildProfitCardsProps(undefined);
    expect(expected).toEqual(mockCalendarDataExampleUndefined);
  });
});
