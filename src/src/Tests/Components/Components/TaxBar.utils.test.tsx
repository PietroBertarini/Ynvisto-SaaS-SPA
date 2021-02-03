import React from 'react';

import {
  getNegativeProfitDataRemainsSome0, getPositiveProfitDataRemainsSome0,
  getProfitDataDefault,
  getProfitDataNegativeAndPositive,
  getProfitDataRemains, getProfitDataRemainsNegative,
} from '../../../Mocks/MonthlyCardReport.mock';
import { getChartData } from '../../../Components/Components/ValuesBar/ValuesBar.utils';

describe('valuesObj tests', () => {
  test('Using positive header with some negative data', () => {
    const data = getChartData(getProfitDataNegativeAndPositive, 10);
    expect(data.valuesObj).toEqual({
      'Operações FII': 1000,
      Criptomoeda: 10000,
    });
  });
  test('Using negative header with some positive data', () => {
    const data = getChartData(getProfitDataNegativeAndPositive, -10);
    expect(data.valuesObj).toEqual({ Subscrição: -100000 });
  });
  test('Using positive header all negative data', () => {
    const data = getChartData(getProfitDataRemainsNegative, 10);
    expect(data.valuesObj).toEqual({ default: 1 });
  });
  test('Using negative header', () => {
    const data = getChartData(getProfitDataRemainsNegative, -10);
    expect(data.valuesObj).toEqual({
      Criptomoeda: -10000,
      'Operações FII': -1000,
      Subscrição: -100000,
    });
  });
  test('Using positive header', () => {
    const data = getChartData(getProfitDataRemains, 10);
    expect(data.valuesObj).toEqual({
      'Operações FII': 1000,
      Criptomoeda: 10000,
      Subscrição: 100000,
    });
  });
  test('Using negative header positive data', () => {
    const data = getChartData(getProfitDataRemains, -10);
    expect(data.valuesObj).toEqual({ default: 1 });
  });
  test('All data is 0', () => {
    const data = getChartData(getProfitDataDefault, 10);
    expect(data.valuesObj).toEqual({ default: 1 });
  });
  test('positive Data have some 0', () => {
    const data = getChartData(getPositiveProfitDataRemainsSome0, 10);
    expect(data.valuesObj).toEqual({ 'Operações FII': 1000 });
  });
  test('negative Data have some 0', () => {
    const data = getChartData(getNegativeProfitDataRemainsSome0, -10);
    expect(data.valuesObj).toEqual({ 'Operações FII': -1000 });
  });
});

describe('colors tests', () => {
  test('Using positive header with some negative data', () => {
    const data = getChartData(getProfitDataNegativeAndPositive, 10);
    expect(data.colors).toEqual(['#365f00', '#6FC7AE']);
  });
  test('Using negative header with some positive data', () => {
    const data = getChartData(getProfitDataNegativeAndPositive, -10);
    expect(data.colors).toEqual(['#192d00']);
  });
  test('Using positive header all negative data', () => {
    const data = getChartData(getProfitDataRemainsNegative, 10);
    expect(data.colors).toEqual(['#B1B1B1']);
  });
  test('Using negative header', () => {
    const data = getChartData(getProfitDataRemainsNegative, -10);
    expect(data.colors).toEqual(['#365f00', '#6FC7AE', '#192d00']);
  });
  test('Using positive header', () => {
    const data = getChartData(getProfitDataRemains, 10);
    expect(data.colors).toEqual(['#365f00', '#6FC7AE', '#192d00']);
  });
  test('Using negative header positive data', () => {
    const data = getChartData(getProfitDataRemains, -10);
    expect(data.colors).toEqual(['#B1B1B1']);
  });
  test('All data is 0', () => {
    const data = getChartData(getProfitDataDefault, 10);
    expect(data.colors).toEqual(['#B1B1B1']);
  });
  test('positive Data have some 0', () => {
    const data = getChartData(getPositiveProfitDataRemainsSome0, 10);
    expect(data.colors).toEqual(['#6FC7AE']);
  });
  test('negative Data have some 0', () => {
    const data = getChartData(getNegativeProfitDataRemainsSome0, -10);
    expect(data.colors).toEqual(['#6FC7AE']);
  });
});

describe('keys tests', () => {
  test('Using positive header with some negative data', () => {
    const data = getChartData(getProfitDataNegativeAndPositive, 10);
    expect(data.keys).toEqual(['Criptomoeda', 'Operações FII']);
  });
  test('Using negative header with some positive data', () => {
    const data = getChartData(getProfitDataNegativeAndPositive, -10);
    expect(data.keys).toEqual(['Subscrição']);
  });
  test('Using positive header all negative data', () => {
    const data = getChartData(getProfitDataRemainsNegative, 10);
    expect(data.keys).toEqual(['default']);
  });
  test('Using negative header', () => {
    const data = getChartData(getProfitDataRemainsNegative, -10);
    expect(data.keys).toEqual(['Criptomoeda', 'Operações FII', 'Subscrição']);
  });
  test('Using positive header', () => {
    const data = getChartData(getProfitDataRemains, 10);
    expect(data.keys).toEqual(['Criptomoeda', 'Operações FII', 'Subscrição']);
  });
  test('Using negative header positive data', () => {
    const data = getChartData(getProfitDataRemains, -10);
    expect(data.keys).toEqual(['default']);
  });
  test('All data is 0', () => {
    const data = getChartData(getProfitDataDefault, 10);
    expect(data.keys).toEqual(['default']);
  });
  test('positive Data have some 0', () => {
    const data = getChartData(getPositiveProfitDataRemainsSome0, 10);
    expect(data.keys).toEqual(['Operações FII']);
  });
  test('negative Data have some 0', () => {
    const data = getChartData(getNegativeProfitDataRemainsSome0, -10);
    expect(data.keys).toEqual(['Operações FII']);
  });
});
