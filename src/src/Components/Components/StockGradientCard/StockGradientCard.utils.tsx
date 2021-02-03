import { EPeriodType } from '../../../Redux/Components/TopBar/TopBar.types';
import { IStock } from '../../../Redux/Services/MyStocks/MyStocks.types';

/**
 * Create a url path link from Ticker string.
 * @param ticker: ticker string from @IStock obtained by api.get
 */
export function createPathLinkFromTicker(ticker: string) : string {
  return `/${ticker.replace(/[0-9]/g, '')}`;
}

/**
 * get the price Difference Percentage of current price using base price as reference.
 * @param basePrice: base price of @IStocks using activePeriod from @topBar.
 * @param currentPrice: current price of @IStocks.
 */
export function getPriceDiffPercentage(basePrice: number, currentPrice: number) : string {
  return `${(((currentPrice / basePrice) - 1) * 100).toFixed(2)}%`;
}

export function getPriceDiff(basePrice: number, currentPrice: number) : string {
  const diffPrice = currentPrice - basePrice;
  const isPositive = diffPrice >= 0;
  return isPositive ? `+${diffPrice}` : diffPrice.toFixed(2);
}

/**
 * Tranform a number into a {R$ N.DD} Format
 * @param currentPrice: number that will be transformed.
 */
export function numberToReaisFormat(currentPrice: number) : string {
  return `R$${currentPrice.toFixed(2)}`;
}

/**
 * Obtain the base price of the card based of activePeriod from @topBar, in future,
 * @topBar.activePeriod will be a enum directly.
 * @param stock: the stock information from api.get that will be into the card.
 * @param activePeriod: activePeriod from @topBar.
 */
export function getBasePriceOfPeriod(stock: IStock, activePeriod: string) : EPeriodType {
  switch (activePeriod) {
    case 'Dia':
      return stock.dailyBasePrice.amount;
    case 'Semana':
      return stock.weeklyBasePrice.amount;
    case 'Mês':
      return stock.monthlyBasePrice.amount;
    case 'Ano':
      return stock.yearlyBasePrice.amount;
    default:
      return stock.dailyBasePrice.amount;
  }
}
