import { IMonthlyCardData } from '../MonthlyCardReportLegend/MonthlyCardReportLegend.types';
import { isSameSignAndNotZero } from '../../../Util/general.utils';

export interface ChartData {
  valuesObj: Record<string, number>;
  colors: string[];
  keys: string[];
}

export function getChartData(data :IMonthlyCardData[], headerMonetaryValue : number) : ChartData {
  const object: Record<string, number> = {};
  const isPositiveHeader = headerMonetaryValue > 0;

  const haveSomeValueAtBat = isPositiveHeader
    ? data.find((item) => item.value > 0)
    : data.find((item) => item.value < 0);

  if (!haveSomeValueAtBat) {
    return {
      valuesObj: {
        default: 1,
      },
      colors: ['#B1B1B1'],
      keys: ['default'],
    };
  }

  // Order the array by label in order for the object (that is auto-ordered by label) to match the colors
  // array
  data = data.sort((a, b) => a.label.localeCompare(b.label));

  const colorsArr: string[] = [];
  const allKeys : string[] = [];
  data.forEach((item) => {
    if (isSameSignAndNotZero(item.value, headerMonetaryValue)) {
      object[item.label] = item.value;
      colorsArr.push(item.color);
      allKeys.push(item.label);
    }
  });

  return {
    valuesObj: object,
    colors: colorsArr,
    keys: allKeys,
  };
}
