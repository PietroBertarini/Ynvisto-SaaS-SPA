import React from 'react';

import {
  getProfitDataAllValues,
  getProfitDataDefault,
  getProfitDataNegativeAndPositive, getProfitDataRemainsNegative,

} from '../../../Mocks/MonthlyCardReport.mock';

import {
  sumAllDataWithSameSignAsHeader,
  getTotalValue, percentValue,
} from '../../../Components/Components/MonthlyCardReportLegend/MonthlyCardReportLegend.utils';

describe('getTotalValue tests', () => {
  test('All positive data', () => {
    const value = getTotalValue(getProfitDataAllValues);
    expect(value).toEqual(111110);
  });
  test('All negative data', () => {
    const value = getTotalValue(getProfitDataRemainsNegative);
    expect(value).toEqual(-111000);
  });
  test('Mix data', () => {
    const value = getTotalValue(getProfitDataNegativeAndPositive);
    expect(value).toEqual(-89000);
  });
  test('All data.value is 0', () => {
    const value = getTotalValue(getProfitDataDefault);
    expect(value).toEqual(0);
  });
});

describe('getReferenceVolume tests', () => {
  test('All positive data with total positive', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataAllValues, 1);
    expect(value).toEqual(111110);
  });
  test('All positive data with total negative', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataAllValues, -2);
    expect(value).toEqual(0);
  });
  test('All negative data with total positive', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataRemainsNegative, 1);
    expect(value).toEqual(0);
  });
  test('All negative data with total negative', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataRemainsNegative, -2);
    expect(value).toEqual(-111000);
  });
  test('Mix data with total positive', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataNegativeAndPositive, 1);
    expect(value).toEqual(11000);
  });
  test('Mix data with total negative', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataNegativeAndPositive, -1);
    expect(value).toEqual(-100000);
  });
  test('All data.value is 0 with total negative', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataDefault, -1);
    expect(value).toEqual(0);
  });
  test('All data.value is 0 with total positive', () => {
    const value = sumAllDataWithSameSignAsHeader(getProfitDataDefault, 1);
    expect(value).toEqual(0);
  });
});

describe('percentValue tests', () => {
  test('All positive data with total positive', () => {
    const value = percentValue(3, 9);
    expect(value).toEqual('33.33 %');
  });
  test('All positive data with total negative', () => {
    const value = percentValue(3, -2);
    expect(value).toEqual('0.00 %');
  });
  test('All negative data with total positive', () => {
    const value = percentValue(-3, 3);
    expect(value).toEqual('0.00 %');
  });
  test('All negative data with total negative', () => {
    const value = percentValue(-3, -9);
    expect(value).toEqual('33.33 %');
  });
  test('All data.value is 0 with total negative', () => {
    const value = percentValue(0, -3);
    expect(value).toEqual('0.00 %');
  });
  test('All data.value is 0 with total positive', () => {
    const value = percentValue(0, 3);
    expect(value).toEqual('0.00 %');
  });
});
