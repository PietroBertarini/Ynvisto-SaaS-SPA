import { extractPercentageToCircle } from '../../../Components/Components/History/History.utils';
import {
  historyPercentageWithNoLosses,
  historyPercentageWithNoProfits,
  historyPercentageWithProfitsAndLosses,
} from '../../../Mocks/MonthlyTaxReport.mock';

describe('extractPercentageToCircle tests', () => {
  test('Test data with no losses', () => {
    const porcentage = extractPercentageToCircle(historyPercentageWithNoLosses);
    expect(porcentage).toEqual(100);
  });

  test('Test data with no profits', () => {
    const porcentage = extractPercentageToCircle(historyPercentageWithNoProfits);
    expect(porcentage).toEqual(0);
  });

  test('Test data with both profits and losses', () => {
    const porcentage = extractPercentageToCircle(historyPercentageWithProfitsAndLosses);
    expect(porcentage).toEqual(60.27501909854851);
  });
});
