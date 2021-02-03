import { ITaxReport } from '../Redux/Services/TaxReports/TaxReports.actions';
import { IExtractDataToChart } from '../Components/Pages/CurrentPosition/CurrentPosition.utils';

export const mockCurrentPositionsLong: ITaxReport = {
  monthlyReports: [],
  operations: [],
  currentPositions: [
    {
      ticker: 'ABEV3',
      quantity: 100,
      avgCost: 12.22,
      type: 'Acoes',
    },
    {
      ticker: 'ITUB4',
      quantity: -100,
      avgCost: 23.9402,
      type: 'Acoes',
    },
    {
      ticker: 'HFOF11',
      quantity: -100,
      avgCost: 11.99,
      type: 'Fii',
    },
    {
      ticker: 'BRCO11',
      quantity: 100,
      avgCost: 34.00,
      type: 'Fii',
    },
    {
      ticker: 'USDT',
      quantity: 100,
      avgCost: 15.035,
      type: 'Crypto',
    },
  ],
};

export const mockChartDataMoreLongOp: IExtractDataToChart = {
  data: [
    {
      color: '#5FC2FA',
      id: 'Crypto',
      label: 'Crypto',
      value: 1503.5,
    },
    {
      color: '#BFC769',
      id: 'FII',
      label: 'FII',
      value: 2201,
    },
  ],
  totalValueChart: 3704.5,
  isShortChart: false,
};

export const mockCurrentPositionsShort: ITaxReport = {
  monthlyReports: [],
  operations: [],
  currentPositions: [
    {
      ticker: 'ABEV3',
      quantity: 100,
      avgCost: 12.22,
      type: 'Acoes',
    },
    {
      ticker: 'ITUB4',
      quantity: -100,
      avgCost: 23.9402,
      type: 'Acoes',
    },
    {
      ticker: 'HFOF11',
      quantity: -100,
      avgCost: 11.99,
      type: 'Fii',
    },
    {
      ticker: 'BRCO11',
      quantity: -100,
      avgCost: 34.00,
      type: 'Fii',
    },
    {
      ticker: 'USDT',
      quantity: 100,
      avgCost: 15.035,
      type: 'Crypto',
    },
  ],
};

export const mockChartDataMoreShortOp: IExtractDataToChart = {
  data: [
    {
      color: '#64C07F',
      id: 'Ações',
      label: 'Ações',
      value: 1172.02,
    },
    {
      color: '#BFC769',
      id: 'FII',
      label: 'FII',
      value: 4599,
    },
  ],
  totalValueChart: 5771.02,
  isShortChart: true,
};
