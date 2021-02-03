import { format } from 'date-fns';
import Swal from 'sweetalert2';
import '../../../Theme/sweetalert2/sweetalert2.scss';
import { Dispatch } from 'redux';
import { allTabs } from '../TaxReport/TaxReport.utils';
import { ETitleStatus } from '../../Components/MonthlyCardReport/MonthlyCardReport.component';
import { IMonthlyCardData } from '../../Components/MonthlyCardReportLegend/MonthlyCardReportLegend.types';
import { negativeOrUndefinedToZero } from '../../../Util/general.utils';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';
import { createDarfPayment, deleteDarfPayment, IApiDarfPayment } from '../../../Redux/Services/Darf/DarfPayment.api';
import { IApiError } from '../../../Redux/api.types';
import { multinesErrorToHtml } from '../../../Redux/Services/Api.utils';
import {
  markDarfPaid, markDarfUnpaid, ITaxReport, IOperationsHistory,
} from '../../../Redux/Services/TaxReports/TaxReports.actions';

export interface IParsedOperationsHistory {
  date: string,
  operations: IOperationsHistory[],
}

// What is the purpose of this enum? The only caller of the function where this is used does not care about the return
// value
export enum EHandleClickDarf {
  SUCCESS_DARF = 'SUCCESS',
  LATE_DARF = 'LATE',
  LOWER_THAN_DARF = 'LOWER_THAN',
  NOT_FILLED_DARF = 'NOT_FILLED'
}

const DEFAULT_STOCK_THRESHOLD = 20_000;
const defaultExemptionData = [{
  color: '#05E985',
  label: 'Volume Disponível',
  value: 20_000,
}, {
  color: '#EB5050',
  label: 'Volume gasto',
  value: 0,
},
];
const defaultTaxData = [];
const defaultProfitData = [];
export const getMonthNumber = (monthName: string) : number => {
  const index = allTabs.findIndex((element) => element === monthName);
  return index === -1 ? 0 : (index);
};

export function getExemptionTitleStatus(num : number | undefined) : ETitleStatus {
  if (num === undefined) {
    return ETitleStatus.GOOD;
  }
  if (num <= 0) {
    return ETitleStatus.BAD;
  }
  if (num < 5000) {
    return ETitleStatus.WARNING;
  }
  return ETitleStatus.GOOD;
}
export function getTaxesTitleStatus(num : number | undefined) : ETitleStatus {
  if (num === undefined) {
    return ETitleStatus.GOOD;
  }
  if (num > 10) {
    return ETitleStatus.BAD;
  }
  if (num > 0) {
    return ETitleStatus.WARNING;
  }
  return ETitleStatus.GOOD;
}

export function getProfitTitleStatus(num : number | undefined) : ETitleStatus {
  if (num === undefined) {
    return ETitleStatus.GOOD;
  }
  if (num >= 0) {
    return ETitleStatus.GOOD;
  }
  if (num < 0) {
    return ETitleStatus.BAD;
  }
  return ETitleStatus.GOOD;
}

export function getExemptionSaleVolumeUsedInfo(monthlyTaxReport ?: MonthlyTaxReport) : IMonthlyCardData[] {
  if (monthlyTaxReport) {
    return [
      {
        color: '#05E985',
        label: 'Volume Disponível',
        value: negativeOrUndefinedToZero(monthlyTaxReport.remainExemptionVolumeBrazil),
      }, {
        color: '#EB5050',
        label: 'Volume gasto',
        value: monthlyTaxReport.exemptVolumeInfo.stocksExemptionSaleVolumeUsedBrazil,
      },
    ];
  }
  return defaultExemptionData;
}

export function getTaxData(monthlyTaxReport ?: MonthlyTaxReport) : IMonthlyCardData[] {
  if (monthlyTaxReport) {
    const {
      subscriptionRightTax, internationalTax, cryptoTax, fiiTax, dayTradeTax, commonOpsTax,
    } = monthlyTaxReport.taxInfo;

    const { previousDarf } = monthlyTaxReport;

    if (!commonOpsTax && !fiiTax && !cryptoTax && !dayTradeTax && !subscriptionRightTax
        && !internationalTax && !previousDarf) {
      return defaultTaxData;
    }

    const taxData: IMonthlyCardData[] = [];

    if (previousDarf > 0) {
      taxData.push({
        color: '#52130e',
        label: 'DARFs Anteriores',
        value: previousDarf,
      });
    }
    if (commonOpsTax > 0) {
      taxData.push({
        color: '#FFE403',
        label: 'Operações Comuns',
        value: commonOpsTax,
      });
    }
    if (dayTradeTax > 0) {
      taxData.push({
        color: '#ae7f05',
        label: 'Day Trade',
        value: dayTradeTax,
      });
    }
    if (fiiTax > 0) {
      taxData.push({
        color: '#fa6819',
        label: 'Operações FII',
        value: fiiTax,
      });
    }
    if (cryptoTax > 0) {
      taxData.push({
        color: '#af4713',
        label: 'Criptomoeda',
        value: cryptoTax,
      });
    }
    if (subscriptionRightTax > 0) {
      taxData.push({
        color: '#ff0606',
        label: 'Subscrição',
        value: subscriptionRightTax,
      });
    }
    return taxData;
  }
  return defaultTaxData;
}

export function getProfitData(monthlyTaxReport ?: MonthlyTaxReport) : IMonthlyCardData[] {
  if (monthlyTaxReport) {
    const {
      subscriptionRightProfit, internationalProfit, cryptoProfit, fiiProfit, dayTradeProfit, commonOpsProfit,
    } = monthlyTaxReport.profitInfo;

    if (!commonOpsProfit
        && !dayTradeProfit
        && !fiiProfit
        && !cryptoProfit
        && !subscriptionRightProfit
        && !internationalProfit) {
      return defaultProfitData;
    }

    const profitData:IMonthlyCardData[] = [];

    if (commonOpsProfit !== 0) {
      profitData.push({
        color: '#52A9F4',
        label: 'Operações Comuns',
        value: commonOpsProfit,
      });
    }
    if (dayTradeProfit !== 0) {
      profitData.push({
        color: '#71D3DE',
        label: 'Day Trade',
        value: dayTradeProfit,
      });
    }
    if (fiiProfit !== 0) {
      profitData.push({
        color: '#6FC7AE',
        label: 'Operações FII',
        value: fiiProfit,
      });
    }
    if (cryptoProfit !== 0) {
      profitData.push({
        color: '#365f00',
        label: 'Criptomoeda',
        value: cryptoProfit,
      });
    }
    if (subscriptionRightProfit !== 0) {
      profitData.push({
        color: '#192d00',
        label: 'Subscrição',
        value: subscriptionRightProfit,
      });
    }
    return profitData;
  }
  return defaultProfitData;
}

export function getExemptionSaleVolumeUsedTitleInfo(monthlyTaxReport ?: MonthlyTaxReport) : number {
  return monthlyTaxReport ? monthlyTaxReport.remainExemptionVolumeBrazil : DEFAULT_STOCK_THRESHOLD;
}

export function getTaxHeaderValue(monthlyTaxReport : MonthlyTaxReport | undefined) : number {
  return monthlyTaxReport ? monthlyTaxReport.tax : 0;
}

export function getProfitHeaderValue(monthlyTaxReport : MonthlyTaxReport | undefined) : number {
  return monthlyTaxReport ? monthlyTaxReport.profit : 0;
}

export function getExpireDate(month: number): string {
  const date = new Date();
  return format(new Date(date.getFullYear(), month + 1, 0), 'dd/MM/yyyy');
}

export function getCalcPeriod(month: number): string {
  const date = new Date();
  return format(new Date(date.getFullYear(), month, 0), 'dd/MM/yyyy');
}

/**
 * Function is called if DARF generation button is clicked. It handles exceptions and CPF validation.
 * @param monthNumber current month of DARF generation
 * @param darfPayable it's the payable darfValue (e.g.: DARFs under R$9.00 are not payable)
 * @param name user's name, to be printed on DARF
 */
export async function handleClickDarf(monthNumber: number, darfPayable: number, name?: string):
  Promise<EHandleClickDarf> {
  const expireDate = getExpireDate(monthNumber);
  const calcPeriod = getCalcPeriod(monthNumber);
  const currentDate = new Date();

  /*
  * According to SICALCWEB, we can't generate DARF's if it's value is less than R$10.00,
  * so it will be accumulated to the next month
  */
  if (darfPayable < 10) {
    Swal.fire({
      title: 'Valor da DARF é menor que R$10,00 e por isso será adicionada ao próximo mês.',
      icon: 'warning',
    });
    return EHandleClickDarf.LOWER_THAN_DARF;
  }

  // Cases with penalty our system does not support yet, DARF with overdue
  if (monthNumber < (currentDate.getMonth())) {
    const darfValueStr = (darfPayable).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const result = await Swal.fire({
      title: `DARF em atraso com o valor de ${darfValueStr}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ir para a SicalcWeb',
    });

    if (result.isConfirmed) {
      window.open('https://sicalc.receita.economia.gov.br/sicalc/rapido/contribuinte');
    }

    return EHandleClickDarf.LATE_DARF;
  }

  const cpf = await handleDarf();

  /* In cases that DARF Generation was clicked */
  if (cpf) {
    window.open(`/Darf?calcPeriod=${calcPeriod}&darfValue=${JSON.stringify(darfPayable)}
                &expireDate=${expireDate}&name=${name}&cpf=${cpf}`);
    return EHandleClickDarf.SUCCESS_DARF;
  }
  return EHandleClickDarf.NOT_FILLED_DARF;
}

export async function handleDarf(): Promise<string | null> {
  return Swal.mixin({
    input: 'text',
    confirmButtonText: 'Confirmar',
    showCancelButton: true,
    icon: 'info',
  }).queue([
    {
      title: 'Insira seu CPF',
    },
  ]).then((result: any) => {
    if (result.value) {
      if (!checkCPF(result.value[0])) {
        Swal.fire({
          title: 'CPF inválido!',
        });
        return null;
      }
      return result.value[0];
    }
    return null;
  });
}

export function checkCPF(cpf: string): boolean {
  let Soma = 0;
  let Resto = 0;
  let i = 0;
  cpf = cpf.replace(/[^a-zA-Z0-9 ]/g, '');

  if (cpf === '00000000000') return false;

  for (i = 1; i <= 9; i += 1) Soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(cpf.substring(9, 10), 10)) return false;

  Soma = 0;
  for (i = 1; i <= 10; i += 1) Soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(cpf.substring(10, 11), 10)) return false;
  return true;
}

/**
 * Search at TaxReport redux state if contains the report of this year of input monthNumber
 * @param taxReport: Tax Report Redux State from API
 * @param monthNumber: Month number to get the report (January:1, Feb: 2,..., December: 12)
 */
export const getMonthlyReport = (monthNumber: number, taxReport?: ITaxReport)
    : MonthlyTaxReport | undefined => {
  const thisYear = new Date().getFullYear();
  if (taxReport) {
    return taxReport.monthlyReports.find((item) => (item.monthIndex === monthNumber - 1)
        && item.year === thisYear);
  }
  return taxReport;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const MARK_DARF_DELAY = 600;

export const markDarfAsPaid = async (
  monthIndex: number, year: number,
  dispatch: Dispatch<any>,
) : Promise<void> => {
  // Fires up a parallel delay that takes MARK_DARF_DELAY milliseconds to complete
  const delayPromise = delay(MARK_DARF_DELAY);

  // Call the create darf payment API
  const result = await createDarfPayment({
    month: monthIndex + 1,
    year,
  });

  if ((result as IApiError).errorCode) {
    const darfError = result as IApiError;
    Swal.fire({
      icon: 'error',
      title: 'Um erro ocorreu ao tentar registrar o pagamento da sua DARF',
      html: multinesErrorToHtml(darfError.errorMessage),
    });

    return;
  }

  const darfPaid = result as IApiDarfPayment;
  dispatch(markDarfPaid(monthIndex, year, darfPaid.id));

  // Ensures at least one second has passed. If API takes more than the minimum loading time, this will be finished
  // and resolve straight away. When API completes too fast, this ensures at least the configured time will pass
  await delayPromise;
};

export const deleteDarf = async (
  monthIndex: number, year: number, darfId: number,
  dispatch: Dispatch<any>,
) => {
  // Fires up a parallel delay that takes MARK_DARF_DELAY milliseconds to complete
  const delayPromise = delay(MARK_DARF_DELAY);

  // Call the delete darf payment API
  const result = await deleteDarfPayment(darfId);
  if ((result as IApiError).errorCode) {
    const darfError = result as IApiError;
    Swal.fire({
      icon: 'error',
      title: 'Um erro ocorreu ao tentar remover o pagamento da sua DARF',
      html: multinesErrorToHtml(darfError.errorMessage),
    });

    return;
  }

  dispatch(markDarfUnpaid(monthIndex, year));

  // Ensures at least one second has passed. If API takes more than the minimum loading time, this will be finished
  // and resolve straight away. When API completes too fast, this ensures at least the configured time will pass
  await delayPromise;
};

export function parseOperationsHistory(operations: IOperationsHistory[] | undefined,
  month: number): IParsedOperationsHistory[] {
  if (!operations) return [];

  // sorts the array by date, and inside the date, by profit on descending order
  const sorted = operations.sort((a, b) => {
    if (a.date === b.date) return ((a.profit < b.profit) ? 1 : -1);
    return ((a.date > b.date) ? 1 : -1);
  });

  // object iniciates with first element of sorted array
  const parsed: IParsedOperationsHistory[] = [{
    date: sorted[0].date,
    operations: [sorted[0]],
  }];

  // and it will be updated along the way, joining operations with the same date,
  // so it can be better reorganized when calling History component
  // but excluding operations with profit 0,00
  sorted.reduce((last, curr) => {
    if ((last.date !== curr.date || last === sorted[0]) && curr.profit !== 0) {
      parsed.push({
        date: curr.date,
        operations: [curr],
      });
    } else if (curr.profit !== 0) {
      parsed.filter((op) => op.date === curr.date)[0].operations.push(curr);
    }
    return curr;
  });

  return parsed.filter((op) => {
    const date = new Date(Date.parse(op.date));
    return ((date.getMonth() + 1) === month);
  });
}
