import { ICurrentPositions } from '../../../Redux/Services/TaxReports/TaxReports.actions';

interface IPositionCount {
  value: number;
  count: number;
  name: string;
}

export interface IChartData {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface IExtractDataToChart {
  data: IChartData[] | null,
  totalValueChart: number,
  isShortChart: boolean,
}

export function extractDataToChart(currentPositions: ICurrentPositions[] | undefined): IExtractDataToChart {
  const positionsCount: IPositionCount[] = [
    {
      count: 0,
      value: 0,
      name: 'Acoes',
    },
    {
      count: 0,
      value: 0,
      name: 'Etf',
    },
    {
      count: 0,
      value: 0,
      name: 'International',
    },
    {
      count: 0,
      value: 0,
      name: 'Options',
    },
    {
      count: 0,
      value: 0,
      name: 'Crypto',
    },
    {
      count: 0,
      value: 0,
      name: 'Fii',
    },
    {
      count: 0,
      value: 0,
      name: 'BDR',
    },
    {
      count: 0,
      value: 0,
      name: 'SubscriptionRight',
    },
  ];

  if (!currentPositions) return { totalValueChart: 0, data: null, isShortChart: false };

  // sets the value and total quantity of an specific type
  currentPositions.forEach((pos) => {
    incrementCounter(positionsCount, pos);
  });

  // Calculates if we have more of short operations than long operations, if so,
  // the graphic will show only the short operations, if not, only long operations
  let short = 0;
  let long = 0;
  positionsCount.forEach((position) => {
    if (position.value < 0) short += 1;
    else if (position.value > 0) long += 1;
  });

  let totalValue = 0;

  // in case we have more short operations, values must be negative, so we must convert
  // them to positive by multiplying by negative one, so it shows on the graphic
  const response = positionsCount
    .filter((res) => ((long >= short) ? (res.value > 0) : (res.value < 0)))

    .map((position) => {
      totalValue += ((long >= short) ? position.value : (position.value * (-1)));

      return {
        id: getPositionLabel(position.name),
        label: getPositionLabel(position.name),
        value: ((long >= short) ? position.value : (position.value * (-1))),
        color: getColor(position.name),
      };
    });

  // if number of operations short === long, long operations prevails
  return {
    data: response,
    totalValueChart: totalValue,
    isShortChart: (!((long >= short))),
  };
}

function incrementCounter(positionsCount: IPositionCount[], pos: ICurrentPositions) {
  positionsCount.map((position) => {
    if (position.name === pos.type) {
      position.count += pos.quantity;
      position.value += pos.avgCost * pos.quantity;
    }
    return 0;
  });
}

export function getTotalPrice(currentPositions: ICurrentPositions[]): number {
  const total = currentPositions.map((current) => current.quantity * current.avgCost);

  return total.reduce((accum, curr) => accum + curr);
}

function getPositionLabel(name: string): string {
  const names = {
    Acoes: 'Ações',
    Etf: 'ETF',
    Options: 'Opções',
    Crypto: 'Crypto',
    Fii: 'FII',
    BDR: 'BDR',
    SubscriptionRight: 'Subscrição',
    International: 'Internacional',
  };

  return names[name];
}

export function getColor(name: string): string {
  const colors = {
    Acoes: '#64C07F',
    Etf: '#F49A59',
    Options: '#EE6868',
    Crypto: '#5FC2FA',
    Fii: '#BFC769',
    BDR: '#5349BD',
    SubscriptionRight: '#D954DC',
    International: '#0075FF',
  };

  return colors[name];
}
