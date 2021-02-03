import { IParsedOperationsHistory } from '../../Pages/MonthlyTaxReport/MonthlyTaxReport.utils';
import { IOperationsHistory } from '../../../Redux/Services/TaxReports/TaxReports.actions';

export interface HistoryProp {
  data: IParsedOperationsHistory[],
}

/**
 * get the porcentage of profits of total.
 * @param operations: operations of specified day.
 */
export function extractPercentageToCircle(operations: IOperationsHistory[]): number {
  let losses = 0;
  let profits = 0;

  operations.forEach((operation) => {
    if (operation.profit >= 0) profits += operation.profit;
    else losses -= operation.profit;
  });

  if (profits === 0 && losses === 0) return 100;
  return (profits * 100) / (profits + losses);
}

export function getType(type: string, isDayTrade: boolean): string {
  const types = {
    Acoes: 'Ações',
    Etf: 'ETF',
    Options: 'Opções',
    Crypto: 'Criptomoeda',
    Fii: 'FII',
    BDR: 'BDR',
    SubscriptionRight: 'Direito de Subscrição',
    International: 'Ação Internacional',
  };

  if (types[type] === 'Ações' && isDayTrade) return 'Daytrade';
  if (types[type] === 'Ações') return 'Operação Comum';

  return types[type];
}
