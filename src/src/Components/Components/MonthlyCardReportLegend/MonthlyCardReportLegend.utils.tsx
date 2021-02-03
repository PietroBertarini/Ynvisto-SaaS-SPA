import { IMonthlyCardData } from './MonthlyCardReportLegend.types';
import { isSameSignAndNotZero } from '../../../Util/general.utils';

/**
 * Add all values of data.value to discover te sum of all data.value array
 * @param data: data of Monthly report card
 */
export function getTotalValue(data: IMonthlyCardData[]): number {
  return data.reduce((accumulator, item) => accumulator + item.value, 0);
}
/**
 * Transforms value number to percent value string based on denominator.
 * If the value have different sign or is 0, the percentValue will be 0,00%.
 */
export const percentValue = (value: number, denominator: number) : string => {
  if (isSameSignAndNotZero(value, denominator > 0)) {
    return `${((value / denominator) * 100).toFixed(2).toString()} %`;
  }
  return `${((0).toFixed(2).toString())} %`;
};
/**
 * This number will be used as denominator for % legend.
 * Ex(If we have data1.value = 100, data2.value = -100,  data3.value = 50 and the title is 50,
 * the total of % bar will be 150,
 * because data1 represents 66,66% of the bar,data2 represents 0,0%,data3 represents 33,33%)
 */
export const sumAllDataWithSameSignAsHeader = (data: IMonthlyCardData[], totalVolume : number) : number => {
  let accumulator = 0;
  data.forEach((item) => {
    if (isSameSignAndNotZero(item.value, totalVolume)) {
      accumulator += item.value;
    }
  });
  return accumulator;
};
